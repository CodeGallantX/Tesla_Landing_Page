import './App.css'
import Home from "./components/Home.jsx"
import Navbar from './components/Navbar'


import ModelS from "./components/menu-components/ModelS.jsx"
import ModelX from "./components/menu-components/ModelX.jsx"
import ModelY from "./components/menu-components/ModelY.jsx"
import Model3 from "./components/menu-components/Model3.jsx"
import Roof from "./components/menu-components/Roof.jsx"
import Solarpanels from "./components/menu-components/Solarpanels.jsx"
import ExistingInventory from "./components/menu-components/ExistingInventory.jsx"
import UsedInventory from "./components/menu-components/UsedInventory.jsx"
import TradeIn from "./components/menu-components/TradeIn.jsx"
import TestDrive from "./components/menu-components/TestDrive.jsx"
import PowerWall from "./components/menu-components/PowerWall.jsx"
import CommercialEnergy from "./components/menu-components/CommercialEnergy.jsx"
import Utilities from "./components/menu-components/Utilities.jsx"
import Charging from "./components/menu-components/Charging.jsx"
import FindUs from "./components/menu-components/FindUs.jsx"
import Support from "./components/menu-components/Support.jsx"
import InvestorRelations from "./components/menu-components/InvestorRelations.jsx"
import Shop from "./components/menu-components/Shop.jsx"
import Account from "./components/menu-components/Account.jsx"
import RickRoll from "./components/menu-components/RickRoll.jsx"

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Navbar />}>
    <Route index element={<Home />}></Route>
    <Route path="model-s" element={<ModelS />} />
    <Route path="model-x" element={<ModelX />} />
    <Route path="model-y" element={<ModelY />} />
    <Route path="model-3" element={<Model3 />} />
    <Route path="roof" element={<Roof />} />
    <Route path="solarpanels" element={<Solarpanels />} />
    <Route path="existing-inventory" element={<ExistingInventory />} />
    <Route path="used-inventory" element={<UsedInventory />} />
    <Route path="trade-in" element={<TradeIn />} />
    <Route path="test-drive" element={<TestDrive />} />
    <Route path="powerwall" element={<PowerWall />} />
    <Route path="commercial-energy" element={<CommercialEnergy />} />
    <Route path="utilities" element={<Utilities />} />
    <Route path="charging" element={<Charging />} />
    <Route path="find-us" element={<FindUs />} />
    <Route path="support" element={<Support />} />
    <Route path="investor-relations" element={<InvestorRelations />} />
    <Route path="shop" element={<Shop />} />
    <Route path="account" element={<Account />} />
    <Route path="rickroll" element={<RickRoll />} />
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
