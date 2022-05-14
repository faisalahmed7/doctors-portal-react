import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)


    const formattedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())

    )

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h2 className='text-center text-xl text-secondary my-16'>Available Appointment on: {format(date, 'PP')}</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;