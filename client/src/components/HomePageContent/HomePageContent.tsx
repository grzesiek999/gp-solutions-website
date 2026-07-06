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
                        img_name={'quick-reaction-icon'}
                        title={'Szybka reakcja'}
                        content={'Reagujemy szybko i skutecznie - kiedy nas potrzebujesz.'}
                    />
                    <HomePageContentThing
                        img_name={'backup-icon'}
                        title={'Backup danych'}
                        content={'Regularne kopie zapasowe to pewność i spokój dla Twojej firmy.'}
                    />
                    <HomePageContentThing
                        img_name={''}
                        title={'Stała opieka IT'}
                        content={'Zapewniamy stałe wsparcie i proaktywne dbanie o Twoje systemy.'}
                    />
                </div>
            </div>
            <div className={styles.homePageContentMainPart}>
                <span className={styles.homePageContentMainPartTitle}>Nasze usługi</span>
                <div className={styles.homePageContentMainPartThingsContainer}>
                    <HomePageContentThing
                        img_name={'-icon'}
                        title={'Opieka IT'}
                        content={'Kompleksowa obsługa informatyczna i helpdesk dla Twojej firmy.'}
                        link={'/services'}
                    />
                    <HomePageContentThing
                        img_name={'-icon'}
                        title={'Cyberbezpieczeństwo'}
                        content={'Zabezpieczamy Twoje środowisko IT przed współczesnymi zagrożeniami.'}
                        link={'/services'}
                    />
                    <HomePageContentThing
                        img_name={'backup-icon'}
                        title={'Backup danych'}
                        content={'Automatyczne kopie zapasowe i odzyskiwanie danych w razie awarii.'}
                        link={'/services'}
                    />
                    <HomePageContentThing
                        img_name={'-icon'}
                        title={'Szkolenia'}
                        content={'Szkolenia dla pracowników z zakresu cyberbezpieczeństwa i obsługi systemów.'}
                        link={'/services'}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePageContent