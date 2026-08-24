import {Link} from "react-router-dom";
import {WebsiteNavHeader} from "../WebsiteNav/WebsiteNav.tsx";
import CompanyLogo from "../CompanyLogo/CompanyLogo.tsx";
import Button from "../Button/Button.tsx";
import styles from "./Header.module.scss";

const Header = () => {

    const WhatsappButtonFunc = () =>{
        const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE;
        const message = encodeURIComponent("Dzień dobry, chciałbym zapytać o ofertę.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }

    return (
        <header>
            <div className={`${styles.websiteLayoutHeaderDiv}`}>
                <Link to={'/'}><CompanyLogo className={styles.websiteLayoutLogo} path={`src/assets/icons/gp-solutions-blue.png`}/></Link>
                <WebsiteNavHeader />
                <Button
                    onClick={WhatsappButtonFunc}
                    type={'button'}
                    className={styles.websiteLayoutWhatsappButton}
                >
                    <div>
                        <img src='src/assets/icons/whatsapp-icon.png' alt="whatsapp-icon" />
                        <span className={''}>WhatsApp</span>
                    </div>
                </Button>
            </div>
        </header>
    )
}

export default Header