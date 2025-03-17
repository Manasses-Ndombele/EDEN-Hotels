import { useState, useEffect, ReactNode } from "react";
import UserContext from "./UserContext";
import useAuth from "./hooks/auth";

export function UserProvider({ children } : { children: ReactNode }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const { user, setUser } = useAuth();
    useEffect(() => {
        setLoggedIn(Object.keys(user).length !== 0);
    }, [user]);

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
