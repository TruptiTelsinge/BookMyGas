import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../service/user'
import '../styles/Login.css'

function Login () {
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const [ isEmailEmpty, setEmailEmpty ] = useState( false )
  const [ isPasswordEmpty, setPasswordEmpty ] = useState( false )
  const [ isUser, setUser ] = useState( true )

  // get navigation hook
  const navigate = useNavigate()
  const onLogin = async () => {

    if ( email.length == 0 ) {
      toast.error( 'Please enter email' )
    } else if ( password.length == 0 ) {
      toast.error( 'Please enter password' )
    } else {
      // call login API and check its success
      const role = isUser ? 'user' : 'admin'
      const result = await login( email, password , role)
      if ( result[ 'status' ] === 'success' ) {

        const data = result[ 'data' ]

        // persist the token and user name in session storage
        sessionStorage[ 'name' ] = data[ 'name' ]
        sessionStorage[ 'token' ] = data[ 'token' ]

        // go to home screen
        navigate( '/home' )
      } else {
        toast.error( result[ 'error' ] )
      }
    }
  }

  return (
    <div className='login-container'>
      <div className='login-img'></div>
      <div className='login-card'>
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='form'>
            <div className='title-container title-image'>BookMyGas</div>
            <div className='title'>{isUser ? 'User' : 'Admin'} Login</div>
              <div className='mb-3'>
                <label htmlFor=''>Email</label>
                <input
                  onChange={ ( e ) => {
                    if ( e.target.value.length == 0 ) {
                      setEmailEmpty( true )
                    } else {
                      setEmailEmpty( false )
                    }
                    setEmail( e.target.value )
                  } }
                  type='email'
                  className='form-control'
                />
                { isEmailEmpty && (
                  <p style={ { color: 'red' } }>Email is mandatory</p>
                ) }
              </div>
              <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input
                  onChange={ ( e ) => {
                    if ( e.target.value.length == 0 ) {
                      setPasswordEmpty( true )
                    } else {
                      setPasswordEmpty( false )
                    }
                    setPassword( e.target.value )
                  } }
                  type='password'
                  className='form-control'
                />
                { isPasswordEmpty && (
                  <p style={ { color: 'red' } }>Password is mandatory</p>
                ) }
              </div>
              <div className='mb-3'>
                <div>
                  Don't have account ? <Link to='/register'  className='no-decoration'>Register here</Link>
                </div>
                <div>
                  Are you a {isUser ? 'Admin' : 'User'} ? <Link to='' onClick={() => setUser(!isUser)} className='no-decoration'>Login As {isUser ? 'Admin' : 'User'}</Link>
                </div>
                <button onClick={ onLogin } className='btn btn-success mt-2'>
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  )
}

export default Login
