import styles from './ServicesPageContact.module.scss';
import Button from "../Button/Button.tsx";


const ServicesPageContact = () => {

    return (
        <div className={styles.servicesPageContactDiv}>
            <img src='/src/assets/icons/services-contact-icon.png' alt='services contact icon error' />
            <div className={styles.servicesPageContactInfoDiv}>
                <span>Nie widzisz usługi, której potrzebujesz?</span>
                <p>Skontaktuj się z nami - na pewno znajdziemy rozwiązanie.</p>
            </div>
            <Button
                type={'button'}
                onClick={() => {}}
                className={styles.servicesPageContactInfoButton}
            >Skontaktuj się</Button>
        </div>
    )
}

export default ServicesPageContact