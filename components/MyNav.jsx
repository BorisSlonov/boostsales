import Link from "next/link";
import { useRouter } from "next/router";
import MyNavStyles from "../styles/MyNav.module.scss"
import { en } from '../locales/en';
import { ru } from '../locales/ru';



const MyNav = () => {

    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;

    return (
        <ul className={MyNavStyles.nav}>
            <li className={router.pathname == "/" ? MyNavStyles.activeLink : ""}>
                <Link href="/">{t.navLink1}</Link>
            </li>
            <li className={router.pathname == "/about" ? MyNavStyles.activeLink : ""}>
                <Link href="/about">{t.navLink2}</Link>
            </li>
        </ul>
    );
};

export default MyNav