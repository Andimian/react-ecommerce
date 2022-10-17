import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Goods from "./components/Goods";
import goodsList from "./catalog";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NotFound from "./components/404";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="Wrapper">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Goods goods={goodsList}/>} />
                    <Route path="cart" element={<Cart />}> </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
