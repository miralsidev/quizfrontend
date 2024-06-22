
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home';
import TestForm from './Componets/TestForm';
import NavBar from './Componets/NavBar';
import Layout from './Componets/Layout';

function App() {
  return (
    <>

<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="testform" element={<TestForm />} />
        </Route>
      </Routes>
    </>
  );
  
}

export default App;
