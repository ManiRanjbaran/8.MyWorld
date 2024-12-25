import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import Pricings from "./Pages/Pricings";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Product" element={<Product />} />
        <Route path="Pricings" element={<Pricings />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
