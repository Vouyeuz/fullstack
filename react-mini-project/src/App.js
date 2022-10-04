import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login, MyProfile, Order, SignUp } from './containers/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/homepage"
          element={
            <Dashboard id={'homepage'} />
          }
        />
        <Route
          path="/profile"
          element={
            <MyProfile id={'myProfile'} />
          }
        />
        <Route
          path="/order"
          element={
            <Order id={'order'} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp id={'signUp'} />
          }
        />
        <Route
          path="/"
          element={
            <Login id={'login'} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
