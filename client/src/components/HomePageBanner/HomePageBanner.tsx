import styles from "./HomePageBanner.module.scss"
import Button from "../Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {useMedia} from "use-media";

const HomePageBanner = () => {

    const navigate = useNavigate();
    const isMobile = useMedia({ maxWidth: 768 });

    const contactButtonIconPath = '/icons/white-phone-icon.png';
    const checkServicesButtonIconPath = '/icons/white-mail-icon.png';
    const backgroundImgPath = `url("/images/home_page_photo.webp")`

    return (
        <div className='pageBanner' style={{backgroundImage: backgroundImgPath}}>
            <div className='pageBannerContent'>
                <h1>Kompleksowa opieka IT dla firm</h1>
                {isMobile ?
                    <>
                        <h6>Bezpieczeństwo. Niezawodność. Wsparcie. <br/>Skup się na swoim biznesie - <br/> my zajmiemy się IT.</h6>
                    </>:
                    <h6>Bezpieczeństwo. Niezawodność. Wsparcie. <br /> Skup się na swoim biznesie - <br/> my zajmiemy się IT.</h6>
                }
                <div className={styles.homePageBannerButtonsDiv}>
                    <Button
                        className={styles.homePageBannerContactButton}
                        type={"button"}
                        onClick={()=> navigate('/contact')}
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
                    <Button
                        className={styles.homePageBannerCheckServicesButton}
                        type={"button"}
                        onClick={()=> navigate('/services')}
                    >
                        <div className={styles.homePageBannerButtonDiv}>
                            <img
                                src={checkServicesButtonIconPath}
                                alt='white mail icon error'
                                className={styles.homePageBannerButtonImg}
                            />
                            <span className={styles.homePageBannerButtonsSpan}>Sprawdź usługi</span>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomePageBanner