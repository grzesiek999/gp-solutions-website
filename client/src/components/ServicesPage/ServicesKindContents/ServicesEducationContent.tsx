import {useMedia} from "use-media";

const WhyWorthListBigSpace = (
    <ul>
        <li>✓ &nbsp;&nbsp;&nbsp; Większa świadomość zagrożeń</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Mniejsze ryzyko błędów</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Efektywniejsza praca</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Dostosowanie do realnych potrzeb</li>
        <li>✓ &nbsp;&nbsp;&nbsp; Profesjonalne materiały i wsparcie</li>
    </ul>
)

const WhyWorthListSmallSpace = (
    <ul>
        <li>✓ &nbsp; Większa świadomość zagrożeń</li>
        <li>✓ &nbsp; Mniejsze ryzyko błędów</li>
        <li>✓ &nbsp; Efektywniejsza praca</li>
        <li>✓ &nbsp; Dostosowanie do realnych potrzeb</li>
        <li>✓ &nbsp; Profesjonalne materiały i wsparcie</li>
    </ul>
)

const WebsitesOffersList = () => {

    const icons = {
        secure: 'secure',
        tools: 'tools',
        computer: 'computer',
        training: 'training',
    }

    return (
        <ul>
            <li>
                <img
                    src={`/icons/${icons.secure}.png`}
                    alt={`${icons.secure} icon error`}
                />
                <div>
                    <span>Bezpieczeństwo IT</span>
                    <p>Świadomość zagrożeń i dobre praktyki.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.tools}.png`}
                    alt={`${icons.tools} icon error`}
                />
                <div>
                    <span>Obsługa narzędzi</span>
                    <p>Microsoft 365, Google Workspace i inne.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.computer}.png`}
                    alt={`${icons.computer} icon error`}
                />
                <div>
                    <span>Praca z komputerem</span>
                    <p>Efektywne wykorzystanie narzędzi.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.training}.png`}
                    alt={`${icons.training} icon error`}
                />
                <div>
                    <span>Szkolenia dopasowane</span>
                    <p>Program dostosowany do potrzeb firmy.</p>
                </div>
            </li>
        </ul>
    )
}

const ServicesEducationContent = () => {

    const isMobile = useMedia({ maxWidth: 1600 });

    return (
        <div className='servicesKindContentDiv'>
            <div className='servicesKindContentRowDiv'>
                <div className='what-offer-div'>
                    <span className='servicesKindSpan'>Zakres szkoleń</span>
                    <WebsitesOffersList />
                </div>
                <div className='why-worth-div'>
                    <span className='servicesKindSpan'>Korzyści dla Twojego zespołu</span>
                    {isMobile ? WhyWorthListSmallSpace :WhyWorthListBigSpace}
                </div>
            </div>
            <div className='servicesKindContentLastDiv'>
                <span className='servicesKindSpan'>Jak przebiega szkolenie?</span>
                <ul>
                    <li>
                        <span className='circle-span-number'>1</span>
                        <p>Analiza potrzeb</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>2</span>
                        <p>Przygotowanie programu</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>3</span>
                        <p>Realizacja szkolenia</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>4</span>
                        <p>Materiały i wsparcie</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesEducationContent;