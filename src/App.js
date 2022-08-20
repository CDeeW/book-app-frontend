import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Account from './pages/Account';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createaccount' element={<CreateAccount />} />

        <Route path='/account' element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
