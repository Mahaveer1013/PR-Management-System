import { Navigate } from "react-router-dom";
import { MyContext } from "../pages/Main";
import { useContext } from "react";

export default function LoginCheck({ children }) {
    
    const auth = useContext(MyContext)
    if (auth.isAuth) {
        return (<Navigate to='/dashboard' />)
    }

    return children
}