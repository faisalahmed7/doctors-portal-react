import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} alt="" />


            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'> Appointment</h3>
                <h2 className='text-3xl text-white font-bold py-5'>Make An Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolorum sint voluptates dolores natus ea hic vero consequatur quae nesciunt explicabo laudantium, est magnam ducimus molestiae dicta aperiam pariatur! Delectus deleniti a porro omnis deserunt reprehenderit quas. Illum, adipisci iste?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;