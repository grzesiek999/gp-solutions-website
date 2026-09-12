
const ServicesPageBanner = () => {

    const backgroundImgPath = `url("/images/services_page_photo.webp")`

    return (
        <div className='pageBanner' style={{backgroundImage: backgroundImgPath}}>
            <div className='pageBannerContent'>
                <h1>Nasze usługi</h1>
                <h6>Kompleksowa obsługa IT dopasowana do potrzeb Twojej firmy.</h6>
            </div>
        </div>
    )
}

export default ServicesPageBanner