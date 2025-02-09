import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials, setIsAuthenticated } from '../features/auth/authSlice';
import { useLoginMutation } from '../features/api/apiAuth';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [clientId, setClientId] = useState('');
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const { data, error }: any = await
        login({ username, password });
      if (data) {
        setToken(data?.token)
        setClientId(data?.userId)
        localStorage.setItem('token', data?.token);
        dispatch(setCredentials({ token: data?.token, clientId: data?.userId }));
        navigate('/dashboard');
        console.log(data)
      }
      else {
        console.log(error)

      }
    }
    catch (error: any) {
      console.log(error)
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl">
      
            <div className="mt-8 grid gap-6">

              <div className="flex flex-col items-center justify-center h-[50%]">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="border p-2 mb-4 rounded-lg border-gray-400"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="border p-2 mb-4  rounded-lg border-gray-400"
                />

                <button onClick={handleLogin} className="bg-blue-500 text-white p-2  rounded-lg border-gray-400">
                  Login
                </button>
              </div>


              <div className="col-span-2 sm:flex sm:items-center sm:gap-4">
                <button onClick={() => navigate('/register')}
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
                >
                  Create an account
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>




















  );
};

export default Login;
