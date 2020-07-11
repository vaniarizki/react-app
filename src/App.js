import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Header, Add, Contacts, Footer } from './views';

function App() {
  return (
    <>
      {/* Menampilkan Header */}
      <Header />
      {/* Router pages */}
      <Router>
        <div className="topnav">
          <Link to="/">Daftar Kontak</Link>
          <Link to="/add">Tambah Kontak</Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Contacts />
            </Route>
            <Route exact path="/add">
              <Add />
            </Route>
          </Switch>
        </div>
      </Router >
      <Footer />
    </>
  );
}

export default App;
