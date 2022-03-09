import React from "react";
import ReactDOM from "react-dom";
// import './css/main.css'
import storeInstance from './store/Store'
import TodoHome from "./pages/TodoHome";
import Layout from "./components/wrapper/Layout";

export const StoreContext = React.createContext();

ReactDOM.render(
    <StoreContext.Provider value={storeInstance}>
        <Layout>
            <TodoHome />
        </Layout>    
    </StoreContext.Provider >
    , document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}