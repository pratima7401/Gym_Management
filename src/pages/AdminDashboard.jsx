import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LayoutDashboard, Dumbbell, CreditCard, Users, ShoppingBag, Plus, Pencil, Trash, ToggleLeft, ToggleRight, LogOut  } from 'lucide-react';
import {Button} from '../components/ui/button';
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

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const BASE_URL = 'C:xampp\htdocs\GYM\Gym_Management?action=';

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      let response;
      switch (activeTab) {
        case 'classes':
          response = await axios.get(`${BASE_URL}getClasses`);
          break;
        case 'getMembershipPlans':
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
  
      // Check if response data is an array
      const responseData = Array.isArray(response.data) ? response.data : [];
      setData(responseData);  // Ensure that `data` is always an array
    } catch (error) {
      console.error(`Error fetching ${activeTab}:`, error);
      setError(`Failed to fetch ${activeTab}. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };
  

  const handleLogout = () => {
    // Clear the session data (like token, user info, etc.)
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userToken');
    
    // Optionally clear any global state
    // Dispatch a logout action if using redux or context

    // Redirect to the login page (or home page)
    navigate('/login'); // Use navigate() instead of history.push()
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
      await axios.post(`http://localhost/React/Projects/gym_app/src/components/htdocs/api.php?action=${action}`, editingItem);
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
      await axios.post(`http://localhost/React/Projects/gym_app/src/components/htdocs/api.php?action=${action}`, { id });
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
      await axios.post(`http://localhost/React/Projects/gym_app/src/components/htdocs/api.php?action=${action}`, { id, status: !currentStatus });
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
      await axios.post(`http://localhost/React/Projects/gym_app/src/components/htdocs/api.php?action=${action}`, newItem);
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
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  
  
  const renderAddDialog = () => {
    let fields;
    switch (activeTab) {
      case 'classes':
        fields = ['name', 'description', 'duration', 'capacity'];
        break;
      case 'plans':
        fields = ['name', 'description', 'price', 'duration'];
        break;
      case 'trainers':
        fields = ['name', 'specialization', 'experience'];
        break;
      case 'products':
        fields = ['name', 'description', 'price', 'stock'];
        break;
      default:
        return null;
    }

    return (
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mb-4">
            <Plus className="w-4 h-4 mr-2" /> Add New
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New {activeTab.slice(0, -1)}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {fields.map((field) => (
              <div key={field} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={field} className="text-right">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Label>
                <Input
                  id={field}
                  value={newItem[field] || ''}
                  onChange={(e) => setNewItem({ ...newItem, [field]: e.target.value })}
                  className="col-span-3"
                />
              </div>
            ))}
          </div>
          <Button onClick={handleAddItem}>Add</Button>
        </DialogContent>
      </Dialog>
    );
  };

  const renderDashboard = () => (
    <div className="bg-purple-500 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Welcome Admin!</h2>
      {/* <p>Select a category from the sidebar to manage gym data.</p> */}

    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button onClick={() => setActiveTab('dashboard')} className="flex  items-center p-2 hover:bg-gray-700 rounded w-full text-left">
                <LayoutDashboard className="mr-2" />
                Dashboard
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('classes')} className="flex items-center p-2 hover:bg-gray-700 rounded w-full text-left">
                <Dumbbell className="mr-2" />
                Classes
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('plans')} className="flex items-center p-2 hover:bg-gray-700 rounded w-full text-left">
                <CreditCard className="mr-2" />
                Plans
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('members')} className="flex items-center p-2 hover:bg-gray-700 rounded w-full text-left">
                <Users className="mr-2" />
                Members
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('trainers')} className="flex items-center p-2 hover:bg-gray-700 rounded w-full text-left">
                <Users className="mr-2" />
                Trainers
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('products')} className="flex items-center p-2 hover:bg-gray-700 rounded w-full text-left">
                <ShoppingBag className="mr-2" />
                Shop Products
              </button>
            </li>
            <li>
              <button onClick={handleLogout} className="flex items-center p-2 hover:bg-gray-700 rounded w-full text-left mt-6">
                <LogOut className="mr-2" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'dashboard' ? (
          renderDashboard()
        ) : (
          <div className="bg-purple-500 h-screen p-7 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h2>
            {renderAddDialog()}
            {renderTable()}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;

