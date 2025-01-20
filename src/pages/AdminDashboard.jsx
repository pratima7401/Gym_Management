import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { API_BASE_URL } from '../config';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('members');
  const [members, setMembers] = useState([]);
  const [plans, setPlans] = useState([]);
  const [classes, setClasses] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/${activeTab}/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      switch (activeTab) {
        case 'members':
          setMembers(data);
          break;
        case 'plans':
          setPlans(data);
          break;
        case 'classes':
          setClasses(data);
          break;
        case 'products':
          setProducts(data);
          break;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleAdd = async (type) => {
    const name = prompt(`Enter ${type} name:`);
    const description = prompt(`Enter ${type} description:`);
    if (name && description) {
      try {
        const response = await fetch(`${API_BASE_URL}/${type}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ name, description }),
        });
        const data = await response.json();
        if (response.ok) {
          fetchData();
        } else {
          alert(`Failed to add ${type}: ${data.message}`);
        }
      } catch (error) {
        console.error('Error adding item:', error);
        alert(`An error occurred while adding ${type}. Please try again.`);
      }
    }
  };

  const handleEdit = async (type, id) => {
    const item = activeTab === 'members' ? members.find(m => m.id === id) :
                 activeTab === 'plans' ? plans.find(p => p.id === id) :
                 activeTab === 'classes' ? classes.find(c => c.id === id) :
                 products.find(p => p.id === id);

    const name = prompt(`Enter new ${type} name:`, item.name);
    const description = prompt(`Enter new ${type} description:`, item.description);

    if (name && description) {
      try {
        const response = await fetch(`${API_BASE_URL}/${type}/${id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ name, description }),
        });
        const data = await response.json();
        if (response.ok) {
          fetchData();
        } else {
          alert(`Failed to update ${type}: ${data.message}`);
        }
      } catch (error) {
        console.error('Error updating item:', error);
        alert(`An error occurred while updating ${type}. Please try again.`);
      }
    }
  };

  const handleDelete = async (type, id) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        const response = await fetch(`${API_BASE_URL}/${type}/${id}/`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.ok) {
          fetchData();
        } else {
          const data = await response.json();
          alert(`Failed to delete ${type}: ${data.message}`);
        }
      } catch (error) {
        console.error('Error deleting item:', error);
        alert(`An error occurred while deleting ${type}. Please try again.`);
      }
    }
  };

  const handleToggleStatus = async (type, id, currentStatus) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${type}/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ status: currentStatus === 'enabled' ? 'disabled' : 'enabled' }),
      });
      if (response.ok) {
        fetchData();
      } else {
        const data = await response.json();
        alert(`Failed to toggle status: ${data.message}`);
      }
    } catch (error) {
      console.error('Error toggling status:', error);
      alert('An error occurred while toggling status. Please try again.');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'members':
        return (
          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'plans':
      case 'classes':
      case 'products':
        const items = activeTab === 'plans' ? plans : activeTab === 'classes' ? classes : products;
        return (
          <div>
            <Button onClick={() => handleAdd(activeTab)} className="mb-4">Add New</Button>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                    <td>
                      <Button onClick={() => handleEdit(activeTab, item.id)} className="mr-2">Edit</Button>
                      <Button onClick={() => handleDelete(activeTab, item.id)} className="mr-2">Delete</Button>
                      <Button onClick={() => handleToggleStatus(activeTab, item.id, item.status)}>
                        {item.status === 'enabled' ? 'Disable' : 'Enable'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
          Logout
        </Button>
      </div>
      <div className="mb-4">
        <Button onClick={() => setActiveTab('members')} className={`mr-2 ${activeTab === 'members' ? 'bg-purple-600' : 'bg-gray-600'}`}>Members</Button>
        <Button onClick={() => setActiveTab('plans')} className={`mr-2 ${activeTab === 'plans' ? 'bg-purple-600' : 'bg-gray-600'}`}>Plans</Button>
        <Button onClick={() => setActiveTab('classes')} className={`mr-2 ${activeTab === 'classes' ? 'bg-purple-600' : 'bg-gray-600'}`}>Classes</Button>
        <Button onClick={() => setActiveTab('products')} className={`mr-2 ${activeTab === 'products' ? 'bg-purple-600' : 'bg-gray-600'}`}>Shop Products</Button>
      </div>
      {renderContent()}
    </div>
  );
}

export default AdminDashboard;

