import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnalyticsPage from "./Pages/AnalyticsPage"; 
import Login from "./Pages/Login";
import ProtectedRoute from "./Router/ProtectedRouter";
import { Toaster } from "sonner";
function App() {
  return (
    <>
    <Toaster />

    <Router>
      

      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<ProtectedRoute element={AnalyticsPage} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
