import { useAuthState } from "react-firebase-hooks/auth";

import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

export default function ProvateRoutes() {
    const [user, loading, error] = useAuthState(auth);
    if (loading) return <p>Loading user data...</p>

    return (
        <>
            {user ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}