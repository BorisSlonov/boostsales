import Link from "next/link";
import { useRouter } from "next/router";
import MyNavStyles from "../styles/MyNav.module.scss"

const MyNav = () => {

    const router = useRouter();

    return (
        <ul className={MyNavStyles.nav}>
            <li className={router.pathname == "/" ? MyNavStyles.activeLink : ""}>
                <Link href="/">Главная</Link>
            </li>
            <li className={router.pathname == "/about" ? MyNavStyles.activeLink : ""}>
                <Link href="/about">О нас</Link>
            </li>
        </ul>
    );
};

export default MyNav