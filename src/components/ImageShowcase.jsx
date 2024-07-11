import React from 'react'
import '../index.css'



function ImageShowcase({data}) {
  return<>

      {
       data.id%2===0? (
          <div className="row  g-0">
              <div className="col-lg-6  text-white showcase-img " style={{ backgroundImage: `url(${data.image})` }} ></div>
              <div className="col-lg-6  my-auto showcase-text">
                  <h2>{data.head}</h2>
                  <p className="lead mb-0">{data.content}</p>
              </div>
              </div>
      )
          :(
          <div className="row g-0 flex-row-reverse">
              <div className="col-lg-6  text-white showcase-img" style={{ backgroundImage: `url(${data.image})` }} ></div>
              <div className="col-lg-6  my-auto showcase-text ">
                  <h2>{data.head}</h2>
                  <p className="lead mb-0">{data.content}</p>
              </div>
              </div>
              
          )
      }
   
  </>
}

export default ImageShowcase