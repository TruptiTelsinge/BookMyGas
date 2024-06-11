import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Connection() {
  const [connections, setConnections] = useState([]);
  const [connectionType, setConnectionType] = useState('');
  const [connectionDate, setConnectionDate] = useState('');

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    try {
      const response = await axios.get('/connections');
      setConnections(response.data);
    } catch (error) {
      console.error('Error fetching connections:', error);
    }
  };

  const addConnection = async () => {
    try {
      await axios.post('/api/connections', { connection_type: connectionType, connection_date: connectionDate });
      // Clear form fields after successful addition
      setConnectionType('');
      setConnectionDate('');
      // Fetch connections again to update the list
      fetchConnections();
    } catch (error) {
      console.error('Error adding connection:', error);
    }
  };

  return (
    <div>
      <h2>Connections</h2>
      <ul>
        {connections.map(connection => (
          <li key={connection._id}>
            <strong>Type:</strong> {connection.connection_type}, <strong>Date:</strong> {new Date(connection.connection_date).toLocaleDateString()}
          </li>
        ))}
      </ul>
      <h3>Add Connection</h3>
      <div>
        <label htmlFor="connectionType">Type:</label>
        <input
          type="text"
          id="connectionType"
          value={connectionType}
          onChange={e => setConnectionType(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="connectionDate">Date:</label>
        <input
          type="date"
          id="connectionDate"
          value={connectionDate}
          onChange={e => setConnectionDate(e.target.value)}
        />
      </div>
      <button onClick={addConnection}>Add Connection</button>
    </div>
  );
}

export default Connection;
