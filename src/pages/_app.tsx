import store from "@/redux/store";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  );
}
