import { Outlet } from "react-router-dom";
import { UserProvider } from "./UserProvider";

function ProtectedLayout() {
    return (
        <UserProvider>
            <Outlet />
        </UserProvider>
    )
}

export default ProtectedLayout;
