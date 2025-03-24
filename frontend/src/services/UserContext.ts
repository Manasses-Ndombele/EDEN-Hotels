import { createContext } from "react";

export interface UserType {
  email: string;
  username: string;
  type: string;
  created_at: string;
}

const UserContext = createContext<{
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  user: UserType;
  setUser: (user: UserType) => void;
}>({
  loggedIn: false,
  setLoggedIn: () => {},
  user: {} as UserType,
  setUser: () => {},
});

export default UserContext;
