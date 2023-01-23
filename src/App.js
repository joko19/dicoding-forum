import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Loading from "./components/LoadingBar";
import CreateThread from "./pages/CreateThread";
import Leaderboards from "./pages/Leaderboards";
import DetailThread from "./pages/DetailThread";

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }
  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateThread />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/:id" element={<DetailThread />} />
      </Routes>
    </>
  );
}

export default App;
