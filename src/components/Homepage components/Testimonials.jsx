import React from 'react'
import TestimonialsCard from '../TestimonialsCard'

const Testimonials = () => {
    return (
        <div className="testimonialsSection">
            <h1>What our Clients say</h1>
            <h2>Don't just take our word for it. Here's what our clients have to say about working with us.</h2>
            <div className="testimonials-container">
                <TestimonialsCard />
                <TestimonialsCard />
                <TestimonialsCard />
            </div>
        </div>
    )
}

export default Testimonials