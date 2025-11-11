import disconnect from '../assets/disconnect.svg'

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src={disconnect} alt=""  className='h-100 w-100'/>
        <p>Error 404 : Page is Not Found</p>
    </div>
  )
}

export default ErrorPage