import { Routes, Route } from 'react-router-dom';
import PlanLayout from '../pages/Layouts/PlanLayout';
import Welcome from '../pages/Welcome';
import PhoneConfirmation from '../pages/PhoneConfirmation';
import CodeConfirm from '../pages/CodeConfrim';
import AllowNotification from '../pages/AllowNotification';


function PlanLayoutRoutes() {
    return (
        <PlanLayout>
          <Routes 
            exact
            path={[
                "/",
                "/invite",
                "/get_username",
                "/code_confirm",
                "/allow_notification" 
            ]}
          >  
            {/* <Route
              exact
              path={[
                "/",
                "/invite",
                "/get_username",
                "/code_confirm",
                "/allow_notification" 
              ]} 
            /> */}
            <Route exact path='/' element={ <Welcome /> } />
            <Route exact path='/invite' element={<PhoneConfirmation /> } />
            <Route exact path='/code_confirm' element={<CodeConfirm /> } />
            <Route exact path='/allow_notification' element={<AllowNotification /> } /> 
          </Routes>
        </PlanLayout>
      );
  }
  
  export default PlanLayoutRoutes;