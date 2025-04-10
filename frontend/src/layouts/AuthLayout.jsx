import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="h-full flex items-center justify-center">
        <Outlet />
    </div>
  )
}

export default AuthLayout
