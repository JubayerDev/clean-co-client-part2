import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';
import Navbar from "./components/Navbar";
import PrivateRoutes from "./routes/privateRoutes";
import { publicRoute } from "./routes/publicRoutes";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar >
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<PrivateRoute />}>
            {PrivateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
45