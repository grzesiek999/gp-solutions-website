import {Helmet} from "react-helmet-async";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import styles from "../HomePage/HomePage.module.scss";
import Banner from "../../components/Banner/Banner.tsx";

const ServicesIntegrationPageBannerContent =() => {
    const navigate = useNavigate();

    const contactButtonIconPath = '/icons/white-phone-icon.png';

    return (
        <>
            <h1>Integracje systemów</h1>
            <h6>Łączymy różne systemy i narzędzia w jedną spójną całość.</h6>
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

const ServicesIntegrationPage = () => {
    return (
        <>
            <Helmet>
                <title>Usługi GP IT Solutions</title>
                <meta
                    name="description"
                    content="Integrujemy systemy, aplikacje i narzędzia w firmach, tworząc spójne środowisko pracy i sprawny przepływ danych."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/services/integration"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/integration_banner.webp")`}
                content={<ServicesIntegrationPageBannerContent />}
            />
        </>
    )
}

export default ServicesIntegrationPage