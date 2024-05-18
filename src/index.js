import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { ShopperIndex } from './components/shopper-index/shopper-index';
import { MUIComponents } from './components/mui-components/MUIComponents';
import { ContextComponent } from './components/context-component/ContextComponent';
import { CookiesProvider } from 'react-cookie';
import { ReducerComponent } from './components/reducer-component/reducer-component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ShopperIndex/> */}
    {/* {<MUIComponents/>} */}
    <CookiesProvider>
      {/* <ContextComponent/> */}
      <ReducerComponent/>
    </CookiesProvider>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
