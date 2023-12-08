'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'

import classes from './index.module.scss'

export const LogoutPage: React.FC<{
  settings: Settings
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('Logged out successfully.')
      } catch (_) {
        setError('You are already logged out.')
      }
    }

    performLogout()
  }, [logout])

  return (
    <Fragment>
      {(error || success) && (
        <div className={classes.padding}>
          <h1>{error || success}</h1>
          <p className={classes.padding}>
            {'What would you like to do next?'}
            {typeof productsPage === 'object' && productsPage?.slug && (
              <Fragment>
                {' '}
                <br />
                <Link href={`/${productsPage.slug}`} className={classes.link}>
                  Click here
                </Link>
                {` to shop.`}
              </Fragment>
            )}{' '}
            <br />
            {` To log back in, `}
            <Link href="/login" className={classes.link}>
              click here
            </Link>
            {'.'}
          </p>
        </div>
      )}
    </Fragment>
  )
}
