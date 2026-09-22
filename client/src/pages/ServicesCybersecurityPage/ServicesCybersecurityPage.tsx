import {Helmet} from "react-helmet-async";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import styles from "../HomePage/HomePage.module.scss";
import Banner from "../../components/Banner/Banner.tsx";
import ServicesCybersecurityContent
    from "../../components/ServicesCybersecurityContent/ServicesCybersecurityContent.tsx";

const ServicesCybersecurityPageBannerContent =() => {
    const navigate = useNavigate();

    const contactButtonIconPath = '/icons/white-phone-icon.png';

    return (
        <>
            <h1>Cyberbezpieczeństwo</h1>
            <h2>Chronimy Twoją firmę przed zagrożeniami i zapewniamy bezpieczeństwo danych.</h2>
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

const ServicesCybersecurityPage = () => {
    return (
        <>
            <Helmet>
                <title>Usługi GP IT Solutions</title>
                <meta
                    name="description"
                    content="Cyberbezpieczeństwo dla firm. Chronimy dane, systemy i infrastrukturę przed zagrożeniami oraz pomagamy zwiększyć bezpieczeństwo całej organizacji."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/services/cybersecurity"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/cybersecurity_banner.webp")`}
                content={<ServicesCybersecurityPageBannerContent />}
            />
            <ServicesCybersecurityContent />
        </>
    )
}

export default ServicesCybersecurityPage