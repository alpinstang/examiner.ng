import { AppProps } from "next/app";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
