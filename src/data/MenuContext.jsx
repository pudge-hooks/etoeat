import { createContext, useContext, useEffect, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState({});
  const [accessToken, setAccessToken] = useState('');

  const authenticate = () => {
    fetch('https://possvc3.servio.support/29085/POSExternal/Authenticate', {
      method: 'POST',
      body: JSON.stringify({
        CardCode: '1111',
        TermID: 'OPERATOR',
      }),
    })
      .then(res => res.json())
      .then(data => setAccessToken(data.Token));
  }

  useEffect(() => {
    authenticate();

    if(accessToken){
      fetch('https://possvc3.servio.support/29085/POSExternal/Get_TarifItemExt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          AccessToken: accessToken,
        },
      })
        .then(res => res.json())
        .then(data => setMenu(data));
    }
  }, [accessToken]);

  const value = {
    menu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenu = () => {
  return useContext(MenuContext);
};
