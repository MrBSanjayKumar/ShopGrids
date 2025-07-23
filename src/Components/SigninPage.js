import React from 'react'

const SigninPage = () => {
  return (
    <>
      <div className='container1'>
        <div className='wrapper'>
        <div className='login_box'>
          <div className='login-header'>
          <span>login</span>
        </div>
        <div className='input_box'>
          <input type='text' id='user' className='input-field' required />
          <label for='user' className='label'>Username</label>
          <i class="bi bi-person-fill icon"></i>
        </div>
        <div className='input_box'>
          <input type='password' id='pass' className='input-field' required />
          <label for='pass' className='label'>password</label>
          <i class="bi bi-eye-slash-fill icon"></i>
        </div>
        <div className='remember-forgot'>
          <div className='remember-me'>
            <input type='checkbox' id='remember' />
            <label for='remember'> Remember me</label>
          </div>
          <div className='forgot'>
            <a href="/">Forgot password</a>
          </div>
        </div>
        <div className='input_box'>
          <input type='submit' className='input-submit' value='Login' />
        </div>
        <div className='register'>
          <span>Don't have an account ? <a href='/'>Register</a></span>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default SigninPage
