import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";

export default function AdminUserList() {

  const [allClientData, setallClientData] = useState([]); // State to store fetched data
   // State to store selected application for modal



  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get-client-data");
        if (response.data.success) {
          setallClientData(response.data.data); // Set the fetched data to state
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
          appplication {allClientData.length}
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
              {allClientData.map((allClientData, index) => (
                <tr key={index}>
                 
                  <td>{allClientData.firstName}</td>
                  <td>{allClientData.nationality}</td>
                  <td>{allClientData.number}</td>
                  <td>{allClientData.email}</td>
                 
           
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







