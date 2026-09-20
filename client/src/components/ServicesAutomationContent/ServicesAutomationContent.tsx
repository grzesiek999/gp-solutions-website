

const WebsitesOffersList = () => {

    const icons = {
        bussiness_process: 'bussiness_process',
        data_flow: 'data_flow',
        raports: 'raports',
        indyvidual_solutions: 'indyvidual_solutions',
    }

    return (
        <ul>
            <li>
                <img
                    src={`/icons/${icons.bussiness_process}.png`}
                    alt={`${icons.bussiness_process} icon error`}
                />
                <div>
                    <span>Procesy biznesowe</span>
                    <p>Automatyzacja codziennych zadań.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.data_flow}.png`}
                    alt={`${icons.data_flow} icon error`}
                />
                <div>
                    <span>Przepływ danych</span>
                    <p>Integracja systemów i synchronizacja.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.raports}.png`}
                    alt={`${icons.raports} icon error`}
                />
                <div>
                    <span>Raporty i zestawienia</span>
                    <p>Automatyczne generowanie raportów.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.indyvidual_solutions}.png`}
                    alt={`${icons.indyvidual_solutions} icon error`}
                />
                <div>
                    <span>Indywidualne rozwiązania</span>
                    <p>Skrypty, boty i dedykowane narzędzia.</p>
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
                    <span className='servicesKindSpan'>Co automatyzujemy?</span>
                    <WebsitesOffersList />
                </div>
                <div className='why-worth-div'>
                    <span className='servicesKindSpan'>Dlaczego automatyzacja?</span>
                    <ul>
                        <li>✓ &nbsp;&nbsp;&nbsp; Oszczędność czasu</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Redukcja błędów</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Większa efektywność</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Skalowalność</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Więcej czasu na rozwój firmy</li>
                    </ul>
                </div>
            </div>
            <div className='servicesKindContentLastDiv'>
                <span className='servicesKindSpan'>Jak to działa?</span>
                <ul>
                    <li>
                        <span className='circle-span-number'>1</span>
                        <p>Analiza procesów</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>2</span>
                        <p>Dobór rozwiązań</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>3</span>
                        <p>Wdrożenie</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>4</span>
                        <p>Skalowanie i  wsparcie</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesWebsitesContent;