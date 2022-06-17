import { Routes, Route } from "react-router-dom";
import Faq from "../pages/faq";
import Home from "../pages/home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FAQ" element={<Faq />} />
    </Routes>
  );
};

export default Routing;
