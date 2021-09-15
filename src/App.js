import React from "react";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import Main from "./containers";
import Notifier from "./Redux/Notifier";
import ErrorBoundary from "./components/UI/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <SnackbarProvider
        dense={false}
        hideIconVariant={false}
        preventDuplicate={false}
        autoHideDuration={1000}
        // persist={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <BrowserRouter>
          <Notifier />
          <Main />
        </BrowserRouter>
      </SnackbarProvider>
    </ErrorBoundary>
  );
}
