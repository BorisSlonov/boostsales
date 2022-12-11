import Image from 'next/image'
import headerStyles from '../styles/headerStyles.module.scss'
import MyNav from './MyNav';

const Header = () => {
    return (
        <div>
            <header className={headerStyles.header}>
                <div className="container">
                    <div className={headerStyles.header__body}>
                        <div className={headerStyles.header__item}>
                            <Image className={headerStyles.header__logo} src="/images/tg.svg" alt="Vercel Logo" width={72} height={16} />
                        </div>
                        <div className={headerStyles.header__item}>
                            <MyNav />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
