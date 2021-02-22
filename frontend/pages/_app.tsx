import React from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import App from "next/app";
import type { AppProps } from "next/app";
import { AuthProvider } from "../auth";

function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}
export default App;
