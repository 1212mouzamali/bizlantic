import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const Messages = () => {
    const [allMessages, setallMessages] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {

    //         try {
    //             const response = await axios.get("http://localhost:3000/get-message");
    //             if (response.data.success) {
    //                 setallMessages(response.data.data);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }
    //     fetchData();
    // }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/get-message");
                if (response.data.success) {
                    setallMessages(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className="container mt-5">
                <div className="row pt-5">
                    <div className="col-8 mt-5">
                        <table className='table table-striped'>
                            <thead>

                                <tr >
                                    <th>Name</th>
                                    <th>Mobile Number</th>
                                    <th>Email ID</th>
                                    <th>Service Type</th>
                                    <th>Messages</th>
                                    <th><button className='btn btn-danger'>Delete</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {allMessages.map((allMessages, index) => (
                                    <tr key={index}>
                                        <td>{allMessages.name}</td>
                                        <td>{allMessages.number}</td>
                                        <td>{allMessages.select}</td>
                                        <td>{allMessages.email}</td>
                                        <td>{allMessages.select}</td>
                                        <td>{allMessages.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;