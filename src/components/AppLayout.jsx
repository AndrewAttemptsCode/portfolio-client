import { Outlet } from "react-router-dom";
import Header from "./Header"

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </>
  );
};

export default AppLayout;