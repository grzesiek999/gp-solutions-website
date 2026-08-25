import {useState} from "react";
import {Link} from "react-router-dom";
import {WebsiteNavHeader} from "../WebsiteNav/WebsiteNav.tsx";
import CompanyLogo from "../CompanyLogo/CompanyLogo.tsx";
import Button from "../Button/Button.tsx";
import { useMedia } from 'use-media';
import Hamburger from 'hamburger-react'
import styles from "./Header.module.scss";


const Header = () => {
    const isMobile = useMedia({ maxWidth: 768 });
    const [isOpen, setOpen] = useState(false)

    const WhatsappButtonFunc = () =>{
        const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE;
        const message = encodeURIComponent("Dzień dobry, chciałbym zapytać o ofertę.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }

    return (
        <header>
            {isMobile ?
            <div className={styles.mobileWebsiteLayoutHeaderDiv}>
                <div className={styles.mobileWebsiteLayoutHeaderDivPart1}>
                    <Link to={'/'}><CompanyLogo className={styles.mobileWebsiteLayoutLogo} path={`src/assets/icons/gp-solutions-blue.png`}/></Link>
                    <div className={styles.menuIconDiv}>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={48}/>
                    </div>
                </div>
                <Button
                    onClick={WhatsappButtonFunc}
                    type={'button'}
                    className={styles.mobileWebsiteLayoutWhatsappButton}
                >
                    <div>
                        <img src='src/assets/icons/whatsapp-icon.png' alt="whatsapp-icon" />
                        <span>WhatsApp</span>
                    </div>
                </Button>
                {isOpen?<WebsiteNavHeader />:null}
            </div>:
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
                        <span>WhatsApp</span>
                    </div>
                </Button>
            </div>
            }
        </header>
    )
}

export default Header