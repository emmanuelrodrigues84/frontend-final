import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {
    return (
        <div className="header-menu">
            <nav>
                <ul className="menuItems">
                    <Image
                        src="/Images/logoblog.jpg"
                        width={150}
                        height={150}
                    />
                    <li>
                        <Link href="/">
                            <a data-item='Home'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Hulk">
                            <a data-item='SobreHulk'>Sobre Hulk</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}