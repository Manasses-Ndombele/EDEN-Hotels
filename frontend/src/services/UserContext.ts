import { createContext } from "react";

interface User {
    email: string,
    username: string,
    type: string,
    created_at: string
}

const UserContext = createContext<{
    loggedIn: boolean,
    setLoggedIn: (loggedIn: boolean) => void,
    user: object,
    setUser: (user: object) => void 
}>({
    loggedIn: false,
    setLoggedIn: () => {},
    user: {} as User,
    setUser: () => {}
});

export default UserContext;
