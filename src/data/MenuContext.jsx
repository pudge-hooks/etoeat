import { createContext, useContext, useEffect, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState({});
  const [products, setProducts] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const categories = menu.Groups?.slice(0, menu.Groups?.length - 3);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await fetch(
          'https://possvc3.servio.support/29085/POSExternal/Authenticate',
          {
            method: 'POST',
            body: JSON.stringify({
              CardCode: '1111',
              TermID: 'OPERATOR',
            }),
          },
        );
        const data = await response.json();
        setAccessToken(data.Token);
      } catch (error) {
        console.error('Authentication error:', error);
      }
    };

    authenticate();
  }, []);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        if (accessToken) {
          const response = await fetch(
            'https://possvc3.servio.support/29085/POSExternal/Get_TarifItemExt',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                AccessToken: accessToken,
              },
            },
          );
          const data = await response.json();
          setMenu(data);
        }
      } catch (error) {
        console.error('Failed to fetch menu data:', error);
      }
    };

    fetchMenu();
  }, [accessToken]);

  useEffect(() => {
    if(categories){
      setProducts(prevProducts => {
        const allItems = categories.flatMap(item => item.Items);
        return allItems;
      });
    }
  }, [menu, categories]);
  


  const value = {
    menu,
    products
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenu = () => {
  return useContext(MenuContext);
};
