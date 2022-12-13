import Image from 'next/image'
import headerStyles from '../styles/headerStyles.module.scss'
import MyNav from './MyNav';
import LangSwitcher from './LangSwitcher';


const Header = () => {
    return (
        <div>
            <header className={headerStyles.header}>
                <div className="container">
                    <div className={headerStyles.header__body}>
                        <div className={headerStyles.header__item}>
                            <a href="/">
                                <span>
                                    boostsales.online
                                </span>
                            </a>
                        </div>
                        <div className={headerStyles.header__item}>
                            <MyNav />
                            <LangSwitcher />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
