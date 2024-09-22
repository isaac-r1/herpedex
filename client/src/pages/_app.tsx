import "@/styles/globals.css";
import type {AppProps} from 'next/app'
import {AuthProvider} from "@propelauth/react";

export default function App({Component, pageProps}: AppProps) {
    return <AuthProvider authUrl="https://5623171022.propelauthtest.com">
        <Component {...pageProps} />
    </AuthProvider>
}