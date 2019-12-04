import React from 'react'

function Cards(props) {
  return (
    <>
      <div className='main-card'>
        <div className='whole-container'>
          {/* image */}
          <img src={props.img} className='img'></img>
          <div className='card-container'>
            <a className='main-text card-text'>{props.title}</a>
            <br></br>
            <a className='woman-txt'>{props.description}.</a>
            <div className='card-details'>
              <div className='comment-box'>
                <img src='images/chat.svg' width='12px'></img>
                <p className='num-commnets'>{props.num_comments}</p>
              </div>
              <p className='tag-name'>{props.tag}</p>
            </div>
          </div>
        </div>
        <div className='upvote-container '>
          <div>
            <p className='upv-s'>▲</p>
            <p className='upv'>{props.num_upvotes}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
