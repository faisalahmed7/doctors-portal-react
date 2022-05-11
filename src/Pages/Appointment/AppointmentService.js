import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {

    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h4 className="text-2xl font-bold text-secondary text-center">{name}</h4>
                <p className=''>{
                    slots.length > 0 ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-sm text-red-500'>Try Another Day</span>
                }</p>
                <p className=''>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>


                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal" className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;