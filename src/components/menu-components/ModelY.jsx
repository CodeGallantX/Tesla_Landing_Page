export default function ModelY() {
  return (
    <div className="model-y">
      <div className="top-section">
        <div className="top-section-card">
          <h3>Model Y</h3>
          <h4>From  $32,890*</h4>
          <p>After Federal Tax Credit & Est. Gas Savings</p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-card">

          <div style={{flexDirection: "column", gap: "20px"}} className="bottom-middle-section">
            <div style={{display: "flex", gap: "70px"}} className="top">
              <div className="bottom-middle-section-item">
                <h4>76 cu ft</h4>
                <p>Cargo Space</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>330 mi</h4>
                <p>Range (EPA est.)</p>
              </div>
              <div className="bottom-middle-section-item">
                <h4>AWD</h4>
                <p>Dual Motor</p>
              </div>
            </div>
            <div className="bottom">
              <a href="#">Order Now</a>
              <a href="#">Demo Drive</a>
            </div>
          </div>
          <div className="bottom-section">
            <p>*Price before incentives and savings is $43,990, excluding taxes and fees. Subject to change.</p>
            <p><a>Learn about est. gas savings.</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}