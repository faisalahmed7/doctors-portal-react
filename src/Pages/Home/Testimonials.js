import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';



const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Henry Nicholes',
            review: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Sara Nicholes',
            review: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            location: 'Washington DC',
            img: people2
        },
        {
            _id: 3,
            name: 'Zara Nicholes',
            review: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            location: 'San-Francisco',
            img: people3
        },

    ]
    return (

        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}>

                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;