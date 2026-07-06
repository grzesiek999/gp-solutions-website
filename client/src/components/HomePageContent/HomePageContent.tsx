import styles from "./HomePageContent.module.scss"
import HomePageContentThing from "../HomePageContentThing/HomePageContentThing.tsx";

const HomePageContent = () => {
    return (
        <div className={styles.homePageContentMainDiv}>
            <div className={styles.homePageContentMainPart}>
                <span className={styles.homePageContentMainPartTitle}>Dlaczego warto nam zaufać?</span>
                <div className={styles.homePageContentMainPartThingsContainer}>
                    <HomePageContentThing
                        img_name={'security-icon'}
                        title={'Bezpieczeństwo'}
                        content={'Chronimy Twoje dane i infrastrukturę przed zagrożeniami.'}
                    />
                    <HomePageContentThing
                        img_name={'security-icon'}
                        title={'Szybka reakcja'}
                        content={'Reagujemy szybko i skutecznie - kiedy nas potrzebujesz.'}
                    />
                    <HomePageContentThing
                        img_name={'security-icon'}
                        title={'Backup danych'}
                        content={'Regularne kopie zapasowe to pewność i spokój dla Twojej firmy.'}
                    />
                    <HomePageContentThing
                        img_name={'security-icon'}
                        title={'Stała opieka IT'}
                        content={'Zapewniamy stałe wsparcie i proaktywne dbanie o Twoje systemy.'}
                    />
                </div>
            </div>
            <div className={styles.homePageContentMainPart}>
                <span className={styles.homePageContentMainPartTitle}>Nasze usługi</span>
                <div className={styles.homePageContentMainPartThingsContainer}>

                </div>
            </div>
        </div>
    )
}

export default HomePageContent