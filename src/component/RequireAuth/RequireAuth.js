import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()

    if (loading) {
        return (
          <div>
            <p>Initialising User...</p>
          </div>
        );
      }
    if(!user){
        return <Navigate to='/log-in' state={{from: location}} replace />
    }
    return children;
};

export default RequireAuth;