import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Cars from "./pages/cars";
//import Car from "./pages/car";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
         <Route path="cars" element={<Cars />} >
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);