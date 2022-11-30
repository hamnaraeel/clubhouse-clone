import { Routes, Route } from 'react-router-dom';
import AppLayout from '../pages/Layouts/AppLayout';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile'

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
            <Route exact path='/explore' element={ <Explore /> } />
            <Route exact path='/profile' element={ <Profile /> } />

          </Routes>
        </AppLayout>
      );
  }
  
  export default AppLayoutRoutes;