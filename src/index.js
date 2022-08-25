import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import * as serviceWorkerRegistration from "../public/serviceWorkerRegistration";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


//  Descomentar si se quiere usar el pwa 

//  if ('serviceWorker' in navigator) {
//    window.addEventListener('load', () => {
//      navigator.serviceWorker.register('/service-worker.js').then(registration => {
//        console.log('SW registered: ', registration);
//      }).catch(registrationError => {
//        console.log('SW registration failed: ', registrationError);
//      });
//    });
//  }
