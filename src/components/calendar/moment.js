import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const [showModel, setshowModel] = useState(false);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch(
            'https://ed6041b6-8484-4c73-978a-b701e3a9a21f.mock.pstmn.io/FreeSlotAPI'
        )
            .then((response) => response.json())
            .then((data) => setDepartments(data))
            .catch((error) => console.error(error));
    }, []);
    const handleSelectSlot = () => {
        setshowModel(true);
    };

    return (
        <div
            className="container"
            style={{
                width: '600px',
                height: '500px',
                paddingRight: '100px',
            }}
        >
            <div style={{ height: '500px', margin: '10px' }}>
                <Calendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    selectable={true}
                    onSelectSlot={handleSelectSlot}
                    style={{
                        height: '500px',
                        margin: '50px',
                        width: '1300px',
                        marginRight: '500px',
                        marginTop: '1px',
                        padding: '10px',
                        float: 'left',
                        position: 'absolute',
                        left: '150px',
                    }}
                />

                {showModel && (
                    <div className="modal" tabindex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        Add New Event
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <div className="box">
                                        <h5 className="modal-title">
                                            Doctor Details
                                        </h5>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        Department *
                                                    </th>
                                                    <th scope="col">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                        >
                                                            {departments && (
                                                                <option
                                                                    selected
                                                                >
                                                                    {
                                                                        departments.department
                                                                    }
                                                                </option>
                                                            )}
                                                        </select>
                                                    </th>
                                                    <th scope="col">
                                                        Doctor *
                                                    </th>
                                                    <th scope="col">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                        >
                                                            {departments && (
                                                                <option
                                                                    selected
                                                                >
                                                                    {
                                                                        departments.doctor_name
                                                                    }
                                                                </option>
                                                            )}
                                                        </select>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th scope="col">
                                                        Appointment Date *
                                                    </th>
                                                    <th scope="col">
                                                        <div className="col-auto">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value="2024-04-15"
                                                            />

                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary mb-3"
                                                                style={{
                                                                    backgroundColor:
                                                                        'orange',
                                                                }}
                                                            >
                                                                Availability
                                                            </button>
                                                        </div>
                                                    </th>
                                                    <th scope="col">
                                                        Purpose *
                                                    </th>
                                                    <th scope="col">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                        >
                                                            <option selected>
                                                                SELECT PURPOSE
                                                            </option>
                                                        </select>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th scope="col">Notes</th>
                                                    <th scope="col">
                                                        <div className="input-group">
                                                            <textarea
                                                                className="form-control"
                                                                aria-label="With textarea"
                                                            ></textarea>
                                                        </div>
                                                    </th>
                                                    <th scope="col">
                                                        Confirmed
                                                    </th>
                                                    <th scope="col">
                                                        <div class="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                for="flexCheckDefault"
                                                                style={{
                                                                    fontSize:
                                                                        '10px',
                                                                }}
                                                            >
                                                                (Check if yes)
                                                            </label>
                                                        </div>
                                                    </th>
                                                </tr>
                                                <tr></tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        style={{
                                            marginLeft: '950px',
                                            marginTop: '20px',
                                        }}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default MyCalendar;
