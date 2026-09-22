

const WebsitesOffersList = () => {

    const icons = {
        technical_support: 'technical_support',
        configuration: 'configuration',
        management: 'management',
        monitoring: 'monitoring',
    }

    return (
        <ul>
            <li>
                <img
                    src={`/icons/${icons.technical_support}.png`}
                    alt={`${icons.technical_support} icon error`}
                />
                <div>
                    <span>Pomoc techniczna</span>
                    <p>Szybkie rozwiązywanie problemów.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.configuration}.png`}
                    alt={`${icons.configuration} icon error`}
                />
                <div>
                    <span>Konfiguracja urządzeń</span>
                    <p>Komputery, sieci, drukarki i oprogramowanie.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.management}.png`}
                    alt={`${icons.management} icon error`}
                />
                <div>
                    <span>Zarządzanie infrastrukturą</span>
                    <p>Serwery, sieci, konta użytkowników.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.monitoring}.png`}
                    alt={`${icons.monitoring} icon error`}
                />
                <div>
                    <span>Proaktywne monitorowanie</span>
                    <p>Zapobieganie problemom zanim wystąpią.</p>
                </div>
            </li>
        </ul>
    )
}

const ServicesItcareContent = () => {

    return (
        <div className='servicesKindContentDiv'>
            <div className='servicesKindContentRowDiv'>
                <div className='what-offer-div'>
                    <span className='servicesKindSpan'>W ramach opieki zapewniamy:</span>
                    <WebsitesOffersList />
                </div>
                <div className='why-worth-div'>
                    <span className='servicesKindSpan'>Dlaczego warto?</span>
                    <ul>
                        <li>✓ &nbsp;&nbsp;&nbsp; Szybka reakcja</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Stałe wsparcie</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Bezpieczeństwo infrastruktury</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Optymalizacja kosztów</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Spójność i ciągłość działania</li>
                    </ul>
                </div>
            </div>
            <div className='servicesKindContentLastDiv'>
                <span className='servicesKindSpan'>Jak to działa?</span>
                <ul>
                    <li>
                        <span className='circle-span-number'>1</span>
                        <p>Poznajemy potrzeby</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>2</span>
                        <p>Ustalamy zakres</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>3</span>
                        <p>Świadczymy wsparcie</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>4</span>
                        <p>Rozwijamy rozwiązania</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesItcareContent;