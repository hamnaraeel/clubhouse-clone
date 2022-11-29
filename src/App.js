import './App.css';
// import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Welcome from './pages/Welcome';
// import PhoneConfirmation from './pages/PhoneConfirmation';
// import CodeConfirm from './pages/CodeConfrim';
// import AllowNotification from './pages/AllowNotification';
import PlanLayoutRoutes from './Routes/PlanLayoutRoutes';
import AppLayoutRoutes from './Routes/AppLayoutRoutes';

function App() {
  return (
    <BrowserRouter>
        {/* <Routes>  
          <Route
            exact
            path={[
              "/",
              "/invite",
              "/get_username",
              "/code_confirm",
              "/allow_notification" 
            ]} 
          >
          </Route>
        </Routes> */}
        <PlanLayoutRoutes />
        <AppLayoutRoutes />
    </BrowserRouter>
    );
}

export default App;
