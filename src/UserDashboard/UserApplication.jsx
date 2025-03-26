import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";

export default function UserApplication() {
  const [show, setShow] = useState(false);
  const [applications, setApplications] = useState([]); // State to store fetched data
  const [selectedApplication, setSelectedApplication] = useState(null); // State to store selected application for modal

  const handleClose = () => setShow(false);
  const handleShow = (application) => {
    setSelectedApplication(application); // Set the selected application
    setShow(true); // Show the modal
  };

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cost-calc-data");
        if (response.data.success) {
          setApplications(response.data.data); // Set the fetched data to state
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
          appplication {applications.length}
          <Table>
            <thead>
              <tr>
                {/* <th>AGENCY</th> */}
                <th>NAME</th>
                <th>CITY </th>
                <th>LICENSE TYPE</th>
                <th>LICENSE Cost</th>
                <th>Date</th>             
                
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application, index) => (
                <tr key={index}>
                  {/* <td>Ajman Freezone</td>  */}
                  <td>{application.userInfo.fullName}</td>                 
                  <td>{application.userInfo.licensetype}</td>
                  <td>{application.userInfo.citytype}</td>
                  <td>Pending</td> {/* Replace with actual status if available */}
                  <td>
                    <Button variant="dark" onClick={() => handleShow(application)}>
                    VIEW DETAILS
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* React Bootstrap Modal */}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Application Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedApplication && (
                <div>
                  <p><strong>Full Name:</strong> {selectedApplication.userInfo.fullName}</p>
                  <p><strong>Email:</strong> {selectedApplication.userInfo.email}</p>
                  <p><strong>Phone Number:</strong> {selectedApplication.userInfo.phoneNumber}</p>
                  <p><strong>Nationality:</strong> {selectedApplication.userInfo.nationality}</p>
                  <p><strong>License Type:</strong> {selectedApplication.userInfo.licensetype}</p>
                  <p><strong>City Type:</strong> {selectedApplication.userInfo.citytype}</p>
                  <p><strong>Business Activities:</strong> {selectedApplication.businessActivities.join(", ")}</p>
                  <p><strong>Visa:</strong> {selectedApplication.selectedOptions.visa}</p>
                  <p><strong>Shareholder:</strong> {selectedApplication.selectedOptions.shareholder}</p>
                  <p><strong>Office Space:</strong> {selectedApplication.selectedOptions.officeSpace}</p>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}








