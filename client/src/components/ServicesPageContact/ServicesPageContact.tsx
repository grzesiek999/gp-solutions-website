import styles from './ServicesPageContact.module.scss';
import Button from "../Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTER_PATH} from "../../routing/RouterPath.tsx";


const ServicesPageContact = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.servicesPageContactDiv}>
            <img src='/src/assets/icons/services-contact-icon.png' alt='services contact icon error' />
            <div className={styles.servicesPageContactInfoDiv}>
                <span>Nie widzisz usługi, której potrzebujesz?</span>
                <p>Skontaktuj się z nami - na pewno znajdziemy rozwiązanie.</p>
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