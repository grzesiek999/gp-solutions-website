import WebsiteNav from "../WebsiteNav/WebsiteNav.tsx";

const Header = () => {
    return (
        <header>
            <div>
                <div className={``}>
                    <img src={`src/assets/icons/gp-solutions.png`}
                         alt="GP solutions icon error"
                         className={`gp-solution-icon`}
                    />
                </div>
                <WebsiteNav />
            </div>
        </header>
    )
}

export default Header