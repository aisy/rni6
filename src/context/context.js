import React, { createContext, useState } from 'react';

// membuat context
const UserContext = createContext([]);

// membuat provider context
const ProviderUser = (props) => {
  // set data yang akan digunakan untuk menyimpan data
  const [user, setUser] = useState([]);
  let data = {
    user,
    setUser,
  }

  // membuat provider dari context dengan data yang sudah di set
  return (
    <UserContext.Provider value={data}>
      {props.children}
    </UserContext.Provider>
  )
}

export {
  UserContext,
  ProviderUser
}