import { Outlet } from "react-router-dom";
import { ViewAppBar, ViewFooter } from "../components";

const Layout = () => {
  return (
    <div>
      <ViewAppBar>
        <Outlet />
      </ViewAppBar>
      <ViewFooter />
    </div>
  );
};
export default Layout;
