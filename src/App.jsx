// import { RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import Form from "Components/common/form/Form";

function App() {
  const { t } = useTranslation(["common"]);
  //  const router = createHashRouter([
  //    ...publicRoutes,
  //    {
  //      element: <ProtectedRoute />/ AuthLayout,
  //      children: [...protectedRotues],
  //    },
  //  ]);

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      {/* <p>{t("yo")}</p> */}
      <Form />
      {/* <RouterProvider router={router} /> */}
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
