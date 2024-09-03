import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, InputAdornment } from '@mui/material';
import { Send, Search } from '@mui/icons-material';
import "./usertable.css"

const initialData = [
  { userId: 1, username: 'shubham', email: 'sr35285@gmail.com', phone: '8087701542' },
  { userId: 2, username: 'amit', email: 'amit123@gmail.com', phone: '8087701543' },
  { userId: 3, username: 'rahul', email: 'rahul456@gmail.com', phone: '8087701544' },
];

function UserTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(initialData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  return (
    <div className="p-6 bg-[#f3f4f6] min-h-screen rounded-lg">
      <h1 className="mb-6 text-3xl font-bold text-black form-labels">User Table</h1>
      <div className="mb-4">
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search users"
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            className: "bg-white",
          }}
        />
      </div>
      <TableContainer component={Paper} className="rounded-lg shadow-lg">
        <Table>
          <TableHead className="bg-[#f3f4f6] rounded-lg">
            <TableRow>
              <TableCell className="font-semibold text-black table-labels">Username</TableCell>
              <TableCell className="font-semibold text-black table-labels">Email</TableCell>
              <TableCell className="font-semibold text-black table-labels">Phone</TableCell>
              <TableCell className="font-semibold text-black table-labels">Send Notification</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.userId}>
                <TableCell className='data-labels'>{user.username}</TableCell>
                <TableCell  className='data-labels'>{user.email}</TableCell>
                <TableCell  className='data-labels'>{user.phone}</TableCell>
                <TableCell>
                  <IconButton color="gray">
                    <Send />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserTable;
