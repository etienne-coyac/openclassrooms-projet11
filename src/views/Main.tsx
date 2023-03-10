import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../style/index.scss"
function Main() {
  return (
    <>
      <Header/>

      <Outlet />
    </>
  );
}

export default Main;
