import exp from "constants";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/LangSwitcher.module.scss"


function LangSwitcher() {
    const router = useRouter();
    return (
        <>
            <div className={styles.block}>
                <div className={styles.body}>
                    <Link className={router.locale == "en" ? styles.activeLink : ""} href="/en" locale="en">
                        <span className={styles.locale}>
                            En
                        </span>
                    </Link>
                    <Link className={router.locale == "ru" ? styles.activeLink : ""} href="/" locale="ru">
                        <span className={styles.locale}>
                            Ru
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LangSwitcher