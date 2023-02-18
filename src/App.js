import Cart from './pages/Cart';
import Home from './pages/Home';
import IndProduct from './pages/IndProduct';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  // initially the user would not be logged in, ie there would be no user, so user = false
  const user = false
  return (
    <>
        <HashRouter basename='/'>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/products/:category" element={<ProductList />} />
            
            <Route path="/product/:id" element={<IndProduct />} />
            
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/login" element={
              //if a user is logged in, the /login will redirect to home page ie /
              user ? (<Navigate replace to={"/"} />) : (<Login />)
            } />
            
            <Route path="/register" element={
              user ? (<Navigate replace to={"/"} />) : (<Register />)
            } />
          </Routes>
        </HashRouter>  
    </>
  );
}

export default App;
