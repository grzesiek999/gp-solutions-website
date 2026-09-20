import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import styles from "../HomePage/HomePage.module.scss";
import ServicesAutomationContent from "../../components/ServicesAutomationContent/ServicesAutomationContent.tsx";

const ServicesAutomationPageBannerContent =() => {
    const navigate = useNavigate();

    const contactButtonIconPath = '/icons/white-phone-icon.png';

    return (
        <>
            <h1>Automatyzacja</h1>
            <h2>Automatyzujemy powtarzalne procesy, dzięki czemu oszczędzasz czas i redukujesz koszty.</h2>
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

const ServicesAutomationPage = () => {
    return (
        <>
            <Helmet>
                <title>Automatyzacja GP IT Solutions</title>
                <meta
                    name="description"
                    content="Automatyzujemy powtarzalne procesy w firmach, pomagając oszczędzać czas, ograniczać koszty i usprawniać codzienną pracę."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/services/automation"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/automation_banner.webp")`}
                content={<ServicesAutomationPageBannerContent />}
            />
            <ServicesAutomationContent />
        </>
    )
}

export default ServicesAutomationPage