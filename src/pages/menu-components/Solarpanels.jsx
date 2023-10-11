import solarImg from "./assets/icons/solar-panel-icon.png"
import { useLoaderData } from "react-router-dom"
import solarpanelsVideo from "/videos/solarpanels.mp4" 

export function loader() {
  return (
    <div className="solarpanels">
      <video src={solarpanelsVideo} autoPlay muted loop></video>
      <div className="top-section">
        <div className="top-section-card">
          <h2>Solar Panels for Your Home</h2>
          <p>Lowest Cost Solar Panels in America</p>
        </div>
      </div>
      <div className="bottom-container">
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}  className="bottom-card">

          <div style={{margin: "0"}} className="bottom-middle-section">
              <div className="bottom-middle-section-item">
                <h4>$</h4>
                <p>Guaranteed Lowest</p>
                <p>Price in America</p>
              </div>
              <div className="bottom-middle-section-item">
                <img width="30px" src={solarImg} alt="" />
                <p>Integrated</p>
                <p>Product Ecosystem</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>24/7</h4>
                <p>System Performance</p>
                <p>Monitoring</p>
              </div>
              <div className="bottom-middle-section-item">
                <a href="#">Order Now</a>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default function Solarpanels() {
  const solarpanels = useLoaderData()
  return (
    <>
      {solarpanels}
    </>
  )
}