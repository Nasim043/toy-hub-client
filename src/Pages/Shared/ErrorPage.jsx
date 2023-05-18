import Lottie from "lottie-react";
import Error_Page from '../../assets/red-car.json'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Lottie animationData={Error_Page} loop={true} className='mt-[-100px] w-full h-80 md:h-4/5' />
      <h1 className="text-4xl md:text-7xl font-bold text-purple-400 mt-[-70px] md:mt-[-100px]">{status || 404}</h1>
      <h1 className="text-xl md:text-3xl font-medium pb-8 text-center">oops! {error?.message}</h1>
      <Link to='/' className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>Go to HomePage</Link>
    </div>
  );
};

export default ErrorPage;