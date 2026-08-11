import styles from './AboutUsPageBanner.module.scss';

const AboutUsPageBanner = () => {
    return (
        <div className={styles.aboutUsPageBannerDiv}>
            <div className={styles.aboutUsPageBannerContent}>
                <span>O nas</span>
                <p>Poznaj GP IT Solutions</p>
            </div>
        </div>
    )
}

export default AboutUsPageBanner