import { Routes, Route } from "react-router-dom";
import { routes } from ".";
const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      {routes.map((route) => {
        const { path, Component } = route;
        return <Route path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export { AppRouter };
