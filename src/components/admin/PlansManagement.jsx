import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
// import { Label } from '../ui/label';

function PlansManagement() {
  const [plans, setPlans] = useState([]);
  const [editingPlan, setEditingPlan] = useState(null);
  const [newPlan, setNewPlan] = useState({ name: '', description: '', price: '', duration: '' });

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get('/api.php?action=getPlans');
      setPlans(response.data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  const handleEdit = (plan) => {
    setEditingPlan(plan);
  };

  const handleSave = async () => {
    try {
      await axios.post('/api.php?action=updatePlan', editingPlan);
      setEditingPlan(null);
      fetchPlans();
    } catch (error) {
      console.error('Error updating plan:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post('/api.php?action=deletePlan', { id });
      fetchPlans();
    } catch (error) {
      console.error('Error deleting plan:', error);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await axios.post('/api.php?action=togglePlanStatus', { id, status: !currentStatus });
      fetchPlans();
    } catch (error) {
      console.error('Error toggling plan status:', error);
    }
  };

  const handleAddPlan = async () => {
    try {
      await axios.post('/api.php?action=addPlan', newPlan);
      setNewPlan({ name: '', description: '', price: '', duration: '' });
      fetchPlans();
    } catch (error) {
      console.error('Error adding plan:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Plans Management</h2>
      
      {/* Add new plan form */}
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-semibold mb-2">Add New Plan</h3>
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Plan Name"
            value={newPlan.name}
            onChange={(e) => setNewPlan({...newPlan, name: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Description"
            value={newPlan.description}
            onChange={(e) => setNewPlan({...newPlan, description: e.target.value})}
          />
          <Input
            type="number"
            placeholder="Price"
            value={newPlan.price}
            onChange={(e) => setNewPlan({...newPlan, price: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Duration"
            value={newPlan.duration}
            onChange={(e) => setNewPlan({...newPlan, duration: e.target.value})}
          />
        </div>
        <Button onClick={handleAddPlan} className="mt-2">Add Plan</Button>
      </div>

      {/* Plans list */}
      <div className="space-y-4">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white p-4 rounded shadow">
            {editingPlan && editingPlan.id === plan.id ? (
              <div className="space-y-2">
                <Input
                  type="text"
                  value={editingPlan.name}
                  onChange={(e) => setEditingPlan({...editingPlan, name: e.target.value})}
                />
                <Input
                  type="text"
                  value={editingPlan.description}
                  onChange={(e) => setEditingPlan({...editingPlan, description: e.target.value})}
                />
                <Input
                  type="number"
                  value={editingPlan.price}
                  onChange={(e) => setEditingPlan({...editingPlan, price: e.target.value})}
                />
                <Input
                  type="text"
                  value={editingPlan.duration}
                  onChange={(e) => setEditingPlan({...editingPlan, duration: e.target.value})}
                />
                <Button onClick={handleSave}>Save</Button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p>{plan.description}</p>
                <p>Price: ${plan.price}</p>
                <p>Duration: {plan.duration}</p>
                <div className="mt-2 space-x-2">
                  <Button onClick={() => handleEdit(plan)}>Edit</Button>
                  <Button onClick={() => handleDelete(plan.id)} variant="destructive">Delete</Button>
                  <Button onClick={() => handleToggleStatus(plan.id, plan.is_active)}>
                    {plan.is_active ? 'Disable' : 'Enable'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlansManagement;

