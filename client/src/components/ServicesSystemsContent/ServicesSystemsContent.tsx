

const WebsitesOffersList = () => {

    const icons = {
        web_apps: 'web_apps',
        manage_company: 'manage_company',
        external_integrations: 'external_integrations',
        groving_maintenace: 'groving_maintenace',
    }

    return (
        <ul>
            <li>
                <img
                    src={`/icons/${icons.web_apps}.png`}
                    alt={`${icons.web_apps} icon error`}
                />
                <div>
                    <span>Aplikacje webowe</span>
                    <p>Systemy dopasowane do Twoich potrzeb.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.manage_company}.png`}
                    alt={`${icons.manage_company} icon error`}
                />
                <div>
                    <span>Systemy do zarządzania firmą</span>
                    <p>CRM, ERP, panel administracyjny.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.external_integrations}.png`}
                    alt={`${icons.external_integrations} icon error`}
                />
                <div>
                    <span>Integracje z zewnętrznymi usługami</span>
                    <p>Łączenie z API i innymi systemami.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.groving_maintenace}.png`}
                    alt={`${icons.groving_maintenace} icon error`}
                />
                <div>
                    <span>Rozwój i utrzymanie</span>
                    <p>Stałe wsparcie i rozbudowa funkcjonalności.</p>
                </div>
            </li>
        </ul>
    )
}

const ServicesWebsitesContent = () => {

    return (
        <div className='servicesKindContentDiv'>
            <div className='servicesKindContentRowDiv'>
                <div className='what-offer-div'>
                    <span className='servicesKindSpan'>Co oferujemy?</span>
                    <WebsitesOffersList />
                </div>
                <div className='why-worth-div'>
                    <span className='servicesKindSpan'>Korzyści dla Twojej firmy</span>
                    <ul>
                        <li>✓ &nbsp;&nbsp;&nbsp; Automatyzacja procesów</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Większa efektywność</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Skalowalność rozwiązań</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Pełne dopasowanie do potrzeb</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Wsparcie techniczne</li>
                    </ul>
                </div>
            </div>
            <div className='servicesKindContentLastDiv'>
                <span className='servicesKindSpan'>Jak pracujemy?</span>
                <ul>
                    <li>
                        <span className='circle-span-number'>1</span>
                        <p>Analiza i  warsztaty</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>2</span>
                        <p>Projekt systemu</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>3</span>
                        <p>Wdrożenie</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>4</span>
                        <p>Rozwój i  wsparcie</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesWebsitesContent;