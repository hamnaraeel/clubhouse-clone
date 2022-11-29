import { Routes, Route } from 'react-router-dom';
import AppLayout from '../pages/Layouts/AppLayout';
import Home from '../pages/Home';


function AppLayoutRoutes() {
    return (
        <AppLayout>
          <Routes
            exact
            path={[
                "/home"
            ]} 
          >  
            <Route exact path='/home' element={ <Home /> } />
          </Routes>
        </AppLayout>
      );
  }
  
  export default AppLayoutRoutes;