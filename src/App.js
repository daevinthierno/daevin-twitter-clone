import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/widgets/Widgets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispactch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/** sidebar */}
            <Sidebar />
            {/** Feed */}
            <Feed />
            {/** Widgets */}
            <Widgets />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
