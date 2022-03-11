import { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>HomeScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className='btn btn-warning' onClick={() => setUser({})}>
        logout
      </button>
    </>
  );
};
