import { Outlet } from "react-router-dom";
import Layout from "./components/layout/base";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
