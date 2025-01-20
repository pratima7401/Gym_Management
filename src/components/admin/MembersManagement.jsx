import  { useState, useEffect } from 'react';
import axios from 'axios';
// import { Button } from '../ui/button';
import { Input } from '../ui/input';

function MembersManagement() {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('/api.php?action=getMembers');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Members Management</h2>
      
      <Input
        type="text"
        placeholder="Search members..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4"
      />

      <div className="space-y-4">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p>Email: {member.email}</p>
            <p>Phone: {member.phone}</p>
            <p>Date of Birth: {member.dob}</p>
            <p>Joined: {new Date(member.created_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MembersManagement;

