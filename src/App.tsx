import { Outlet } from "react-router-dom";
import Layout from "./components/layout/base";
import { ThemeProvider } from "./components/custom/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
