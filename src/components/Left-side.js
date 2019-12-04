import React from 'react'

import Cards from './Prouduct-cards'

function Left() {
  return (
    <>
      <div className='left-section'>
        <div className='top-text-main'>
          <h3 className='main-text'> Today </h3>
          <div className='top-nav-right'>
            <a href='#'>
              <p className='popular'>POPULAR</p>
            </a>
            <a href='#'>
              <p className='newest'>NEWEST</p>
            </a>
          </div>
        </div>

        <div className='main-cards'>
          {/* cards */}
          {[
            {
              title: 'Exploding Topics',
              description: 'Find proven topics before they take off.',
              tag: 'Web App',
              num_comments: 184,
              num_upvotes: '684',
              img: 'images/gif1.gif'
            },
            {
              title: 'Hyperise',
              description:
                '2X your email CTR with dynamic personalised images.',
              tag: 'Chrome Extension',
              num_comments: 76,
              num_upvotes: '336',
              img: 'images/gif2.gif'
            },
            {
              title: 'Zenia - AI Yoga Teacher',
              description: 'Your AI virtual yoga assistant.',
              tag: 'Iphone',
              num_comments: 49,
              num_upvotes: '335',
              img: 'images/gif3.jpeg'
            },
            {
              title: 'Podcorn',
              description: 'Promote your brand through podcasts',
              tag: 'Promotion',
              num_comments: 8,
              num_upvotes: '332',
              img: 'images/gif4.gif'
            },
            {
              title: 'Referlist',
              description:
                'Increase email sign-ups via word of mouth referrals',
              tag: 'Web App',
              num_comments: 94,
              num_upvotes: '130',
              img: 'images/gif6.jpeg'
            },
            {
              title: 'Pizdata App',
              description:
                'Web app to get design tasks done in 24 hours on subscription',
              tag: 'Web App',
              num_comments: 94,
              num_upvotes: '130',
              img: 'images/gif7.gif'
            }
          ].map(singleCard => (
            <Cards {...singleCard} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Left
