import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { Router, Routes, Route, Switch } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfrim';
import AllowNotification from './pages/AllowNotification';

function App() {
  return (
    <Router>
    <Routes>
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
      <PlanLayout>
        <Switch>  
          <Route exact path='/' element={ <Welcome /> } />
          <Route exact path='/invite' element={<PhoneConfirmation /> } />
          <Route exact path='/code_confirm' element={<CodeConfirm /> } />
          <Route exact path='/allow_notification' element={<AllowNotification /> } />
        </Switch>
      </PlanLayout>
      </Route>
      </Routes>
    </Router>
    );
}

export default App;
