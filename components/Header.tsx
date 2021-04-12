import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
    const route = useRouter().route
    const activePageClass = "active"
    
    return (
        <div className="mainHeader">
            <header>
                <h1>Boligstjernen</h1>
                <nav>
                    <Link href="/">
                        {route == "/" ? <a className={activePageClass}>Forside</a> : <a>Forside</a>}
                    </Link>

                    <Link href="/search">
                        {route == "/search" ? <a className={activePageClass}>Søg bolig</a> : <a>Søg bolig</a>}
                    </Link>

                    <Link href="/news">
                        {route == "/news" ? <a className={activePageClass}>Nyheder</a> : <a>Nyheder</a>}
                    </Link>

                    <Link href="/contact">
                        {route == "/contact" ? <a className={activePageClass}>Kontakt</a> : <a>Kontakt</a>}
                    </Link>
                </nav>
            </header>
        </div>
    )
}