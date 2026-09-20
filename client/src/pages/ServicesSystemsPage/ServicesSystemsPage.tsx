import {Helmet} from "react-helmet-async";
import Banner from "../../components/Banner/Banner.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import styles from "../HomePage/HomePage.module.scss";
import ServicesSystemsContent from "../../components/ServicesSystemsContent/ServicesSystemsContent.tsx";

const ServicesSystemsPageBannerContent =() => {
    const navigate = useNavigate();

    const contactButtonIconPath = '/icons/white-phone-icon.png';

    return (
        <>
            <h1>Dedykowane systemy</h1>
            <h2>Indywidualne rozwiązania dopasowane do procesów w Twojej firmie.</h2>
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

const ServicesSystemsPage = () => {
    return (
        <>
            <Helmet>
                <title>Usługi GP IT Solutions</title>
                <meta
                    name="description"
                    content="Tworzymy dedykowane systemy i aplikacje dla firm, dopasowane do indywidualnych procesów, potrzeb i sposobu działania Twojego biznesu."
                />
                <link
                    rel="canonical"
                    href="https://gpitsolutions.pl/services/softwares"
                />
            </Helmet>
            <Banner
                backgroundImgPath={`url("/images/systems_banner.webp")`}
                content={<ServicesSystemsPageBannerContent />}
            />
            <ServicesSystemsContent />
        </>
    )
}

export default ServicesSystemsPage