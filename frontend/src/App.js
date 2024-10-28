import React, { useEffect, useState } from 'react';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from './components/GoogleLogin';

function App() {
  const [user, setUser] = useState();

  return (
    <GoogleOAuthProvider clientId="577595661194-bn0587o2vol5i9gqisv6o8anup5gt5a5.apps.googleusercontent.com">
      <div className="App">
        <GoogleLogin setUser={setUser}></GoogleLogin>
        {user && user.name}
        {user && user.email}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
