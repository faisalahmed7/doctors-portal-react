import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-xl text-secondary my-16'>Available Appointment on: {format(date, 'PP')}</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                    ></AppointmentService>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;