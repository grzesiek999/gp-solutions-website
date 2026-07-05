import styles from "./FooterInformation.module.scss";
import CompanyLogo from "../CompanyLogo/CompanyLogo.tsx";
import {WebsiteNavFooter} from "../WebsiteNav/WebsiteNav.tsx";

const FooterInformation = () => {
    return (
        <div className={styles.footerInformationDiv}>
            <div className={styles.footerInformationChunk}>
                <CompanyLogo className={styles.websiteFooterLogo} path={'src/assets/icons/gp-solutions-white.png'} />
                <span>Kompleksowa opieka IT dla firm. Bezpieczeństwo, niezawodność i wsparcie na którym możesz polegać.</span>
            </div>
            <div className={styles.footerInformationChunk}>
                <span>Dane kontaktowe</span>
                <ul>
                    <li>
                        <img src={``} alt={'phone icon error'} className={``}/>
                        <span>+48 608 158 611</span>
                    </li>
                    <li>
                        <img src={``} alt={'mail icon error'} className={``}/>
                        <span>grzegorz.pasich@o2.pl</span>
                    </li>
                    <li>
                        <img src={``} alt={'pineapple icon error'} className={``}/>
                        <span>Cała Polska</span>
                    </li>
                </ul>
            </div>
            <div className={`${styles.footerInformationChunk} ${styles.lastChunk}`}>
                <span>Menu</span>
                <WebsiteNavFooter />
            </div>
        </div>
    )
}

export default FooterInformation;