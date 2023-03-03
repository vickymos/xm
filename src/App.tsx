import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Login from "./routes/login";
import NotFound from "./routes/notFound";
import Home from "./routes/homepage";
import BurgerMaker from "./routes/burgerMaker";

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="make-a-burger" element={<BurgerMaker />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;