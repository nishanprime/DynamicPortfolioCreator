import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../userContext';

const GetStarted = () => {
  const [accountStatus, setAccStatus] = useState(true);
  const [email, setEMail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { user, loginUser, loading, error, registerUser } =
    useContext(UserContext);

  useEffect(() => {
    if (user) {
      router.push('/details');
    }
  }, [user]);
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (accountStatus) {
      loginUser(email, password);
    } else {
      registerUser(username.trim().toLowerCase(), email, password);
    }
  };
  return (
    <div className="flex flex-col min-h-full items-center justify-center h-screen py-12 px-4 sm:px-6 lg:px-8">
      {!error ? (
        loading ? (
          <h1>Signing in...</h1>
        ) : (
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                {accountStatus ? `Sign in to your account` : `Register Now`}
              </h2>
              <p
                className="text-center  text-indigo-600 hover:text-indigo-500 cursor-pointer"
                onClick={() => {
                  setAccStatus(!accountStatus);
                }}
              >
                {accountStatus
                  ? `Don't have an account?`
                  : `Already have an account?`}
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={onFormSubmit}>
              <div className="-space-y-px rounded-md shadow-sm">
                {/* username */}
                {!accountStatus && (
                  <div>
                    <label for="username" className="sr-only">
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autocomplete="username"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                )}
                <div>
                  <label for="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className={
                      accountStatus
                        ? 'relative block w-full rounded-none rounded-t-md appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                        : 'relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    }
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      setEMail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label for="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              {accountStatus && (
                <div className="flex items-center justify-between">
                  {/* <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div> */}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  {accountStatus ? `Sign in` : `Register`}
                </button>
              </div>
            </form>
          </div>
        )
      ) : (
        <h1>{error}: Reload the page to sign in again</h1>
      )}
    </div>
  );
};

export default GetStarted;
