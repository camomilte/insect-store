import { useState } from 'react';
import { Link } from 'react-router';

const RegisterPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

  return (
    <div className="bg-softred/8 py-15 px-9 rounded-md space-y-7 my-10 mx-3 lg:w-5/10">
      <h2 className="text-5xl font-bold text-center font-bodoni">Register</h2>
      <p className="text-center">Create your account. It's free and only takes a minute!</p>
      <form className="space-y-8">
        <div>
            <label htmlFor="username" className="block pb-2 text-brown/70">Username</label>
            <input type="text" id="username" className="border-2 rounded-md border-terracotta/40 w-full p-3" onChange={e => setCredentials(state => ({ ...state, [e.target.id]: e.target.value }))} value={credentials.username}></input>
        </div>
        <div>
            <label htmlFor="email" className="block pb-2 text-brown/70">Email</label>
            <input type="email" id="email" className="border-2 rounded-md border-terracotta/40 w-full p-3" onChange={e => setCredentials(state => ({ ...state, [e.target.id]: e.target.value }))} value={credentials.email}></input>
        </div>
        <div>
            <label htmlFor="password" className="block pb-2 text-brown/70">Password</label>
            <input type="password" id="password" className="border-2 rounded-md border-terracotta/40 w-full p-3" onChange={e => setCredentials(state => ({ ...state, [e.target.id]: e.target.value }))} value={credentials.password}></input>
        </div>
        <div>
            <label htmlFor="repeatPassword" className="block pb-2 text-brown/70">Repeat Password</label>
            <input type="password" id="repeatPassword" className="border-2 rounded-md border-terracotta/40 w-full p-3" onChange={e => setCredentials(state => ({ ...state, [e.target.id]: e.target.value }))} value={credentials.repeatPassword}></input>
        </div>
        <button type="button" className="btn-primary w-full font-medium">Register</button>
      </form>
      <p className="text-terracotta-400 font-medium text-center">{error}</p>
      <p className='text-center'>Already have an account? <Link to='/login' className='underline hover:text-brown/60'>Login here!</Link></p>
    </div>
  )
}

export default RegisterPage
