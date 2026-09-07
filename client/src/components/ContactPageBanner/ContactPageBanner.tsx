
const ContactPageBanner = () => {

    const backgroundImgPath = `url("/images/contact_page_photo.webp")`

    return (
        <div className='pageBanner' style={{backgroundImage: backgroundImgPath}}>
            <div className='pageBannerContent'>
                <h1>Kontakt</h1>
                <h6>Skontaktuj się z nami - chętnie odpowiemy na Twoje pytania.</h6>
            </div>
        </div>
    )
}

export default ContactPageBanner;