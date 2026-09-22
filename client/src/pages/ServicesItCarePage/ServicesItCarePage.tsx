import {Helmet} from "react-helmet-async";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import styles from "../HomePage/HomePage.module.scss";
import Banner from "../../components/Banner/Banner.tsx";
import ServicesItcareContent from "../../components/ServicesItcareContent/ServicesItcareContent.tsx";

const ServicesItCarePageBannerContent =() => {
    const navigate = useNavigate();

    const contactButtonIconPath = '/icons/white-phone-icon.png';

    return (
        <>
            <h1>Opieka IT</h1>
            <h2>Kompleksowe wsparcie informatyczne, dzięki któremu Twoja firma działa bez zakłóceń.</h2>
            <Button
                className={styles.homePageBannerContactButton}
                type={"button"}
                onClick={() => navigate('/contact')}
            >
                <div className={styles.homePageBannerButtonDiv}>
                    <img
                        src={contactButtonIconPath}
                        alt='white phone icon error'
                        className={styles.homePageBannerButtonImg}
                    />
                    <span className={styles.homePageBannerButtonsSpan}>Skontaktuj się</span>
                </div>
            </Button>
        </>
    )
}

const ServicesItCarePage = () => {
    return (
        <>
            <Helmet>
                <title>Usługi GP IT Solutions</title>
                <meta
                    name="description"
                    content="Kompleksowa opieka IT dla firm. Zapewniamy bieżące wsparcie informatyczne, pomoc techniczną i sprawne działanie systemów oraz urządzeń."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/services/itcare"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/itcare_banner.webp")`}
                content={<ServicesItCarePageBannerContent />}
            />
            <ServicesItcareContent />
        </>
    )
}

export default ServicesItCarePage