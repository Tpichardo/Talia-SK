import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

import { Form, Button, Card, Alert } from 'react-bootstrap'

const ForgotPassword = () => {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch (error) {
      const message = error.message
        .split(' ')
        .filter(word => {
          return word !== 'Firebase:' && word !== '(auth/user-not-found).'
        })
        .join(' ')
      setError(`Failed to Reset password. ${message}`)
    }
    setLoading(false)
  }

  return (
    <>
      <Card className='loginDashboard'>
        <Card.Body>
          <h2 className='text-center mb-4'>Password Reset</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100 mt-4 bts-mui-bt' type='submit'>
              Reset Password
            </Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            <Link to='/login'>Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w100 text-center mt-2'>
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  )
}

export default ForgotPassword
