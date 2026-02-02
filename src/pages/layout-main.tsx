import { Outlet } from "react-router";
import MainContent from "../core-components/main-content";
import Header from "../core-components/header";

export default function LayoutMain() {
  return (
    <>
      <MainContent>
        <Header />
        <Outlet />
      </MainContent>
    </>
  );
}
