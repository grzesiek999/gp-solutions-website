import styles from "./FooterInformation.module.scss";
import CompanyLogo from "../CompanyLogo/CompanyLogo.tsx";
import {WebsiteNavFooter} from "../WebsiteNav/WebsiteNav.tsx";

const FooterInformation = () => {
    return (
        <div className={styles.footerInformationDiv}>
            <div className={styles.footerInformationChunk}>
                <CompanyLogo className={styles.websiteFooterLogo} path={'src/assets/icons/gp-solutions-white.png'} />
                <span className={styles.footerSpanType1}>
                    Kompleksowa opieka IT dla firm. Bezpieczeństwo, niezawodność i wsparcie na którym możesz polegać.
                </span>
            </div>
            <div className={styles.footerInformationChunk}>
                <span className={styles.footerSpanTitle}>Dane kontaktowe</span>
                <ul>
                    <li>
                        <img src={`src/assets/icons/phone-icon.png`} alt={'phone icon error'} />
                        <span className={styles.footerSpanType1}>+48 608 158 611</span>
                    </li>
                    <li>
                        <img src={`src/assets/icons/mail-icon.png`} alt={'mail icon error'} />
                        <span className={styles.footerSpanType1}>grzegorz.pasich@o2.pl</span>
                    </li>
                    <li>
                        <img src={`src/assets/icons/pineapple-icon.png`} alt={'pineapple icon error'} />
                        <span className={styles.footerSpanType1}>Cała Polska</span>
                    </li>
                </ul>
            </div>
            <div className={`${styles.footerInformationChunk} ${styles.lastChunk}`}>
                <span className={styles.footerSpanTitle}>Menu</span>
                <WebsiteNavFooter />
            </div>
        </div>
    )
}

export default FooterInformation;