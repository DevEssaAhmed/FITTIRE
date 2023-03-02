import { createContext, useState } from "react";

// As the actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Actual Provider. This allow us to  use UserContext we created
export const UserProvider = ({ children }) => {
  const[currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
