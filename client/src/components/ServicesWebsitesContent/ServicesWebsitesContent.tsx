

const WebsitesOffersList = () => {

    const icons = {
        bussiness_websites: 'bussiness_websites',
        company_websites: 'company_websites',
        seo_optimization: 'seo_optimization',
        technical_support: 'technical_support',
    }

    return (
        <ul>
            <li>
                <img
                    src={`/icons/${icons.bussiness_websites}.png`}
                    alt={`${icons.bussiness_websites} icon error`}
                />
                <div>
                    <span>Strony wizytówkowe</span>
                    <p>Nowoczesny design i pełna responsywność.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.company_websites}.png`}
                    alt={`${icons.company_websites} icon error`}
                />
                <div>
                    <span>Strony firmowe</span>
                    <p>Rozbudowane serwisy z CMS.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.seo_optimization}.png`}
                    alt={`${icons.seo_optimization} icon error`}
                />
                <div>
                    <span>Optymalizacja SEO</span>
                    <p>Lepsza widoczność w wyszukiwarkach.</p>
                </div>
            </li>
            <li>
                <img
                    src={`/icons/${icons.technical_support}.png`}
                    alt={`${icons.technical_support} icon error`}
                />
                <div>
                    <span>Wsparcie techniczne</span>
                    <p>Pomoc po wdrożeniu i rozwój strony.</p>
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