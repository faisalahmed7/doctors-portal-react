import React from 'react';

const AppointmentService = ({ service }) => {

    const { name, slots } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h4 class="card-title text-secondary text-center">{name}</h4>
                <p className='text-center'>{
                    slots.length > 0 ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-sm text-red-500'>Try Another Day</span>
                }</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>


                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-secondary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;