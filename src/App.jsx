import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import AppSuspense from "@/components/widgets/AppSuspense";

import router from "@/routes";
import { store } from "@/store";

import "@/styles/style.scss";

function App() {
  return (
    <Provider store={store}>
      <AppSuspense>
        <RouterProvider router={router} />
      </AppSuspense>
    </Provider>
  );
}

export default App;
