import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router'

function PrivateRoute() {
    const user = useSelector((state:any)=>state.userInfo.user)
    if(!user){
        return <Navigate to='/login'/>
    }

  return <Outlet/>
}

export default PrivateRoute
