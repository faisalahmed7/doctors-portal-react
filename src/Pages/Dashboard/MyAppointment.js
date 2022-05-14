import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([])

    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div>
            <h2>My Appointment: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(appointment =>
                                <tr>
                                    <th>1</th>
                                    <td>{appointment.patientName}</td>
                                    <td>{appointment.treatmentName}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>

                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;