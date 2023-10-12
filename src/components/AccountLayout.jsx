import { Outlet, NavLink } from "react-router-dom"

export default function AccountLayout() {


  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    
}

  return (
    <div className="account-layout">
      <nav>
        <NavLink 
          to="." 
          end
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Account
        </NavLink>
        <NavLink 
          to="buy-credits"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Buy Credits
        </NavLink>
        <NavLink 
          to="cars"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Cars
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}