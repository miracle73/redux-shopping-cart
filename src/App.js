import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
// import {actions} from './store/index'
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn)
  // const dispatch = useDispatch();
  // const increment = () => {
  //   dispatch(actions.increment())
  // }
  // const decrement = () => {
  //   dispatch(actions.decrement())
  // }
  // const addBy = () => {
  //   dispatch(actions.addBy(10))
  // }
  return (
    <div className="App">
      {/* <Auth /> */}
      {isLoggedIn ? <Layout /> : <Auth /> }
      {/* <Layout /> */}
    </div>
  );
}

export default App;
