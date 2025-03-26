import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

const SubscribersList = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch subscribers from the backend
    const fetchSubscribers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/subscribers');
            setSubscribers(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching subscribers:', error);
            setLoading(false);
        }

    };

    // Delete a subscriber
    const handleDelete = async (email) => {
        try {
            await axios.delete(`http://localhost:3000/subscribers/${email}`);
            fetchSubscribers(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting subscriber:', error);
        }
    };

    // Download all emails as PDF
    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        doc.text('SubscribersList', 10, 10);
        subscribers.forEach((subscriber, index) => {
            doc.text(`${index + 1}. ${subscriber.email}`, 10, 20 + (index * 10));
        });
        doc.save('subscribers-list.pdf');
    };

    // Fetch subscribers on component mount
    useEffect(() => {
        fetchSubscribers();
    }, []);

    return (
        <div>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-6 d-flex justify-content-between">
                        <p className='Popins-medium'>
                            Total Subscribers:({subscribers.length}) 
                        </p>
                        <p>
                            <button className='btn btn-primary Popins-light' onClick={handleDownloadPDF}>
                                Download All
                            </button>
                        </p>
                    </div>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    subscribers.map((subscriber) => (
                        <div className="row" key={subscriber._id}>
                            <div className="col-6 d-flex justify-content-between">
                                <p className='Popins-light'>{subscriber.email}</p>
                                <p>
                                    <button
                                        className='btn btn-danger Popins-medium px-5 py-1'
                                        onClick={() => handleDelete(subscriber.email)}
                                    >
                                        DELETE
                                    </button>
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SubscribersList;