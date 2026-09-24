

const HowWeWorkList = () => {

    const howWeWorkIconsPaths = {
        first: '/icons/how-we-work-1-icon.png',
        second: '/icons/how-we-work-2-icon.png',
        third: '/icons/how-we-work-3-icon.png',
        fourthd: '/icons/how-we-work-4-icon.png'
}

    return (
        <ul>
            <li>
                <div>
                    <img src={howWeWorkIconsPaths.first} alt='how-we-work-1-icon error' />
                </div>
                <div>
                    <span>Zrozumienie potrzeb</span>
                    <p>Poznajemy Twój biznes i potrzeby Twojej firmy.</p>
                </div>
            </li>
            <li>
                <div>
                    <img src={howWeWorkIconsPaths.second} alt='how-we-work-2-icon error' />
                </div>
                <div>
                    <span>Proaktywne działanie</span>
                    <p>Działamy zanim pojawi się problem.</p>
                </div>
            </li>
            <li>
                <div>
                    <img src={howWeWorkIconsPaths.third} alt='how-we-work-3-icon error' />
                </div>
                <div>
                    <span>Szybka reakcja</span>
                    <p>Jesteśmy wtedy, kiedy nas potrzebujesz.</p>
                </div>
            </li>
            <li>
                <div>
                    <img src={howWeWorkIconsPaths.fourthd} alt='how-we-work-4-icon error' />
                </div>
                <div>
                    <span>Długofalowa współpraca</span>
                    <p>Budujemy relacje oparte na zaufaniu i skuteczności.</p>
                </div>
            </li>
        </ul>
    )
}

export default HowWeWorkList