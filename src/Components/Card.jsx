import React from 'react'

function Card({data}) {
  return( <>
    <div className="container">
  <div className="row">
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-0 shadow">
        <img src={data.image} className="card-img-top" alt="..."/>
        <div className="card-body text-center">
          <h5 className="card-title mb-0">{data.name}</h5>
          <div className="card-text text-black-50">{data.role}</div>
        </div>
      </div>
    </div> 
  </div> 
  </div>
  </>
  )
}

export default Card