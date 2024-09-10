import './Testimonials.css'
import { testimonials } from './data'

const Testimonials = () => {
  return (
    <div className='testimonials-grid'>
    {testimonials.map((testimonial) => (
    <div className="testimonial-card">
        <div className="testimonial-header">
            <img src={testimonial.portrait} alt="" />
            <div>
            <h4>{testimonial.name}</h4>
            <p>{testimonial.role}</p>
            </div>
        </div>
        <p className='testimonial-content'>
        {testimonial.content}
        </p>
    </div>
    ))}
    </div>
  )
}

export default Testimonials
