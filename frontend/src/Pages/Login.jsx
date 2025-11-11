import { useState } from 'react'

const Login = () => {

  const [state,setState] = useState('Sign up');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');

  const handlerSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <form className='h-dvh flex justify-center items-center flex-col'>
      <div className='border-1 border-gray-400 p-3 rounded-2xl'>
        <div className='text-center mb-5'>
        <p className='text-2xl text-gray-600'>{state === 'Sign up' ? 'Create an account' : 'Login'}</p>
      </div>    
      {
       state === 'Sign up' && <div>
        <p className='text-xl text-gray-600'>Full Name :</p>
        <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}} className='border-1 border-gray-400 outline-none w-80 text-base' required/>
       </div>
      }
      <div>
        <p className='text-xl text-gray-600'>Email :</p>
        <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} className='border-1 border-gray-400 outline-none w-80 text-base' required/>
      </div>
      <div>
        <p className='text-xl text-gray-600'>Password :</p>
        <input type="text" value={password} onChange={(e)=> {setPassword(e.target.value)}} className='border-1 border-gray-400 outline-none w-80 text-base' required/>
      </div>
      <button className='h-10 w-80 bg-blue-500 mt-10 cursor-pointer hover:text-white'>{state === 'Sign up' ? 'Create Account' : 'Login'}</button>
      <div>
        {
          state === 'Sign up'
          ? <p>Already have an account ?<span className='text-blue-500 underline cursor-pointer' onClick={()=> setState('Login') }> Login here</span></p>
          : <p>Create an account ? <span className='text-blue-500 underline cursor-pointer' onClick={()=> setState('Sign up') }>Click here</span></p>
        }
      </div>
      </div>
    </form>  
  )
}

export default Login