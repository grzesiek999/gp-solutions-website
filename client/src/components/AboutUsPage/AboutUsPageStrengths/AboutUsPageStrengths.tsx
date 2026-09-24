import styles from './AboutUsPageStrengths.module.scss'

const AboutUsPageStrengths = () => {

    const iconPaths = {
        smile: '/icons/smile-face-icon.png',
        clock: '/icons/clock-2-icon.png',
        experience: '/icons/experience-icon.png'
    }

    return (
        <div className={styles.aboutUsPageStrengthsDiv}>
            <ul>
                <li>
                    <img src={iconPaths.smile} alt='smile face icon error' />
                    <span>Zadowoleni klienci</span>
                </li>
                <li>
                    <img src={iconPaths.clock} alt='clock 2 icon error' />
                    <span>Szybka reakcja</span>
                </li>
                <li>
                    <img src={iconPaths.experience} alt='experience icon error' />
                    <span>Doświadczenie</span>
                </li>
            </ul>
        </div>
    )
}

export default AboutUsPageStrengths