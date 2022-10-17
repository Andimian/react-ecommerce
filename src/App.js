import Header from "./components/Header";
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

function App() {
  return (
    <div className="Wrapper">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Goods />}> </Route>
                <Route path="/cart" element={<Cart />}> </Route>
                <Route index element={<Goods />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
