import {useMedia} from "use-media";

const WhyWorthListBigSpace = (
    <ul>
        <li>✓ &nbsp;&nbsp;&nbsp; Ochrona danych i systemów</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Minimalizacja ryzyka ataków</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Zgodność z najlepszymi praktykami</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Większe bezpieczeństwo firmy</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Wsparcie ekspertów</li>
    </ul>
)

const WhyWorthListSmallSpace = (
    <ul>
        <li>✓ &nbsp; Ochrona danych i systemów</li>
        <li>✓ &nbsp; Minimalizacja ryzyka ataków</li>
        <li>✓ &nbsp; Zgodność z najlepszymi praktykami</li>
        <li>✓ &nbsp; Większe bezpieczeństwo firmy</li>
        <li>✓ &nbsp; Wsparcie ekspertów</li>
    </ul>
)

const WebsitesOffersList = () => {

    const icons = {
        work_station: 'work_station',
        secure: 'secure',
        audyt: 'audyt',
        education: 'education',
    }

    return (
        <ul>
            <li>
                <img
                    src={`/icons/${icons.work_station}.png`}
                    alt={`${icons.work_station} icon error`}
                />
                <div>
                    <span>Zabezpieczanie stacji roboczych</span>
                    <p>Antywirus, polityki bezpieczeństwa.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.secure}.png`}
                    alt={`${icons.secure} icon error`}
                />
                <div>
                    <span>Ochrona sieci i serwerów</span>
                    <p>Firewall, monitoring, kontrola dostępu.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.audyt}.png`}
                    alt={`${icons.audyt} icon error`}
                />
                <div>
                    <span>Audyt bezpieczeństwa</span>
                    <p>Analiza i rekomendacje.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.education}.png`}
                    alt={`${icons.education} icon error`}
                />
                <div>
                    <span>Szkolenia i świadomość użytkowników</span>
                    <p>Praktyczna wiedza dla Twojego zespołu.</p>
                </div>
            </li>
        </ul>
    )
}

const ServicesCybersecurityContent = () => {

    const isMobile = useMedia({ maxWidth: 1600 });

    return (
        <div className='servicesKindContentDiv'>
            <div className='servicesKindContentRowDiv'>
                <div className='what-offer-div'>
                    <span className='servicesKindSpan'>Co oferujemy?</span>
                    <WebsitesOffersList />
                </div>
                <div className='why-worth-div'>
                    <span className='servicesKindSpan'>Korzyści</span>
                    {isMobile ? WhyWorthListSmallSpace :WhyWorthListBigSpace}
                </div>
            </div>
            <div className='servicesKindContentLastDiv'>
                <span className='servicesKindSpan'>Proces współpracy</span>
                <ul>
                    <li>
                        <span className='circle-span-number'>1</span>
                        <p>Audyt i analiza</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>2</span>
                        <p>Rekomendacje</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>3</span>
                        <p>Wdrożenie zabezpieczeń</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>4</span>
                        <p>Monitoring i wsparcie</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesCybersecurityContent;