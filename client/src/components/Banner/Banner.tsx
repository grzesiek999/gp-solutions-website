import type {ReactNode} from "react";

type BannerProps = {
    backgroundImgPath: string;
    content: ReactNode;
}

const Banner = ({backgroundImgPath, content} : BannerProps) => {

    return (
        <div className='pageBanner' style={{backgroundImage: backgroundImgPath}}>
            <div className='pageBannerContent'>
                {content}
            </div>
        </div>
    )
}

export default Banner