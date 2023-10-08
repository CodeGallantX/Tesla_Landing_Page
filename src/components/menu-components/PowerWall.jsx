import storeEnergy from "./assets/icons/energy.png"
import protectHome from "./assets/icons/home-energy.png"

export default function PowerWall() {
  return (
    <div className="powerwall">
      <div className="top-section">
        <div className="top-section-card">

          <h3>Powerwall</h3>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-card">

          <div className="bottom-middle-section">
            <div className="middle-section-items">

              <div className="bottom-middle-section-item">
                <img width="30px" src={storeEnergy} alt="store energy" />
                <p>Store Energy</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4 style={{fontSize: "1.5rem"}}>24/7</h4>
                <p>Backup Protection</p>
              </div>
              <div className="bottom-middle-section-item">
                <img width="30px" src={protectHome} alt="protect your home" />
                <p>Power Your Home</p>
              </div>
            </div>
              <div className="bottom">
                <a href="#">Get Powerwall</a>
              </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}