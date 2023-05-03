/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path={'/login'} element={<LoginPage/>} />
      <Route path={'/Register'} element={<RegisterPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
