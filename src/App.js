import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
   return (
      <ThemeProvider>
         <BrowserRouter basename={process.env.PUBLIC_URL}>
            <BaseLayout />
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
