
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import TDRBankList from '../../pages/TDRBankList';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Notifications from "../../pages/Notifications";
import Instructions from "../../pages/Instructions";
import Calculator from "../../pages/Calculator";
import Status from "../../pages/Status";
import SignIn from "../../pages/SignIn";
const AppNavigator = () => {
    const path=window.location.pathname
    const token='mbdvhkjbzxvhj'
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path={token !== undefined  ? '/tdr-bank-list':'/jskhfjs'} element={<TDRBankList />} />
                    <Route path="/notifications" element={<Notifications/>} />
                    <Route path="/instructions" element={<Instructions/>} />
                    <Route path="/calculator" element={<Calculator/>} />
                    <Route path="/status" element={<Status/>} />
                    <Route path="/sign-in" element={<SignIn/>} />

                </Routes>
            </BrowserRouter>
            {
                 path !=='/tdr-bank-list' ?
                 <Footer />
                 :
                 ''
            }
            
        </>

    )
}

export default AppNavigator