import styles from './ServicesList.module.scss'

const ServicesList = () => {

    const itCareIconPath= '/icons/it-care-icon.png'
    const cybersecurityIconPath= '/icons/cybersecurity-icon.png'
    const backupIconPath = '/icons/backup-icon.png'
    const educationIconPath = '/icons/education-icon.png'

    return (
        <ul>
            <li>
                <img src={itCareIconPath} alt='it-care-icon error' />
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
            </li>
            <li>
                <img src={cybersecurityIconPath} alt='cybersecurity icon error' />
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
            </li>
            <li>
                <img src={backupIconPath} alt='backup icon error' />
                <div className={styles.servicesListDiv}>
                    <span>Backup danych</span>
                    <p>Regularne kopie zapasowe to gwarancja ciągłości działania i ochrona przed utratą danych.</p>
                    <ul>
                        <li>✓ Backup lokalny i chmurowy</li>
                        <li>✓ Automatyczne harmonogramy</li>
                        <li>✓ Szybkie odtwarzanie danych</li>
                        <li>✓ Testowanie i monitoring backupów</li>
                    </ul>
                </div>
            </li>
            <li>
                <img src={educationIconPath} alt='education icon error' />
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
            </li>
        </ul>
    )
}

export default ServicesList;