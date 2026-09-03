import Button from "../Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import styles from "./HomePageLastChunk.module.scss";

const HomePageLastChunk = () => {
    const navigate = useNavigate();

    const buttonContatIcon = '/icons/white-phone-icon.png'

    return (
        <div className={styles.homePageLastChunkDiv}>
            <div className={styles.homePageLastChunkPart1}>
                <span className={styles.homePageLastChunkPart1MainSpan}>Masz pytania? Chętnie pomożemy!</span>
                <span className={styles.homePageLastChunkPart1SecondarySpan}>Skontaktuj się z nami i zadbaj o bezpieczeństwo swojej firmy.</span>
            </div>
            <div className={styles.homePageLastChunkPart2}>
                <Button
                    className={styles.homePageLastChunkContactButton}
                    type={"button"}
                    onClick={()=> navigate('/contact')}
                >
                    <div>
                        <img src={buttonContatIcon} alt='white phone icon error' />
                        <span className={styles.homePageLastChunkContactButtonSpan}>Skontaktuj się</span>
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default HomePageLastChunk