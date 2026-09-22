import styles from './ServicesList.module.scss'
import {ROUTER_PATH} from "../../../routing/RouterPath.tsx";
import {Link} from "react-router-dom";
import {useMedia} from "use-media";

const SeeMoreLink = ({path, isUnderImg}:{path: string, isUnderImg: boolean}) => {
    return (
        <>
            {isUnderImg ?
                <Link
                    to={path}
                    className={styles.seeMoreLink}
                >Zobacz szczegóły &rarr;</Link>
                :
                <Link
                    to={path}
                    className={styles.seeMoreLink}
                >Zobacz szczegóły &nbsp;&nbsp;&nbsp;&rarr;</Link>}
        </>
    )
}

const ServicesList = () => {

    const isUnderImg = useMedia({
        minWidth: 390,
        maxWidth: 1174
    });

    const iconPaths = {
        webDevelopment: '/icons/web-development-icon.png',
        customSoftware: '/icons/systems-icon.png',
        automation: '/icons/automation-icon.png',
        integration: '/icons/integration-icon.png',
        itCare: '/icons/it-care-icon.png',
        cybersecurity: '/icons/cybersecurity-icon.png',
        backup: '/icons/backup-icon.png',
        education: '/icons/education-icon.png',
    }

    return (
        <ul>
            <li>
                <div className={styles.seeMoreLinkDiv}>
                    <img src={iconPaths.webDevelopment} alt='web-development-icon error' />
                    {isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_WEBSITES} isUnderImg={isUnderImg} />}
                </div>
                <div className={styles.servicesListDiv}>
                    <span>Strony internetowe</span>
                    <p>Tworzymy nowoczesne strony internetowe, które przyciągają klientów i wspierają rozwój Twojego biznesu.</p>
                    <ul>
                        <li>✓ Strony wizytówkowe i firmowe</li>
                        <li>✓ Sklepy internetowe i platformy e-commerce</li>
                        <li>✓ Responsywny design dostosowany do urządzeń mobilnych</li>
                        <li>✓ Optymalizacja pod kątem SEO i szybkości działania</li>
                    </ul>
                </div>
                {!isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_WEBSITES} isUnderImg={isUnderImg} />}
            </li>
            <li>
                <div className={styles.seeMoreLinkDiv}>
                    <img src={iconPaths.customSoftware} alt='custom-software-icon error' />
                    {isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_SYSTEMS} isUnderImg={isUnderImg} />}
                </div>
                <div className={styles.servicesListDiv}>
                    <span>Dedykowane systemy</span>
                    <p>Projektujemy i wdrażamy systemy dopasowane do indywidualnych potrzeb Twojej firmy.</p>
                    <ul>
                        <li>✓ Aplikacje webowe szyte na miarę</li>
                        <li>✓ Systemy do zarządzania firmą</li>
                        <li>✓ Panele administracyjne i klienckie</li>
                        <li>✓ Wsparcie i rozwój po wdrożeniu</li>
                    </ul>
                </div>
                {!isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_SYSTEMS} isUnderImg={isUnderImg} />}
            </li>
            <li>
                <div className={styles.seeMoreLinkDiv}>
                    <img src={iconPaths.automation} alt='automation-icon error' />
                    {isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_AUTOMATION} isUnderImg={isUnderImg} />}
                </div>
                <div className={styles.servicesListDiv}>
                    <span>Automatyzacja</span>
                    <p>Automatyzujemy powtarzalne procesy, oszczędzając czas i redukując koszty w Twojej firmie.</p>
                    <ul>
                        <li>✓ Automatyzacja procesów biznesowych</li>
                        <li>✓ Integracja narzędzi i przepływów pracy</li>
                        <li>✓ Automatyczne raportowanie i powiadomienia</li>
                        <li>✓ Skrypty i boty usprawniające codzienną pracę</li>
                    </ul>
                </div>
                {!isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_AUTOMATION} isUnderImg={isUnderImg} />}
            </li>
            <li>
                <div className={styles.seeMoreLinkDiv}>
                    <img src={iconPaths.integration} alt='integration-icon' />
                    {isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_INTEGRATION} isUnderImg={isUnderImg} />}
                </div>
                <div className={styles.servicesListDiv}>
                    <span>Integracje systemów</span>
                    <p>Łączymy różne systemy i narzędzia w jedną spójną, sprawnie działającą całość.</p>
                    <ul>
                        <li>✓ Integracja z systemami zewnętrznymi</li>
                        <li>✓ Łączenie CRM, ERP i platform e-commerce</li>
                        <li>✓ Synchronizacja danych między systemami</li>
                        <li>✓ Wsparcie przy migracji i wdrożeniu</li>
                    </ul>
                </div>
                {!isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_INTEGRATION} isUnderImg={isUnderImg} />}
            </li>
            <li>
                <div className={styles.seeMoreLinkDiv}>
                    <img src={iconPaths.itCare} alt='it-care-icon error' />
                    {isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_ITCARE} isUnderImg={isUnderImg} />}
                </div>
                <div className={styles.servicesListDiv}>
                    <span>Opieka IT</span>
                    <p>Zapewniamy bierzące wsparcie dla użytkowników oraz zarządzanie infrastrukturą IT w twojej firmie.</p>
                    <ul>
                        <li>✓ Helpdesk i wsparcie użytkowników</li>
                        <li>✓ Zarządzanie komputerami i siecią</li>
                        <li>✓ Microsoft 365 i Google Workspace</li>
                        <li>✓ Monitoring i proaktywne działanie</li>
                    </ul>
                </div>
                {!isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_ITCARE} isUnderImg={isUnderImg} />}
            </li>
            <li>
                <div className={styles.seeMoreLinkDiv}>
                    <img src={iconPaths.cybersecurity} alt='cybersecurity icon error' />
                    {isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_CYBERSECURITY} isUnderImg={isUnderImg} />}
                </div>
                    <div className={styles.servicesListDiv}>
                    <span>Cyberbezpieczeństwo</span>
                    <p>Chronimy Twoją firmę przed zagrożeniami z internetu i pomagamy budować bezpieczne środowisko pracy.</p>
                    <ul>
                        <li>✓ Zabezpieczenia stacji roboczych i serwerów</li>
                        <li>✓ Ochrona przed phishingiem i malware</li>
                        <li>✓ Konfiguracja zapór sieciowych</li>
                        <li>✓ Audyty bezpieczeństwa i doradztwo</li>
                    </ul>
                </div>
                {!isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_CYBERSECURITY} isUnderImg={isUnderImg} />}
            </li>
            <li>
                <div className={styles.seeMoreLinkDiv}>
                    <img src={iconPaths.backup} alt='backup icon error' />
                    {isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_BACKUPS} isUnderImg={isUnderImg} />}
                </div>
                <div className={styles.servicesListDiv}>
                    <span>Ochrona danych</span>
                    <p>Regularne kopie zapasowe to gwarancja ciągłości działania i ochrona przed utratą danych.</p>
                    <ul>
                        <li>✓ Backup lokalny i chmurowy</li>
                        <li>✓ Automatyczne harmonogramy</li>
                        <li>✓ Szybkie odtwarzanie danych</li>
                        <li>✓ Testowanie i monitoring backupów</li>
                    </ul>
                </div>
                {!isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_BACKUPS} isUnderImg={isUnderImg} />}
            </li>
            <li>
                <div className={styles.seeMoreLinkDiv}>
                    <img src={iconPaths.education} alt='education icon error' />
                    {isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_EDUCATION} isUnderImg={isUnderImg} />}
                </div>
                    <div className={styles.servicesListDiv}>
                    <span>Szkolenia pracowników</span>
                    <p>Podnosimy świadomość i kompetencje Twojego zespołu w zakresie IT i cyberbezpieczeństwa.</p>
                    <ul>
                        <li>✓ Bezpieczna praca z komputerem</li>
                        <li>✓ Rozpoznawanie phishingu i zagrożeń</li>
                        <li>✓ Obsługa Microsoft 365</li>
                        <li>✓ Szkolenia dopasowane do Twojej firmy</li>
                    </ul>
                </div>
                {!isUnderImg && <SeeMoreLink path={ROUTER_PATH.SERVICES_EDUCATION} isUnderImg={isUnderImg} />}
            </li>
        </ul>
    )
}

export default ServicesList;