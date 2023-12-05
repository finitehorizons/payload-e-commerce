import React from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Elevate your digital game with our handpicked Deals of the Month, delivering the hottest
          tech trends right to your doorstep at prices you won't believe. Dive into savings and
          elevate your digital world with limited-time offers that will leave you on the edge of
          your seat.
        </p>
      </div>
    </section>
  )
}

export default Promotion
