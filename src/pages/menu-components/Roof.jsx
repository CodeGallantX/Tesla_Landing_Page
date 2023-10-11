import solarIcon from "./assets/icons/solar-panel-icon.png"
import { useLoaderData } from "react-router-dom"

export function loader() {
  return (

    <div className="roof">
      <div className="top-section">
        <div className="top-section-card">

          <h3>Solar Roof</h3>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-card">

          <div className="bottom-middle-section">
            <div className="middle-section-items">

              <div className="bottom-middle-section-item">
                <img width="30px" src={solarIcon} alt="solar icon" />
                <p>Beautiful</p>
                <p>Solar</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>25 -Year</h4>
                <p>Tile</p>
                <p>Warranty</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>27/7</h4>
                <p>Outage</p>
                <p>Protection</p>
              </div>
            </div>
              <div className="bottom">
                <a href="#">Order Now</a>
              </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default function Roof() {
  const roof = useLoaderData()
  return (
    <>
      {roof}
    </>
  )
}