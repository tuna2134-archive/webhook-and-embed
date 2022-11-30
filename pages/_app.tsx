import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Discord webhook</title>
            </Head>
            <header className="p-2 bg-[#5865F2]">
                <h1 className="text-3xl text-white">Webhooked</h1>
            </header>
            <main className="px-5 py-4">
                <Component {...pageProps} />
            </main>
            <ToastContainer />
        </>
    )
}

export default MyApp
