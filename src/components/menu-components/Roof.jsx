import solarIcon from "./assets/icons/solar-panel-icon.png"


export default function Roof() {
  return (
    <div className="roof">
      <div className="top-section">
        <h2>Solar Roof</h2>
      </div>
      <div className="bottom-middle-section">
        <div className="top">
          <div className="bottom-middle-section-item">
            <img width="50px" src={solarIcon} alt="" />
            <p>Beautiful</p>
            <p>Solar</p>
          </div>
          <div className="bottom-middle-section-item">
            <h4>25-Year</h4>
            <p>Tile</p>
            <p>Warranty</p>
          </div>
          <div className="bottom-middle-section-item">
            <h4>24/7</h4>
            <p>Outage</p>
            <p>Protection</p>
          </div>
          <div className="bottom-middle-section-item">
            <a href="#">Order Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}