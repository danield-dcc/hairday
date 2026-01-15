import { Outlet } from "react-router";
import MainContent from "../core-components/main-content";

export default function LayoutMain() {
  return (
    <>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}
