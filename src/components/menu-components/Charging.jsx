import bolt from "./assets/icons/bolt.png"
import { useLoaderData } from "react-router-dom"

export function loader() {
  return (

    <div className="charging">
      <div className="top-section">
        <h2>Stay Charged</h2>
      </div>
      <div style={{margin: "0px"}} className="bottom-middle-section">
        <div className="bottom-middle-section-item">
          <img width="30px" src={bolt} alt="bolt" />
          <p style={{fontWeight: "500", fontSize: "0.7rem"}}>Charge at Home</p>
        </div>
        <div className="bottom-middle-section-item">
          <h4 style={{color: "black"}}>50,000 +</h4>
          <p style={{fontWeight: "500", fontSize: "0.7rem"}}>Global Superchargers</p>
        </div>
        <div className="bottom-middle-section-item">
          <h4 style={{color: "black"}} >40,000 +</h4>
          <p style={{fontWeight: "500", fontSize: "0.7rem"}}>Wall Connectors at</p>
          <p style={{fontWeight: "500", fontSize: "0.7rem"}}>Destination Charging</p>
          <p style={{fontWeight: "500", fontSize: "0.7rem"}}>Sites</p>
        </div>
      </div>
    </div>
  )
}

export default function Charging() {
  const charging = useLoaderData()
  return (
    <>
      {charging}
    </>
  )
}