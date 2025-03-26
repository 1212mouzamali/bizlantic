import React, { useState, useEffect } from "react";
import './admin.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";

export default function ApplicationList() {
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
          setApplications(response.data.data);
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
          <div className="col">
            <p className="Popins-semibold fs-5"> APPLICATIONS ({applications.length})</p>

            <Table >
              <div className=" d-none d-md-block">
                <thead className=" d-md-table-header-group for-admin-application-row-font ">
                  <tr >
                    <th className="admin-app-agency  gray">AGENCY</th>
                    <th className="admin-app-name  gray">NAME</th>
                    <th className="admin-app-ph  gray">PHONE NUMBER</th>
                    <th className="admin-app-email  gray">EMAIL ID</th>
                    <th className="admin-app-nationality  gray">NATIONALITY</th>
                    <th className="admin-app-status  gray">Status</th>

                  </tr>
                </thead>
              </div>
            </Table>
            <Table responsive>

              <tbody className="for-admin-application-row-font">
                {applications.map((application, index) => (
                  <tr key={index} className="d-flex flex-column d-md-table-row">
                    <td>
                      <span className="d-md-none fw-bold">AGENCY: </span>
                      <p className="for-word-break admin-app-agency-content mb-0">Ajman Freezone</p>
                    </td>
                    <td>
                      <span className="d-md-none fw-bold">NAME: </span>
                      <p className="for-word-break admin-app-name-content mb-0"> {application.userInfo.fullName}</p>

                    </td>

                    <td>
                      <span className="d-md-none fw-bold">PHONE NUMBER: </span>
                      <p className="for-word-break admin-app-ph-content mb-0">{application.userInfo.phoneNumber}</p>
                    </td>
                    <td>
                      <span className="d-md-none fw-bold">EMAIL ID: </span>
                      <p className="for-word-break admin-app-email-content mb-0">{application.userInfo.email}</p>
                    </td>
                    <td>
                      <span className="d-md-none fw-bold ">NATIONALITY: </span>
                      <p className="for-word-break admin-app-nationality-content mb-0">{application.userInfo.nationality}</p>
                    </td>
                    <td>
                      <span className="d-md-none fw-bold">Status: </span>
                      <p className="for-word-break yellow-color bg-yellow-color text-center rounded-1 py-1 admin-app-status-content mb-0"> Pending</p>
                    </td>
                    <td>
                      <Button variant="dark" onClick={() => handleShow(application)} className="w-100">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
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
      {/* </div > */}
    </>
  );
}








//socketio section starts here it will be seen later
//socketio section starts here it will be seen later
//socketio section starts here it will be seen later
//socketio section starts here it will be seen later

// import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import { io } from "socket.io-client"; // Import socket.io-client

// export default function ApplicationList() {
//   const [show, setShow] = useState(false);
//   const [applications, setApplications] = useState([]); // State to store fetched data
//   const [selectedApplication, setSelectedApplication] = useState(null); // State to store selected application for modal

//   const handleClose = () => setShow(false);
//   const handleShow = (application) => {
//     setSelectedApplication(application); // Set the selected application
//     setShow(true); // Show the modal
//   };

//   // Fetch initial data from the backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/cost-calc-data");
//         if (response.data.success) {
//           setApplications(response.data.data); // Set the fetched data to state
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Set up WebSocket connection
//   useEffect(() => {
//     const socket = io("http://localhost:3000"); // Connect to the WebSocket server

//     // Listen for 'newData' events from the server
//     socket.on('newData', (newData) => {
//       setApplications((prev) => [...prev, newData]); // Add new data to the table
//     });

//     // Cleanup WebSocket connection on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <>
//       <div className="container mt-5 pt-5">
//         <div className="row pt-5">
//           <Table>
//             <thead>
//               <tr>
//                 <th>AGENCY</th>
//                 <th>NAME</th>
//                 <th>NATIONALITY</th>
//                 <th>PHONE NUMBER</th>
//                 <th>EMAIL ID</th>
//                 <th>LICENSE TYPE</th>
//                 <th>CITY TYPE</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.map((application, index) => (
//                 <tr key={index}>
//                   <td>Ajman Freezone</td> {/* Replace with actual agency data if available */}
//                   <td>{application.userInfo.fullName}</td>
//                   <td>{application.userInfo.nationality}</td>
//                   <td>{application.userInfo.phoneNumber}</td>
//                   <td>{application.userInfo.email}</td>
//                   <td>{application.userInfo.licensetype}</td>
//                   <td>{application.userInfo.citytype}</td>
//                   <td>Pending</td> {/* Replace with actual status if available */}
//                   <td>
//                     <Button variant="dark" onClick={() => handleShow(application)}>
//                       View
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>

//           {/* React Bootstrap Modal */}
//           <Modal show={show} onHide={handleClose} centered>
//             <Modal.Header closeButton>
//               <Modal.Title>Application Details</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               {selectedApplication && (
//                 <div>
//                   <p><strong>Full Name:</strong> {selectedApplication.userInfo.fullName}</p>
//                   <p><strong>Email:</strong> {selectedApplication.userInfo.email}</p>
//                   <p><strong>Phone Number:</strong> {selectedApplication.userInfo.phoneNumber}</p>
//                   <p><strong>Nationality:</strong> {selectedApplication.userInfo.nationality}</p>
//                   <p><strong>License Type:</strong> {selectedApplication.userInfo.licensetype}</p>
//                   <p><strong>City Type:</strong> {selectedApplication.userInfo.citytype}</p>
//                   <p><strong>Business Activities:</strong> {selectedApplication.businessActivities.join(", ")}</p>
//                   <p><strong>Visa:</strong> {selectedApplication.selectedOptions.visa}</p>
//                   <p><strong>Shareholder:</strong> {selectedApplication.selectedOptions.shareholder}</p>
//                   <p><strong>Office Space:</strong> {selectedApplication.selectedOptions.officeSpace}</p>
//                 </div>
//               )}
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       </div>
//     </>
//   );
// }