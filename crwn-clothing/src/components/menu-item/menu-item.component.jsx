import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.sass'

const MenuItem = ({ title, imageUrl, size, link, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${link}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
