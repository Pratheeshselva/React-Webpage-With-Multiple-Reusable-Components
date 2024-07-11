import React from 'react'

function IconsGrid({data}) {
  return <>
      <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex"> {data.icon}</div>
              <h3>{data.headerText}</h3>
              <p className="lead mb-0">{data.content}</p>
          </div>
      </div>
  </>
}

export default IconsGrid