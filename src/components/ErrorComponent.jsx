import Navbar from "./Navbar"
import { Link } from "react-router-dom"

export default function ErrorComponent() {
  return (
    <>
      <Navbar />
      <div className="errorComponent">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  )
}