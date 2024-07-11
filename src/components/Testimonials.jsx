import React from 'react'



function Testimonials({data}) {
  return <>
  {/* <!-- Testimonials--> */}
      <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img className="img-fluid rounded-circle mb-3" src={data.img} alt="..." />
              <h5>{data.name}</h5>
              <p className="font-weight-light mb-0">{data.content}</p>
          </div>
      </div>
  </>
}

export default Testimonials