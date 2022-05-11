import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {

    const { _id, name, slots } = treatment;

    const handleSubmit = e => {
        e.preventDefault()
        const slot = e.target.slot.value;
        console.log(slot, _id, name);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary mb-5">Booking For: {name}</h3>
                    <form className='grid grid-cols-1 gap-3 justify-items-center' onSubmit={handleSubmit}>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;