import styles from "./FooterInformation.module.scss";
import CompanyLogo from "../CompanyLogo/CompanyLogo.tsx";
import {WebsiteNavFooter} from "../WebsiteNav/WebsiteNav.tsx";
import ContactDataList from "../ContactDataList/ContactDataList.tsx";
import {useMedia} from "use-media";

const FooterInformation = () => {

    const isMobile = useMedia({ maxWidth: 768 });

    return (
        <div className={styles.footerInformationDiv}>
            <div className={styles.footerInformationChunk}>
                <CompanyLogo className={styles.websiteFooterLogo} path={'src/assets/icons/gp-solutions-white.png'} />
                {isMobile ? null:
                <span className={styles.footerSpanType1}>
                    Kompleksowa opieka IT dla firm. Bezpieczeństwo, niezawodność i wsparcie na którym możesz polegać.
                </span>}
            </div>
            <ContactDataList
                containerClassName={styles.footerInformationChunk}
                titleSpanClassName={styles.footerSpanTitle}
                dataSpanClassName={styles.footerSpanType1}
                imgClassName={styles.footerInformationContactDataImg}
            />
            <div className={`${styles.footerInformationChunk} ${styles.lastChunk}`}>
                <span className={styles.footerSpanTitle}>Menu</span>
                <WebsiteNavFooter />
            </div>
        </div>
    )
}

export default FooterInformation;