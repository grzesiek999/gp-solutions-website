import styles from './Footer.module.scss'
import Copyright from "../Copyright/Copyright.tsx";
import FooterInformation from "../FooterInformation/FooterInformation.tsx";

const Footer = () => {
    return (
        <footer>
            <div className={styles.websiteLayoutFooterDiv}>
                <FooterInformation />
                <Copyright />
            </div>
        </footer>
    )
}

export default Footer