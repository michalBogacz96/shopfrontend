import './App.css';
import ProductsPanel from "./components/products/ProductsPanel";
import AppContextProvider from "./appContext/AppContextProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BasketPanel from "./components/basket/BasketPanel";
import CategoryPanel from "./components/category/CategoryPanel";
import SpecificProductPanel from "./components/category/SpecificProductPanel";
import LoginPanel from "./components/login/LoginPanel";
import RegistrationPanel from "./components/registration/RegistrationPanel";
import axios from "axios";

axios.interceptors.request.use((cfg) => {
    const appContext = JSON.parse(localStorage.getItem('app_user_context'));

    if (appContext && appContext.user && appContext.token && appContext.isLogin) {
        cfg.headers.common['Authorization'] = appContext.token
    }

    return cfg;
});

function App() {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element=<LoginPanel/>/>
                    <Route exact path='/registration' element=<RegistrationPanel/>/>
                    <Route exact path='/product' element=<ProductsPanel/>/>
                    <Route exact path='/basket' element=<BasketPanel/>/>
                    <Route exact path='/category' element=<CategoryPanel/>/>
                    <Route path='/product/category/:categoryId' element=<SpecificProductPanel/>/>
                </Routes>

            </BrowserRouter>
        </AppContextProvider>

    );
}

export default App;
