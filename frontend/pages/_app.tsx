import "../styles/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="main-background">
      <Component {...pageProps} />
    </div>
  );
}
