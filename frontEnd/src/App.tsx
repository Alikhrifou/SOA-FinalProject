import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './components/Login';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AddUserForm from './components/AddUserForm';

const App: React.FC = () => {


  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<AddUserForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<ProductList />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
