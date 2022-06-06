import React from 'react';
import ReactStars from 'react-rating-stars-component';


function Navbar({setText, setRate}) {
  return (
    <div className='nav'>
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#"><input type="text" placeholder='search movie...' onChange={(e)=> setText(e.target.value)}></input></a></li>
      </ul>
      <ReactStars classNames="star"
                count={5}
                size={24}
                activeColor="#ffd700"
                onChange={(newrate)=> setRate(newrate)}
                />
    </div>
  )
}

export default Navbar