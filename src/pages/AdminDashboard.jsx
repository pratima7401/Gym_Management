import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LayoutDashboard, Dumbbell, CreditCard, Users, ShoppingBag, Plus, Pencil, Trash, ToggleLeft, ToggleRight, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({});
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const BASE_URL = 'http://localhost/React/Projects/gym_app/src/components/htdocs/api.php?action=';

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      let response;
      switch (activeTab) {
        case 'classes':
          response = await axios.get(`${BASE_URL}getClasses`);
          break;
        case 'plans':
          response = await axios.get(`${BASE_URL}getMembershipPlans`);
          break;
        case 'trainers':
          response = await axios.get(`${BASE_URL}getTrainers`);
          break;
        case 'products':
          response = await axios.get(`${BASE_URL}getProducts`);
          break;
        case 'members':
          response = await axios.get(`${BASE_URL}getMembers`);
          break;
        default:
          setLoading(false);
          return;
      }
      const responseData = Array.isArray(response.data) ? response.data : [];
      setData(responseData);
    } catch (error) {
      console.error(`Error fetching ${activeTab}:`, error);
      setError(`Failed to fetch ${activeTab}. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userToken');
    navigate('/login');
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleSave = async () => {
    try {
      let action;
      switch (activeTab) {
        case 'classes':
          action = 'updateClass';
          break;
        case 'plans':
          action = 'updatePlan';
          break;
        case 'trainers':
          action = 'updateTrainer';
          break;
        case 'products':
          action = 'updateProduct';
          break;
        default:
          return;
      }
      await axios.post(`${BASE_URL}${action}`, editingItem);
      setEditingItem(null);
      fetchData();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let action;
      switch (activeTab) {
        case 'classes':
          action = 'deleteClass';
          break;
        case 'plans':
          action = 'deletePlan';
          break;
        case 'trainers':
          action = 'deleteTrainer';
          break;
        case 'products':
          action = 'deleteProduct';
          break;
        default:
          return;
      }
      await axios.post(`${BASE_URL}${action}`, { id });
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      let action;
      switch (activeTab) {
        case 'classes':
          action = 'toggleClassStatus';
          break;
        case 'plans':
          action = 'togglePlanStatus';
          break;
        default:
          return;
      }
      await axios.post(`${BASE_URL}${action}`, { id, status: !currentStatus });
      fetchData();
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      let action;
      switch (activeTab) {
        case 'classes':
          action = 'addClass';
          break;
        case 'plans':
          action = 'addPlan';
          break;
        case 'trainers':
          action = 'addTrainer';
          break;
        case 'products':
          action = 'addProduct';
          break;
        default:
          return;
      }
      await axios.post(`${BASE_URL}${action}`, newItem);
      setNewItem({});
      setIsAddDialogOpen(false);
      fetchData();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const renderTable = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!Array.isArray(data) || data.length === 0) return <p>No data available for {activeTab}.</p>;

    let columns;
    switch (activeTab) {
      case 'classes':
        columns = ['Name', 'Description', 'Duration', 'Capacity', 'Actions'];
        break;
      case 'plans':
        columns = ['Name', 'Description', 'Price', 'Duration', 'Actions'];
        break;
      case 'members':
        columns = ['ID', 'Name', 'Email', 'Phone', 'Date of Birth', 'Join_Date', 'Action'];
        break;
      case 'trainers':
        columns = ['Name', 'Specialization', 'Experience', 'Actions'];
        break;
      case 'products':
        columns = ['Name', 'Description', 'Price', 'Stock', 'Actions'];
        break;
      default:
        return null;
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={index}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id || index}>
              {columns.slice(0, -1).map((column, colIndex) => (
                <TableCell key={colIndex}>
                  {editingItem && editingItem.id === item.id ? (
                    <Input
                      value={editingItem[column.toLowerCase()] || ''}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, [column.toLowerCase()]: e.target.value })
                      }
                    />
                  ) : (
                    item[column.toLowerCase()] || ''
                  )}
                </TableCell>
              ))}
              <TableCell>
                {editingItem && editingItem.id === item.id ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <>
                    <Button onClick={() => handleEdit(item)} className="mr-2">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button onClick={() => handleDelete(item.id)} variant="destructive" className="mr-2">
                      <Trash className="w-4 h-4" />
                    </Button>
                    {(activeTab === 'classes' || activeTab === 'plans') && (
                      <Button onClick={() => handleToggleStatus(item.id, item.is_active)}>
                        {item.is_active ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                      </Button>
                    )}
                 
