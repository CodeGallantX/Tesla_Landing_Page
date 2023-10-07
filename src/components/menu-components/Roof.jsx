import solarIcon from "./assets/icons/solar-panel-icon.png"


export default function Roof() {
  return (
    <div className="roof">
      <div className="top-section">
        <h3 style={{color: "white"}}>Solar Roof</h3>
      </div>
      <div style={{color: "white"}} className="bottom-middle-section">
          <div style={{paddingTop: "100px"}} className="bottom-middle-section-item">
            <img width="30px" src={solarIcon} alt="" />
            <p style={{fontSize: "0.8rem"}}>Beautiful</p>
            <p style={{fontSize: "0.8rem"}}>Solar</p>
          </div>
          <div style={{paddingTop: "100px"}} className="bottom-middle-section-item">
            <h4 style={{fontSize: "1.2rem"}}>25-Year</h4>
            <p style={{fontSize: "0.8rem"}}>Tile</p>
            <p style={{fontSize: "0.8rem"}}>Warranty</p>
          </div>
          <div style={{paddingTop: "100px"}} className="bottom-middle-section-item">
            <h4 style={{fontSize: "1.2rem"}}>24/7</h4>
            <p style={{fontSize: "0.8rem"}}>Outage</p>
            <p style={{fontSize: "0.8rem"}}>Protection</p>
          </div>
          <div style={{paddingTop: "100px"}} className="bottom-middle-section-item roof-button-container">
            <a href="#">Order Now</a>
          </div>
      </div>
    </div>
  )
}