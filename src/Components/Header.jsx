import React from 'react'


function Header({data}) {
  return <header className="bg-primary text-center py-5 mb-4">
  <div className="container">
    <h1 className="fw-light text-white">{data.head}</h1>
  </div>
</header>
}

export default Header