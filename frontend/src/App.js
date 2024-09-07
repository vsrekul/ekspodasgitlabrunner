import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const addEmployee = () => {
    axios.post('http://localhost:5000/employees', { name, position })
      .then(response => {
        setEmployees([...employees, { id: response.data.id, name, position }]);
        setName('');
        setPosition('');
      })
      .catch(error => console.error('Error adding employee:', error));
  };

  return (
    <div>
      <h1>Employee Portal</h1>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Position" 
        value={position} 
        onChange={e => setPosition(e.target.value)} 
      />
      <button onClick={addEmployee}>Add Employee</button>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.position}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
