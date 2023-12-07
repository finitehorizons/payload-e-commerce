'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

interface Timer {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Promotion = () => {
  const [time, setTime] = useState<Timer>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const timeDifference = targetDate.getTime() - now.getTime()

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        setTime({ days, hours, minutes, seconds })
      } else {
        // Target date reached, you may want to perform any desired action here
        clearInterval(intervalId)
      }
    }, 1000)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

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

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
