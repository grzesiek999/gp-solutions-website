import styles from './AboutUsPageStrengths.module.scss'

const AboutUsPageStrengths = () => {
    return (
        <div className={styles.aboutUsPageStrengthsDiv}>
            <ul>
                <li>
                    <img src='/src/assets/icons/smile-face-icon.png' alt='smile face icon error' />
                    <span>Zadowoleni klienci</span>
                </li>
                <li>
                    <img src='/src/assets/icons/clock-2-icon.png' alt='clock 2 icon error' />
                    <span>Szybka reakcja</span>
                </li>
                <li>
                    <img src='/src/assets/icons/experience-icon.png' alt='experience icon error' />
                    <span>Doświadczenie</span>
                </li>
            </ul>
        </div>
    )
}

export default AboutUsPageStrengths