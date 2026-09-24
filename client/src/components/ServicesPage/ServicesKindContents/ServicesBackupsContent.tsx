import {useMedia} from "use-media";

const WhyWorthListBigSpace = (
    <ul>
        <li>✓ &nbsp;&nbsp;&nbsp; Ochrona przed utratą danych</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Ciągłość działania firmy</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Szybkość przywracania systemów</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Bezpieczne przechowywanie</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Spokój i pewność działania</li>
    </ul>
)

const WhyWorthListSmallSpace = (
    <ul>
        <li>✓ &nbsp; Ochrona przed utratą danych</li>
        <li>✓ &nbsp; Ciągłość działania firmy</li>
        <li>✓ &nbsp; Szybkość przywracania systemów</li>
        <li>✓ &nbsp; Bezpieczne przechowywanie</li>
        <li>✓ &nbsp; Spokój i pewność działania</li>
    </ul>
)

const WebsitesOffersList = () => {

    const icons = {
        backup: 'backup',
        cloud: 'cloud',
        data: 'data',
        tests: 'tests',
    }

    return (
        <ul>
            <li>
                <img
                    src={`/icons/${icons.backup}.png`}
                    alt={`${icons.backup} icon error`}
                />
                <div>
                    <span>Kopie zapasowe</span>
                    <p>Automatyczne, bezpieczne backupy.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.cloud}.png`}
                    alt={`${icons.cloud} icon error`}
                />
                <div>
                    <span>Przechowywanie w chmurze</span>
                    <p>Bezpieczne i skalowalne rozwiązania.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.data}.png`}
                    alt={`${icons.data} icon error`}
                />
                <div>
                    <span>Odzyskiwanie danych</span>
                    <p>Szybki powrót do działania po awarii.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.tests}.png`}
                    alt={`${icons.tests} icon error`}
                />
                <div>
                    <span>Testowanie i monitoring</span>
                    <p>Regularna weryfikacja poprawności backupów.</p>
                </div>
            </li>
        </ul>
    )
}

const ServicesBackupsContent = () => {

    const isMobile = useMedia({ maxWidth: 1600 });

    return (
        <div className='servicesKindContentDiv'>
            <div className='servicesKindContentRowDiv'>
                <div className='what-offer-div'>
                    <span className='servicesKindSpan'>Co oferujemy?</span>
                    <WebsitesOffersList />
                </div>
                <div className='why-worth-div'>
                    <span className='servicesKindSpan'>Dlaczego to ważne?</span>
                    {isMobile ? WhyWorthListSmallSpace :WhyWorthListBigSpace}
                </div>
            </div>
            <div className='servicesKindContentLastDiv'>
                <span className='servicesKindSpan'>Jak to działa?</span>
                <ul>
                    <li>
                        <span className='circle-span-number'>1</span>
                        <p>Analiza potrzeb</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>2</span>
                        <p>Wdrożenie backupów</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>3</span>
                        <p>Regularne testy</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>4</span>
                        <p>Wsparcie i monitoring</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesBackupsContent;