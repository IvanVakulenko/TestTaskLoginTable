import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack'

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleAuthUser = async (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    setLoading(true);

    try {
      const response = await axios.post('https://technical-task-api.icapgroupgmbh.com/api/login/', loginData);

      if (response.status === 200) {
        setLoading(false);
        enqueueSnackbar("User logged in successfully", { variant: "success" });
        navigate('/table');
      } else {
        setLoading(false);
        enqueueSnackbar("Authentication failed. Please check your email and password.", {
          variant: "error",
        });
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data && error.response.data.details) {
        const errorDetails = error.response.data.details;
        const errorMessages = Object.values(errorDetails).flat();
        for (const field in errorDetails) {
          setErrors({ ...errors, [field]: errorDetails[field][0] });
        }
        enqueueSnackbar(errorMessages[0], { variant: "error" });
      } else {
        enqueueSnackbar("An error occurred. Please check the console", {
          variant: "error",
        });
        console.error('Error during authentication:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col p-10 rounded-lg shadow-2xl w-30">
        <h2 className="text-4xl font-extrabold text-start mb-6">
          <Link to='/'>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">Table.io</span>
          </Link>
        </h2>
        <div className="text-4xl text-center px-6 py-3 text-gray-700">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8 rounded-lg shadow-2xl w-30">
        <h2 className="text-7xl font-extrabold text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">Welcome to Table.io</span>
        </h2>
        <p className="text-2xl text-gray-700 text-center mb-6">
          A web-based system for your personal data.<br /> Store and manage all your tasks and cases.<br />
          <br />
          <p className='text-3xl text-blue-600 font-semibold'>Speedy. Secure. Simple.</p>
        </p>
        <p className="text-2xl text-green-600 text-center mb-6">
          Let`s started now!
        </p>
        <div className="flex justify-center space-x-4">
          <div className='flex flex-col justify-center'>
            <form onSubmit={handleAuthUser}>
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 mt-1 ${errors.username ? 'border-red-500' : ''}`}
                  placeholder='Login'
                  required
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 mt-1 ${errors.password ? 'border-red-500' : ''}`}
                  placeholder='Password'
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div className='flex flex-col items-center justify-center'>
                <button
                  type="submit"
                  className="bg-green-500 ease-in-out flex flex-row text-white px-12 py-4 hover:bg-green-600 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                >
                  Log in
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
