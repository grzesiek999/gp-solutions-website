import styles from "./ServicesPageContent.module.scss"
import ServicesList from "../ServicesList/ServicesList.tsx";


const ServicesPageContent = () => {
    return (
        <div className={styles.servicesPageContentDiv}>
            <ServicesList />
        </div>
    )
}

export default ServicesPageContent