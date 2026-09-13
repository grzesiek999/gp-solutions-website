
const AboutUsPageBanner = () => {

    const backgroundImgPath = `url("/images/about_us_banner.webp")`

    return (
        <div className='pageBanner' style={{backgroundImage: backgroundImgPath}}>
            <div className='pageBannerContent'>
                <h1>O nas</h1>
                <h6>Poznaj GP IT Solutions</h6>
            </div>
        </div>
    )
}

export default AboutUsPageBanner