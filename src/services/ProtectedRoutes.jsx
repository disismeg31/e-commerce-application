import { Outlet,Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
function ProtectedRoutes() {
  const user = useSelector(state=>state.products?.user)
  return user ? <Outlet/> : <Navigate to='/'/>
}

export default ProtectedRoutes