import type { AppProps } from 'next/app'
import "../scss/style.scss"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}