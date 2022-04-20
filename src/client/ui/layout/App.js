
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify"



const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App