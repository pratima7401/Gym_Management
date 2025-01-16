import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Input } from "../components/ui/input";
import { Users, Dumbbell, DollarSign, BarChart2 } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data (replace with actual data fetching in a real application)
  const members = [
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Premium' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Basic' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', plan: 'Standard' },
  ];

  const classes = [
    { id: 1, name: 'Yoga', instructor: 'Sarah Lee', time: '9:00 AM', capacity: 20 },
    { id: 2, name: 'Spinning', instructor: 'Mike Brown', time: '10:30 AM', capacity: 15 },
    { id: 3, name: 'Zumba', instructor: 'Lisa Chen', time: '5:00 PM', capacity: 25 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      <div className="flex mb-6">
        <Button
          onClick={() => setActiveTab('dashboard')}
          className={`mr-2 ${activeTab === 'dashboard' ? 'bg-purple-600' : 'bg-gray-700'}`}
        >
          Dashboard
        </Button>
        <Button
          onClick={() => setActiveTab('members')}
          className={`mr-2 ${activeTab === 'members' ? 'bg-purple-600' : 'bg-gray-700'}`}
        >
          Members
        </Button>
        <Button
          onClick={() => setActiveTab('classes')}
          className={`mr-2 ${activeTab === 'classes' ? 'bg-purple-600' : 'bg-gray-700'}`}
        >
          Classes
        </Button>
      </div>

      {activeTab === 'dashboard' && <DashboardTab />}
      {activeTab === 'members' && <MembersTab members={members} />}
      {activeTab === 'classes' && <ClassesTab classes={classes} />}
    </div>
  );
};

const DashboardTab = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <Card className="bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Members</CardTitle>
        <Users className="h-4 w-4 text-purple-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">1,234</div>
      </CardContent>
    </Card>
    <Card className="bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Active Classes</CardTitle>
        <Dumbbell className="h-4 w-4 text-purple-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">15</div>
      </CardContent>
    </Card>
    <Card className="bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
        <DollarSign className="h-4 w-4 text-purple-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$24,560</div>
      </CardContent>
    </Card>
    <Card className="bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Member Growth</CardTitle>
        <BarChart2 className="h-4 w-4 text-purple-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+12.5%</div>
      </CardContent>
    </Card>
  </div>
);

const MembersTab = ({ members }) => (
  <Card className="bg-gray-800 mb-8">
    <CardHeader>
      <CardTitle>Member Management</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between items-center mb-4">
        <Input className="w-64 bg-gray-700" placeholder="Search members..." />
        <Button className="bg-purple-600 hover:bg-purple-700">Add New Member</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.plan}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="outline" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

const ClassesTab = ({ classes }) => (
  <Card className="bg-gray-800">
    <CardHeader>
      <CardTitle>Class Management</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between items-center mb-4">
        <Input className="w-64 bg-gray-700" placeholder="Search classes..." />
        <Button className="bg-purple-600 hover:bg-purple-700">Add New Class</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class Name</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((cls) => (
            <TableRow key={cls.id}>
              <TableCell>{cls.name}</TableCell>
              <TableCell>{cls.instructor}</TableCell>
              <TableCell>{cls.time}</TableCell>
              <TableCell>{cls.capacity}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="outline" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default AdminPanel;

