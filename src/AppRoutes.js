import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import ContextExample from "./components/context-example/ContextExample";
import PropDrillingExample from "./components/prop-drilling/PropDrillingExample";
import Timer from "./components/timer/Timer";
import PriceCalculator from "./components/price-calculator/PriceCalculator";
import Message from "./components/message/Message";
import NestedObjectViewer from "./components/nested-object-viewer/NestedObjectViewer";
import ReactPortalExample from "./components/react-portal/ReactPortalExample";
import TravelPlannerExample from "./components/travel-planner/TravelPlannerExample";
import AccordionExample from "./components/accordion/AccordionExample";
import MortgageCalculator from "./components/mortgage-calculator/MortgageCalculator";
import PaginationExample from "./components/pagination-example/PaginationExample";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/context-example" element={<ContextExample />} />
      <Route path="/prop-drilling" element={<PropDrillingExample />} />
      <Route path="/nested-object-viewer" element={<NestedObjectViewer />} />
      <Route path="/price-calculator" element={<PriceCalculator />} />
      <Route path="/timer-example" element={<Timer />} />
      <Route path="/message" element={<Message />} />
      <Route path="/react-portals" element={<ReactPortalExample />} />
      <Route path="/travel-planner" element={<TravelPlannerExample />} />
      <Route path="/accordion" element={<AccordionExample />} />
      <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
      <Route path="/pagination-example" element={<PaginationExample />} />
    </Routes>
  );
}

export default AppRoutes;
