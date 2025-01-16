import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
// import { Label } from '../ui/label';

function TrainersManagement() {
  const [trainers, setTrainers] = useState([]);
  const [editingTrainer, setEditingTrainer] = useState(null);
  const [newTrainer, setNewTrainer] = useState({ name: '', specialization: '', experience: '' });

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('/api.php?action=getTrainers');
      setTrainers(response.data);
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  };

  const handleEdit = (trainer) => {
    setEditingTrainer(trainer);
  };

  const handleSave = async () => {
    try {
      await axios.post('/api.php?action=updateTrainer', editingTrainer);
      setEditingTrainer(null);
      fetchTrainers();
    } catch (error) {
      console.error('Error updating trainer:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post('/api.php?action=deleteTrainer', { id });
      fetchTrainers();
    } catch (error) {
      console.error('Error deleting trainer:', error);
    }
  };

  const handleAddTrainer = async () => {
    try {
      await axios.post('/api.php?action=addTrainer', newTrainer);
      setNewTrainer({ name: '', specialization: '', experience: '' });
      fetchTrainers();
    } catch (error) {
      console.error('Error adding trainer:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Trainers Management</h2>
      
      {/* Add new trainer form */}
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-semibold mb-2">Add New Trainer</h3>
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Trainer Name"
            value={newTrainer.name}
            onChange={(e) => setNewTrainer({...newTrainer, name: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Specialization"
            value={newTrainer.specialization}
            onChange={(e) => setNewTrainer({...newTrainer, specialization: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Experience"
            value={newTrainer.experience}
            onChange={(e) => setNewTrainer({...newTrainer, experience: e.target.value})}
          />
        </div>
        <Button onClick={handleAddTrainer} className="mt-2">Add Trainer</Button>
      </div>

      {/* Trainers list */}
      <div className="space-y-4">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="bg-white p-4 rounded shadow">
            {editingTrainer && editingTrainer.id === trainer.id ? (
              <div className="space-y-2">
                <Input
                  type="text"
                  value={editingTrainer.name}
                  onChange={(e) => setEditingTrainer({...editingTrainer, name: e.target.value})}
                />
                <Input
                  type="text"
                  value={editingTrainer.specialization}
                  onChange={(e) => setEditingTrainer({...editingTrainer, specialization: e.target.value})}
                />
                <Input
                  type="text"
                  value={editingTrainer.experience}
                  onChange={(e) => setEditingTrainer({...editingTrainer, experience: e.target.value})}
                />
                <Button onClick={handleSave}>Save</Button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p>Specialization: {trainer.specialization}</p>
                <p>Experience: {trainer.experience}</p>
                <div className="mt-2 space-x-2">
                  <Button onClick={() => handleEdit(trainer)}>Edit</Button>
                  <Button onClick={() => handleDelete(trainer.id)} variant="destructive">Delete</Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainersManagement;

