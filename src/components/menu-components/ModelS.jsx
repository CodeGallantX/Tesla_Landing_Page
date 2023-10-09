import { useLoaderData } from "react-router-dom"
import modelSVideo from "/videos/models.mp4"

export function loader() {
  return (
    <>
    
      <video src={modelSVideo} autoPlay muted loop></video>
      <div className="model-s">
        <div className="top-section">
          <div className="top-section-card">

            <h3>Model S</h3>
            <h4>From $71,090*</h4>
            <p>After Est. Gas Savings</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-card">

            <div className="bottom-middle-section">
              <div className="middle-section-items">

                <div className="bottom-middle-section-item">
                  <h4>396 mi</h4>
                  <p>Range (EPA est.)</p>
                </div>
                <div className="bottom-middle-section-item">
                  <h4>1.99 s</h4>
                  <p>0-60 mph*</p>
                  
                </div>
                <div className="bottom-middle-section-item">
                  <h4>200 mph</h4>
                  <p>Top Speed†</p>
                </div>
                <div className="bottom-middle-section-item">
                  <h4>1,020 hp</h4>
                  <p>Peak Power</p>
                </div>
              </div>
                <div className="bottom">
                  <a href="#">Order Now</a>
                </div>
            </div>
            <div className="bottom-section">
              <p>*Price before savings is $74,990, excluding taxes and fees. Subject to change.</p>
              <p><a href="#">Learn about est. gas savings.</a></p>
              <p>Specs displayed are Model S Plaid values.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 

export default function ModelS() {
  
  const modelS = useLoaderData()

  return (
    <>
      {modelS}
    </>
  )
}