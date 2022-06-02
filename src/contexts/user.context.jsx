import { createContext, useState } from "react";

// as the actual value tou want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// any Provider child components can access actual value in this case UserContext
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // set value like this allows any child components to access both current user value and setCurrentUser function
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
