import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/home/Home";
import Loader from "./utils/Loader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
