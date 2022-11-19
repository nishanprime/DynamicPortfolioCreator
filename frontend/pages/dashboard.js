import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../userContext';

const dashboard = () => {
  const { user, logout } = useContext(UserContext);
  console.log('----------');
  console.log(user);
  console.log('----------');

  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push('/get-started');
    }
  }, [user]);

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default dashboard;
