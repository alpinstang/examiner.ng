import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import App from 'next/app'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}),
			},
		}
	}

	componentDidMount() {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDOM, 1000)
		}
	}

	render() {
		const { Component, pageProps } = this.props

		const theme = createMuiTheme({
			palette: {
				background: {
					default: '#EEE',
				},
				primary: {
					main: '#673ab7',
				},
			},
		})

		return (
			<>
				<Head>
					<title>Todo App</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline>
						<Component {...pageProps} />
					</CssBaseline>
				</ThemeProvider>
			</>
		)
	}
}

const dev = process.env.NODE_ENV === 'development'
const server = dev ? 'http://localhost:3000' : 'https://mydomain.com/'

MyApp.getInitialProps = async (appContext) => {
	const { ctx } = appContext
	// Calls `getInitialProps` and fills `appProps.pageProps`
	let error
	const appProps = await App.getInitialProps(appContext)

	const { firebaseToken } = cookies(ctx)

	// If token exists run Firebase validation on server side before rendering.
	if (firebaseToken) {
		try {
			const headers = {
				'Context-Type': 'application/json',
				Authorization: JSON.stringify({ token: firebaseToken }),
			}
			const result = await fetch(`${server}/api/validate`, {
				headers,
			}).then((res) => res.json())
			return { ...result, ...appProps }
		} catch (e) {
			console.log(e)
		}
	}
	return { ...appProps }
}
