import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GoMarkGithub } from "react-icons/go"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Discord webhook</title>
            </Head>
            <div className="flex flex-col h-screen">
                <header className="p-2 bg-[#5865F2] flex justify-between">
                    <h1 className="text-3xl text-white">Webhooked</h1>
                    <nav className="flex">
                        <Link href="https://github.com/tuna2134/webhook-and-embed">
                            <a className="px-2"><GoMarkGithub size={40} /></a>
                        </Link>
                    </nav>
                </header>
                <main className="px-5 py-4">
                    <Component {...pageProps} />
                </main>
                <footer className="bg-[#5865F2]">
                    <p className="text-center">&copy; 2022 tuna2134</p>
                </footer>
            </div>
            <ToastContainer />
        </>
    )
}

export default MyApp
