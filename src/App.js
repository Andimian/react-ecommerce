import Header from "./components/Header";
import Footer from "./components/Footer";
import Test from "./components/test";
import Goods from "./Goods";
import goodsList from "./catalog";

function App() {
  return (
    <div className="Wrapper">
     <Header/>
        <Test/>
        {/*<Goods goodsList={goodsList}/>*/}
        {goodsList.map(item => <Goods title={item.title} price={item.price} image={item.image} />)}
     <Footer/>
    </div>
  );
}

export default App;
