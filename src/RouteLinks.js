import { Route, Routes } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import EnterpriseHome from "./components/enterprise/EnterpriseHome";


const RouteLinks = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/enterprise-business" element={<EnterpriseHome />} />
        </Routes>
    );
}
export default RouteLinks;