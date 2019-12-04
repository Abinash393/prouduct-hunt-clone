import React from 'react'

function Right(params) {
  return (
    <>
      <div className='right-section'>
        <p className='main-text'>Makers working today</p>
        <div className='card1 uni-box-shadow'>
          <div className='img-container-1'>
            <img src='images/i1.jpeg' className='pro-img'></img>
            <img src='images/i2.jpeg' className='pro-img'></img>
            <img src='images/i3.jpeg' className='pro-img'></img>
            <img src='images/i4.jpeg' className='pro-img'></img>
            <img src='images/i5.jpeg' className='pro-img'></img>
            <img src='images/i6.jpeg' className='pro-img'></img>
          </div>

          <div className='img-container-2'>
            <img src='images/i7.jpeg' className='pro-img'></img>
            <img src='images/i8.jpeg' className='pro-img'></img>
            <img src='images/i9.jpeg' className='pro-img'></img>
            <img src='images/i10.jpeg' className='pro-img'></img>
            <img src='images/i11.jpeg' className='pro-img'></img>
            <img src='images/i12.jpeg' className='pro-img'></img>
          </div>
          <div className='gray-line'></div>
          <p className='join-them'> JOIN THEM ON MAKERS </p>
        </div>

        <p className='main-text'>Product Hunt Radio</p>

        <div className='card2 uni-box-shadow'>
          <div className='the-future-parent'>
            <p className='the-future'>The future of seed stage VC</p>
            <p className='the-future'>with Tige Savage</p>
          </div>
          <img src='images/cat.png' className='cat'></img>
        </div>

        <p className='main-text'>Newsletter</p>
        <div className='card3 uni-box-shadow'>
          <div className='nws-img-container'>
            <img src='images/newsletter.gif' className='news-img'></img>
            <p className='main-text nwl-txt'>An app for troll the trolls</p>
          </div>

          <p className='main-text get-thebest'>
            Get the best new products in your inbox, every day 👇
          </p>

          <input type='text' className='subscribe-input'></input>
          <span className='sub-btn-margin'></span>
          <span className='subscribe-btn'>SUBSCRIBE</span>
        </div>

        <p className='main-text'>Hiring now</p>
        <div className='card4 uni-box-shadow'>
          <p className='notion'>Notion</p>
          <div className='notion-container'>
            <p className='job-description'>
              The all-in-one workspace for notes, tasks, wikis, & databases
            </p>
            <img src='images/notion.svg' width='40px'></img>
          </div>

          <div className='gray-line2'></div>
          <div className='jobs-con'>
            <a className='view-all-jobs'>view all jobs .</a>
            <a className='post-a-job'>post a job</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Right
