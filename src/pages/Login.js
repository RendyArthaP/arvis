import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../redux/actions/auth.actions';

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const authController = useSelector((state) => state.handleAuth.authError)
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginActions(login, history))
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen select-none">
      <div className="flex flex-col -mt-32 mx-4 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-blue-400">
        <h1 className="font-medium font-roboto self-center text-xl sm:text-2xl uppercase bg-blue-400 w-60 text-center shadow-2xl p-4 rounded-xl text-white">
          Sign In
        </h1>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>                
            <div className="relative w-full mb-3">
              <small className="p-2 text-blue-400">Email</small>
              <input 
                value={login.email}
                onChange={handleChange}
                type="email" 
                name="email" 
                className="border-0 my-1 font-roboto p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" 
                placeholder="Email" 
              />
            </div>
            <div className="relative w-full mb-3">
              <small className="p-2 text-blue-400">Password</small>
              <input 
                value={login.password}
                onChange={handleChange}
                type="password" 
                name="password" 
                className="border-0 my-1 font-roboto p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" 
                placeholder="Password" 
              />
            </div>
            {authController 
              ? 
                <h1 className="text-red-500 text-center">
                  {authController}
                </h1>
              : 
                null
            }
            <div className="text-center mt-6">
              <button 
                type="submit" 
                className="p-3 rounded-lg focus:outline-none bg-blue-400 outline-none text-white shadow w-32 justify-center focus:bg-blue-600 hover:bg-blue-600" 
              >
                Sign In
              </button>
            </div>  
            <div className="flex flex-wrap mt-6">
              <div className="mx-auto">
                <Link 
                  to="/register"  
                  className="text-blue-900 text-xl"
                >
                  <small className="text-center">
                    Register Here
                  </small>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
