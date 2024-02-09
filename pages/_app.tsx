import '../global.css'
import {NextComponentType} from "next";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: {Component: NextComponentType, pageProps: any}) {
    return <Component {...pageProps} />
}
