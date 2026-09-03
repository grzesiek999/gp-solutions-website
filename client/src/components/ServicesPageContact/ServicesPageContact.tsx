import styles from './ServicesPageContact.module.scss';
import Button from "../Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTER_PATH} from "../../routing/RouterPath.tsx";
import {useMedia} from "use-media";


const ServicesPageContact = () => {

    const navigate = useNavigate();
    const isMini = useMedia({ maxWidth: 369 });

    const contactIconPath = '/icons/services-contact-icon.png'

    return (
        <div className={styles.servicesPageContactDiv}>
            <img src={contactIconPath} alt='services contact icon error' />
            <div className={styles.servicesPageContactInfoDiv}>
                <span>Nie widzisz usługi, której potrzebujesz?</span>
                {!isMini&&<p>Skontaktuj się z nami - na pewno znajdziemy rozwiązanie.</p>}
            </div>
            <Button
                type={'button'}
                onClick={() => {navigate(ROUTER_PATH.CONTACT)}}
                className={styles.servicesPageContactInfoButton}
            >Skontaktuj się</Button>
        </div>
    )
}

export default ServicesPageContact