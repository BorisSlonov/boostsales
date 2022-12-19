import { useRouter } from "next/router";
import { en } from './en';
import { ru } from './ru';

const Locales = () => {
    const router = useRouter();
    const langJson = router.locale === 'en' ? en : ru;
    return (<>
        {langJson}
    </>)
}

export default Locales