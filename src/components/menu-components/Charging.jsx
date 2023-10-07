import bolt from "./assets/icons/bolt.png"

export default function Charging() {
  return (
    <div className="charging">
      <div className="top-section">
        <h2>Stay Charged</h2>
      </div>
      <div className="bottom-middle-section">
        <div className="top">
          <div className="bottom-middle-section-item">
            <img width="50px" src={bolt} alt="bolt" />
            <p>Charge at Home</p>
          </div>
          <div className="bottom-middle-section-item">
            <h4>50,000+</h4>
            <p>Global Superchargers</p>
          </div>
          <div className="bottom-middle-section-item">
            <h4>40,000+</h4>
            <p>Wall Connectors at</p>
            <p>Destination Charging</p>
            <p>Sites</p>
          </div>
        </div>
      </div>
    </div>
  )
}