import WebsiteNav from "../WebsiteNav/WebsiteNav.tsx";
import CompanyLogo from "../CompanyLogo/CompanyLogo.tsx";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header>
            <div className={`${styles.websiteLayoutHeaderDiv}`}>
                <CompanyLogo className={styles.websiteLayoutLogo}/>
                <WebsiteNav />
            </div>
        </header>
    )
}

export default Header