export const setUserData = (userData) => {
    // Convert the user data to a JSON string and save it to localStorage
    localStorage.setItem('user', JSON.stringify(userData));
  };

  
  export const getUserData = () => {
   
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null; 

  };

  
  
  export const removeUserData = () => {
    
    localStorage.removeItem('user');
  };
  