export default function Model3() {
  return (
    <div>
      <div className="model-3">
        <div className="top-section">
          <div className="top-section-card">

            <h3>Model 3</h3>
            <h4>From $28,490*</h4>
            <p>After Federal Tax Credit & Est. Gas Savings</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-card">

            <div style={{ flexDirection: "column", gap: "20px"}} className="bottom-middle-section">
              <div style={{ display: "flex", gap: "70px"}} className="top">
                <div className="bottom-middle-section-item">
                  <h4>3.1 s</h4>
                  <p>0-60 mph†</p>
                </div>
                <div className="bottom-middle-section-item">
                  <h4>333 mi</h4>
                  <p>Range (EPA est.)</p>
                </div>
                <div className="bottom-middle-section-item">
                  <h4>AWD</h4>
                  <p>Dual Motor</p>
                </div>
              </div>
              <div className="bottom">
                <a href="#">Expore Inventory</a>
                <a href="#">Custom Order</a>
              </div>
            </div>
            <div className="bottom-section">
              <p>*Price before incentives and savings is $38,990, excluding taxes and fees. Subject to change.</p>
              <p><a>Learn about est. gas savings.</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}