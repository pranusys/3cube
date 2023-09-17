import { Route, Routes } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import EnterpriseHome from "./components/enterprise/EnterpriseHome";
import RetailHome from "./components/retail/RetailHome";


const RouteLinks = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/enterprise-business" element={<EnterpriseHome />} />
            <Route path="/retail-business" element={<RetailHome />} />
        </Routes>
    );
}
export default RouteLinks;