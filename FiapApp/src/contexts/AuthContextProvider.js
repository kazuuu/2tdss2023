import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const [currentUser, setCurrentUser] = useState({
    username: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  function signIn(username, password) {
    setCurrentUser({
      username: username,
    });

    setLoggedIn(true);
  }

  function logout() {
    setCurrentUser({
      username: "",
    });

    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, currentUser, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}