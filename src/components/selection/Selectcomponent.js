import React from 'react';

function Selectcomponent() {
    return (
        <div className="container">
            <div className="department">
                <h4 style={{ fontSize: '10px' }}>Department</h4>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    style={{ width: '160px' }}
                >
                    <option selected>ALL DEPARTMENT</option>
                </select>
            </div>
            <div className="doctor">
                <h4 style={{ fontSize: '10px' }}>Doctor</h4>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    style={{ width: '160px' }}
                >
                    <option selected>SELECT ALL DOCTOR</option>
                </select>
            </div>
            <ul className="list-group">
                <li
                    className="list-group-item"
                    style={{
                        backgroundColor: 'green',
                        width: '100px',
                        fontSize: '10px',
                    }}
                >
                    Registered
                </li>
                <li
                    className="list-group-item"
                    style={{
                        backgroundColor: 'pink',
                        width: '100px',
                        fontSize: '10px',
                    }}
                >
                    Not confirmed
                </li>
                <li
                    className="list-group-item"
                    style={{
                        backgroundColor: 'purple',
                        width: '100px',
                        fontSize: '10px',
                    }}
                >
                    Confirmed
                </li>
                <li
                    className="list-group-item"
                    style={{
                        backgroundColor: 'red',
                        width: '100px',
                        fontSize: '10px',
                    }}
                >
                    Doctor is not available
                </li>
            </ul>
        </div>
    );
}

export default Selectcomponent;
