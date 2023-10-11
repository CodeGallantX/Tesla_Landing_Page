import model3 from './assets/model-3.png';
import modely from './assets/model-y.png';
import models from './assets/model-s.png';
import modelx from './assets/model-x.png';
import solarpanels from './assets/solarpanels.png';
import roof from './assets/roof.png';


import FullPage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import { Link } from "react-router-dom"

export default function InnerSections() {

  return (
    <FullPage>

      <FullpageNavigation />
      <FullPageSections>

        <FullpageSection>
          <img src={model3} alt="model 3" />
          <div className="content"> 
            <div className="content-titles">
              <h1>Model 3</h1>
              <p>Order Online for <a target="_blank" href="https://www.tesla.com/model3/design#overview">Touchless Delivery</a></p>
            </div>

            <div className="buttons">
              <a href="https://www.tesla.com/model3/design#overview" target="_blank">custom order</a>
              <a href="https://www.tesla.com/inventory/new/m3" target="_blank">existing inventory</a>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <img src={modely} alt="model y" />
          <div className="content">
            <div className="content-titles">
              <h1>Model Y</h1>
              <p>Order Online for <a target="_blank" href="https://www.tesla.com/modely/design#overview">Touchless Delivery</a></p>
            </div>

            <div className="buttons">
              <a href="https://www.tesla.com/modely/design#overview" target="_blank">custom order</a>
              <a href="https://www.tesla.com/drive?selectedModel=modely" target="_blank">Demo Drive</a>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <img src={models} alt="model s" />
          <div className="content">
            <div className="content-titles">
              <h1>Model S</h1>
              <p>Order Online for <a target='_blank' href="https://www.tesla.com/models/design#overview">Touchless Delivery</a></p>
            </div>

            <div className="buttons">
              <a href="https://www.tesla.com/models/design#overview" target="_blank">custom order</a>
              <a href="https://www.tesla.com/en_AE/inventory/new/ms?arrangeby=relevance&zip=1947&range=0" target="_blank">existing inventory</a>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <img src={modelx} alt="model x" />
          <div className="content">
            <div className="content-titles">
              <h1>Model X</h1>
              <p>Order Online for <a target='_blank' href="https://www.tesla.com/modelx/design">Touchless Delivery</a></p>
            </div>

            <div className="buttons">
              <a href="https://www.tesla.com/modelx/design#overview" target="_blank">custom order</a>
              <a href="https://www.tesla.com/inventory/new/mx?arrangeby=relevance&range=0" target="_blank">existing inventory</a>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <img src={solarpanels} alt="solarpanels" />
          <div className="content">
            <div className="content-titles">
              <h1>Solar Panels</h1>
              <p>Lowest Cost Solar Panels in America</p>
            </div> 

            <div className="buttons">
              <a href="https://www.tesla.com/energy/design" target="_blank">Order Now</a>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <img src={roof} alt="roof" />
          <div className="content">
            <div className="content-titles">
              <h1>Solar Roof</h1>
              <p>Produce Clean Energy From Your Roof</p>
            </div>

            <div className="buttons">
              <a href="https://www.tesla.com/energy/design" target="_blank">Order Now</a>
            </div>
          </div>
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  )
}