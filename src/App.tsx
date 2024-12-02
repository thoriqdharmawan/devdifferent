import { Outlet } from "react-router-dom";
import Layout from "./components/layout/base";
import { ThemeProvider } from "./components/custom/ThemeProvider";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
