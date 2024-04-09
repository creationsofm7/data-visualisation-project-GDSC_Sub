import React from 'react'

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 bg-blue-500">
      <div className="text-white text-2xl">
        Logo
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-white">Home</a>
        <a href="/map" className="text-white">Map</a>
      </div>
    </nav>
  )
}

export default Navbar