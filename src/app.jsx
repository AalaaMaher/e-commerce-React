import { Routes, useNavigate ,Link,Route} from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductComponent/ProductList";
import CatogaryList from "./CatogaryComponent/CatogaryList";
import Login from './login'
import CartList from "./CartComponant/CartList";
import { BrowserRouter,  Switch } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';
const App = () => {
    // const [token, setToken] = useState();
    //  if(!token) {
    //     return <Login setToken={setToken} />
    //    }

    return (

        <>
        <div>
            <Header />
            <div className="container">
         <Routes>
          <Route element={<ProductList/>} path="/product/*" >
          
          </Route>
          <Route element={<CatogaryList/>} path="/catogary/*" >
          
          </Route>
          <Route element={<CartList/>} path="/cart/*" >
          
          </Route>
        </Routes> 
            </div>
            </div>
        </>
    )
}
export default App