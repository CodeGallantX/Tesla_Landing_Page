import solarImg from "./assets/icons/solar-panel-icon.png"

export default function Solarpanels() {
  return (
    <div className="solarpanels">
      <div className="top-section">
        <h2>Solar Panels for Your Home</h2>
        <p>Lowest Cost Solar Panels in America</p>
      </div>
      <div className="bottom-middle-section">
        <div className="top">
          <div className="bottom-middle-section-item">
            <h4>$</h4>
            <p>Guaranteed Lowest</p>
            <p>Price in America</p>
          </div>
          <div className="bottom-middle-section-item">
            <img width="50px" src={solarImg} alt="" />
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
  )
}