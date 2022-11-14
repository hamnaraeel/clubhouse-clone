import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
        <Route exact path='/' element={ <Welcome /> } />
        <Route exact path='/invite' element={<PhoneConfirmation /> } />
        </Routes>
      </PlanLayout>
    </BrowserRouter>
    );
}

export default App;
