import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Pages from "pages";
import ScrollToTop from "components/templates/ScrollToTop";
import PathRoutes from "./PathRoutes";

function MyRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {PathRoutes?.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="/*" element={<Pages.NotFound />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;