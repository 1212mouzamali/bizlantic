import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";

export default function AgentList() {
  const [allAgentData, setallAgentData] = useState([]); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get-agent-data");
        if (response.data.success) {
          setallAgentData(response.data.data); // Set the fetched data to state
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-5 pt-5">
        
        <div className="row pt-5">
          allAgentData {allAgentData.length}
          <Table>
            <thead>
              <tr>               
                <th>NAME</th>
                <th>NATIONALITY</th>
                <th>PHONE NUMBER</th>
                <th>EMAIL ID</th>              
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allAgentData.map((allAgentData, index) => (
                <tr key={index}>
                 
                  <td>{allAgentData.firstName}</td>
                  <td>{allAgentData.agentNationality}</td>
                  <td>{allAgentData.number}</td>
                  <td>{allAgentData.email}</td>               
           
                  <td>
                    <Button variant="danger" >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

        </div>
      </div>
    </>
  );
}
