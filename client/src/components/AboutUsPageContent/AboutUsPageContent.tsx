import styles from './AboutUsPageContent.module.scss'
import HowWeWorkList from "../HowWeWorkList/HowWeWorkList.tsx";

const AboutUsPageContent = () => {
    return (
        <div className={styles.aboutUsPageContentMainDiv}>
            <div className={styles.aboutUsPageContentDiv}>
                <div>
                    <span>Kim jesteśmy?</span>
                    <p>GP IT Solutions to firma specjalizująca się w
                        kompleksowej obsłudze informatycznej dla małych i średnich firm.</p>
                    <p>Pomagamy przedsiębiorcom bezpiecznie rozwijać biznes, dostarczając niezawodne wsparcie IT,
                        zabezpieczenia oraz rozwiązania dopasowane do ich potrzeb.</p>
                </div>
                <div>
                    <span>Jak pracujemy?</span>
                    <HowWeWorkList />
                </div>
            </div>
            <div className={styles.aboutUsPageContentLogoDiv}>
                <img src={'src/assets/icons/short-logo-icon.png'} alt='short logo icon error' />
            </div>
        </div>
    )
}

export default AboutUsPageContent