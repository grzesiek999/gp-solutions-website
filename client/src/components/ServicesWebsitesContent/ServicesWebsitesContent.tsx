

const WebsitesOffersList = () => {
    return (
        <ul>
            <li>
                <img
                    src={`/icons/${img}.png`}
                    alt={`${img} icon error`}
                />
                <div>
                    <span>Strony wizytówkowe</span>
                    <p>Nowoczesny design i pełna responsywność.</p>
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
                    <span className='servicesKindSpan'>Dlaczego warto?</span>
                    <ul>
                        <li>✓ &nbsp;&nbsp;&nbsp; Nowoczesny wygląd</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Responsywność</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Szybkie działanie</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Optymalizacja SEO</li>
                        <li>✓ &nbsp;&nbsp;&nbsp; Indywidualne podejście</li>
                    </ul>
                </div>
            </div>
            <div className='servicesKindContentLastDiv'>
                <span className='servicesKindSpan'>Jak wygląda współpraca?</span>
                <ul>
                    <li>
                        <span className='circle-span-number'>1</span>
                        <p>Rozmowa i analiza</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>2</span>
                        <p>Projekt graficzny</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>3</span>
                        <p>Wdrożenie i testy</p>
                    </li>
                    <li>
                        <span className='circle-span-number'>4</span>
                        <p>Wsparcie i rozwój</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServicesWebsitesContent;