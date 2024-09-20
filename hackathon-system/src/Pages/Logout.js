import React from 'react'
import './Logout.css';
function Logout() {
  return (
    <div>
       <form classname="logout-form">
        <p className='p-tag'>Click below to logout</p>
        <button className='logout'>Logout</button>
        </form> 
    </div>
  )
}

export default Logout