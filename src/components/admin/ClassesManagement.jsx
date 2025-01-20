import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
// import { Label } from '../ui/lable';

function ClassesManagement() {
  const [classes, setClasses] = useState([]);
  const [editingClass, setEditingClass] = useState(null);
  const [newClass, setNewClass] = useState({ name: '', description: '', duration: '', capacity: '' });

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('/api.php?action=getClasses');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleEdit = (classItem) => {
    setEditingClass(classItem);
  };

  const handleSave = async () => {
    try {
      await axios.post('/api.php?action=updateClass', editingClass);
      setEditingClass(null);
      fetchClasses();
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post('/api.php?action=deleteClass', { id });
      fetchClasses();
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await axios.post('/api.php?action=toggleClassStatus', { id, status: !currentStatus });
      fetchClasses();
    } catch (error) {
      console.error('Error toggling class status:', error);
    }
  };

  const handleAddClass = async () => {
    try {
      await axios.post('/api.php?action=addClass', newClass);
      setNewClass({ name: '', description: '', duration: '', capacity: '' });
      fetchClasses();
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Classes Management</h2>
      
      {/* Add new class form */}
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-semibold mb-2">Add New Class</h3>
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Class Name"
            value={newClass.name}
            onChange={(e) => setNewClass({...newClass, name: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Description"
            value={newClass.description}
            onChange={(e) => setNewClass({...newClass, description: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Duration"
            value={newClass.duration}
            onChange={(e) => setNewClass({...newClass, duration: e.target.value})}
          />
          <Input
            type="number"
            placeholder="Capacity"
            value={newClass.capacity}
            onChange={(e) => setNewClass({...newClass, capacity: e.target.value})}
          />
        </div>
        <Button onClick={handleAddClass} className="mt-2">Add Class</Button>
      </div>

      {/* Classes list */}
      <div className="space-y-4">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white p-4 rounded shadow">
            {editingClass && editingClass.id === classItem.id ? (
              <div className="space-y-2">
                <Input
                  type="text"
                  value={editingClass.name}
                  onChange={(e) => setEditingClass({...editingClass, name: e.target.value})}
                />
                <Input
                  type="text"
                  value={editingClass.description}
                  onChange={(e) => setEditingClass({...editingClass, description: e.target.value})}
                />
                <Input
                  type="text"
                  value={editingClass.duration}
                  onChange={(e) => setEditingClass({...editingClass, duration: e.target.value})}
                />
                <Input
                  type="number"
                  value={editingClass.capacity}
                  onChange={(e) => setEditingClass({...editingClass, capacity: e.target.value})}
                />
                <Button onClick={handleSave}>Save</Button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold">{classItem.name}</h3>
                <p>{classItem.description}</p>
                <p>Duration: {classItem.duration}</p>
                <p>Capacity: {classItem.capacity}</p>
                <div className="mt-2 space-x-2">
                  <Button onClick={() => handleEdit(classItem)}>Edit</Button>
                  <Button onClick={() => handleDelete(classItem.id)} variant="destructive">Delete</Button>
                  <Button onClick={() => handleToggleStatus(classItem.id, classItem.is_active)}>
                    {classItem.is_active ? 'Disable' : 'Enable'}
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

export default ClassesManagement;

