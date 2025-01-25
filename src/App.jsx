import { useContext } from "react";
import { AllRoutes } from "./routes/AllRoutes";
import { AppContext } from "./context/AppContext";
import { Auth } from "./components/Auth";
import { Footer, Navbar } from "./components";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const { showLogin } = useContext(AppContext);
  return (
    <>
      <ToastContainer position="top-right" theme="dark" />
      {showLogin && <Auth />}
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
