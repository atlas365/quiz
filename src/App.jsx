import SideNavigation from "./navigation/SideNavigation";
import { Outlet, Routes, BrowserRouter, Route, } from "react-router-dom";
import "./design-system/colors/palette.css";
import "./App.css";
import Home from "./screens/home/Home";
import DesingElements from "./screens/design-elements/DesignElements";
import FlashCards from "./screens/flash-cards/FlashCards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1️⃣ Wrap your routes in a pathless layout route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/design-elements" element={<DesingElements />} />
          <Route path="/flash-cards" element={<FlashCards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div className="App">
      <div className="side-drawer">
        <SideNavigation />
      </div>
      <div className="main-app">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
