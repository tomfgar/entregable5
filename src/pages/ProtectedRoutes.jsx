import { useSelector } from "react-redux"
import store from "../store"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

  const trainer = useSelector(store => store.trainer)

    if(trainer.length >= 3) {
       return <Outlet />
    }else {
       return <Navigate to='/' />
    }
}

export default ProtectedRoutes