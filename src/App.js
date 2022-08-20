import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import AccountSearch from './pages/AccountSearch';
import AccountBookshelf from './pages/AccountBookshelf';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/accountbookshelf' element={<AccountBookshelf />} />
        <Route path='/accountsearch' element={<AccountSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
