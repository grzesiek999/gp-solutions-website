import styles from "./HomePageContent.module.scss"
import HomePageContentThing from "../HomePageContentThing/HomePageContentThing.tsx";
import {useMedia} from "use-media";

const things1 = (
    <>
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
    </>
)

const things2 = (
    <>
        <HomePageContentThing
            img_name={'backup-icon'}
            title={'Backup danych'}
            content={'Regularne kopie zapasowe to pewność i spokój dla Twojej firmy.'}
        />
        <HomePageContentThing
            img_name={'const-it-care'}
            title={'Stała opieka IT'}
            content={'Zapewniamy stałe wsparcie i proaktywne dbanie o Twoje systemy.'}
        /></>
)

const things3 = (
    <>
        <HomePageContentThing
            img_name={'it-care-icon'}
            title={'Opieka IT'}
            content={'Kompleksowa obsługa informatyczna i helpdesk dla Twojej firmy.'}
            link={'/services'}
        />
        <HomePageContentThing
            img_name={'cybersecurity-icon'}
            title={'Cyberbezpieczeństwo'}
            content={'Zabezpieczamy Twoje środowisko IT przed współczesnymi zagrożeniami.'}
            link={'/services'}
        />
    </>
)

const things4 = (
    <>
        <HomePageContentThing
            img_name={'backup-icon'}
            title={'Backup danych'}
            content={'Automatyczne kopie zapasowe i odzyskiwanie danych w razie awarii.'}
            link={'/services'}
        />
        <HomePageContentThing
            img_name={'education-icon'}
            title={'Szkolenia'}
            content={'Szkolenia dla pracowników z zakresu cyberbezpieczeństwa i obsługi systemów.'}
            link={'/services'}
        />
    </>
)

const HomePageContent = () => {

    const isMobile = useMedia({
        minWidth: 501,
        maxWidth: 1279
    });

    return (
        <div className={styles.homePageContentMainDiv}>
            <div className={styles.homePageContentMainPart}>
                <span className={styles.homePageContentMainPartTitle}>Dlaczego warto nam zaufać?</span>
                <div className={styles.homePageContentMainPartThingsContainer}>
                    {isMobile ?
                        <>
                            <div className={styles.mobileHomePageContentMainPartThingsContainerDiv}>
                                {things1}
                            </div>
                            <div className={styles.mobileHomePageContentMainPartThingsContainerDiv}>
                                {things2}
                            </div>
                        </>:
                        <>
                            {things1}
                            {things2}
                        </>
                    }
                </div>
            </div>
            <div className={styles.homePageContentMainPart}>
                <span className={styles.homePageContentMainPartTitle}>Nasze usługi</span>
                <div className={styles.homePageContentMainPartThingsContainer}>
                    {isMobile ?
                        <>
                            <div className={styles.mobileHomePageContentMainPartThingsContainerDiv}>
                                {things3}
                            </div>
                            <div className={styles.mobileHomePageContentMainPartThingsContainerDiv}>
                                {things4}
                            </div>
                        </>:
                        <>
                            {things3}
                            {things4}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePageContent