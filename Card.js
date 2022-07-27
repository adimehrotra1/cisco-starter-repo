import React from 'react'


function Card(title, imageurl, body) {
  return (
    <div className='Card-Container'>
    
      <div className='Card-Content'>
        <div className='Card-Title'>
          <h3>{title} </h3>
        </div>
        <div className='Card-Body'>
          <p>{body}</p>
        </div>
      </div>  
    </div>
  )
}

