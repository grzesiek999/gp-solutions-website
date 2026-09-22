

const WebsitesOffersList = () => {

    const icons = {
        external_systems: 'external_systems',
        api: 'api',
        synchronization: 'synchronization',
        integrations: 'integrations',
    }

    return (
        <ul>
            <li>
                <img
                    src={`/icons/${icons.external_systems}.png`}
                    alt={`${icons.external_systems} icon error`}
                />
                <div>
                    <span>Systemy zewnętrzne</span>
                    <p>CRM, ERP, księgowość, płatności.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.api}.png`}
                    alt={`${icons.api} icon error`}
                />
                <div>
                    <span>API i wymiana danych</span>
                    <p>Bezpieczna niezawodna komunikacja.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.synchronization}.png`}
                    alt={`${icons.synchronization} icon error`}
                />
                <div>
                    <span>Synchronizacja danych</span>
                    <p>Automatyczna wymiana informacji.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.integrations}.png`}
                    alt={`${icons.integrations} icon error`}
                />
                <div>
                    <span>Indywidualne integracje</span>
                    <p>Dopasowane do specyfiki Twojej firmy.</p>
                </div>
            </li>
        </ul>
    )
}

const ServicesIntegrationContent = () => {

    return (
        <div className='servicesKindContentDiv'>
            <div className='servicesKindContentRowDiv'>
                <div className='what-offer-div'>
                    <span className='servicesKindSpan'>Co integrujemy?</span>
                    <WebsitesOffersList />
                </div>
                <div className='why-worth-div'>
                    <span className='servicesKindSpan'>Korzyści</span>
                    <ul>
                        <li>✓ &nbsp;&nbsp;&nbsp; Pełna spójność danych</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Automatyzacja przepływu informacji</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Oszczędność czasu</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Eliminacja ręcznej pracy</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Bezpieczne połączenia</li>
                    </ul>
                </div>
            </div>
            <div className='servicesKindContentLastDiv'>
                <span className='servicesKindSpan'>Proces integracji</span>
                <ul>
                    <li>
                        <span className='circle-span-number'>1</span>
                        <p>Analiza potrzeb</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>2</span>
                        <p>Projekt rozwiązania</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>3</span>
                        <p>Wdrożenie</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>4</span>
                        <p>Testy i  wsparcie</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesIntegrationContent;