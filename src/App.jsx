import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./component/footer"
import Navbar from "./component/nav"
import RouteApp from "./route/routing"


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scrolls to top when pathname changes

  return (
    <>
    <Navbar/>
    <RouteApp/>
    <Footer/>
    </>
  )
}

export default App
