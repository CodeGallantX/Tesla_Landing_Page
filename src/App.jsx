import React, { useState, useEffect,  useLayoutEffect } from 'react';
import './App.css';
import Home, { loader as homeLoader } from './components/Home.jsx';
import Navbar from './components/Navbar';
import ErrorComponent from './components/ErrorComponent';

import ModelS, { loader as modelSLoader } from './components/menu-components/ModelS.jsx';
import ModelX, { loader as modelXLoader } from './components/menu-components/ModelX.jsx';
import ModelY, { loader as modelYLoader } from './components/menu-components/ModelY.jsx';
import Model3, { loader as model3Loader } from './components/menu-components/Model3.jsx';
import Roof, { loader as roofLoader } from './components/menu-components/Roof.jsx';
import Solarpanels, { loader as solarpanelsLoader } from './components/menu-components/Solarpanels.jsx';
import ExistingInventory, { loader as existingInventoryLoader } from './components/menu-components/ExistingInventory.jsx';
import UsedInventory, { loader as usedInventoryLoader } from './components/menu-components/UsedInventory.jsx';
import TradeIn, { loader as tradeInLoader } from './components/menu-components/TradeIn.jsx';
import TestDrive, { loader as testDriveLoader } from './components/menu-components/TestDrive.jsx';
import PowerWall, { loader as powerWallLoader } from './components/menu-components/PowerWall.jsx';
import CommercialEnergy, { loader as commercialEnergyLoader } from './components/menu-components/CommercialEnergy.jsx';
import Utilities, { loader as utilitesLoader } from './components/menu-components/Utilities.jsx';
import Charging, { loader as chargingLoader } from './components/menu-components/Charging.jsx';
import FindUs, { loader as findUsLoader } from './components/menu-components/FindUs.jsx';
import Support, { loader as supportLoader } from './components/menu-components/Support.jsx';
import InvestorRelations, { loader as investorRelationsLoader } from './components/menu-components/InvestorRelations.jsx';
import Shop, { loader as shopLoader } from './components/menu-components/Shop.jsx';
import Account, { loader as accountLoader } from './components/menu-components/Account.jsx';
import RickRoll, { loader as rickRollLoader } from './components/menu-components/RickRoll.jsx';

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import SignIn from './components/Signin/SignIn';

function App() {

  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [isLoggedIn, setIsLoggedIn] = useState(seeIfSignedIn());


  function handleSignIn(email) {
    setEmail(email);
    localStorage.setItem('email', email);
    setIsLoggedIn(true);
  }

  function seeIfSignedIn() {
    return email !== null;
  }
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);


  useEffect(() => {
    setEmail(localStorage.getItem('email'));

  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
        <Route index element={<SignIn onSignIn={handleSignIn} />} loader={homeLoader} />
        <Route path="home" element={<Home />} loader={homeLoader} />
        <Route path="model-s" element={<ModelS />} loader={modelSLoader} />
        <Route path="model-x" element={<ModelX />} loader={modelXLoader} />
        <Route path="model-y" element={<ModelY />} loader={modelYLoader} />
        <Route path="model-3" element={<Model3 />} loader={model3Loader} />
        <Route path="roof" element={<Roof />} loader={roofLoader} />
        <Route path="solarpanels" element={<Solarpanels />} loader={solarpanelsLoader} />
        <Route path="existing-inventory" element={<ExistingInventory />} loader={existingInventoryLoader} />
        <Route path="used-inventory" element={<UsedInventory />} loader={usedInventoryLoader} />
        <Route path="trade-in" element={<TradeIn />} loader={tradeInLoader} />
        <Route path="test-drive" element={<TestDrive />} loader={testDriveLoader} />
        <Route path="powerwall" element={<PowerWall />} loader={powerWallLoader} />
        <Route path="commercial-energy" element={<CommercialEnergy />} loader={commercialEnergyLoader} />
        <Route path="utilities" element={<Utilities />} loader={utilitesLoader} />
        <Route path="charging" element={<Charging />} loader={chargingLoader} />
        <Route path="find-us" element={<FindUs />} loader={findUsLoader} />
        <Route path="support" element={<Support />} loader={supportLoader} />
        <Route path="investor-relations" element={<InvestorRelations />} loader={investorRelationsLoader} />
        <Route path="shop" element={<Shop />} loader={shopLoader} />
        <Route path="account" element={<Account />} loader={accountLoader} />
        <Route path="rickroll" element={<RickRoll />} loader={rickRollLoader} />
        <Route path="*" element={<ErrorComponent />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;