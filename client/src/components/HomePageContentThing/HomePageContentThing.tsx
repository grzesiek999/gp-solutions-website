import styles from './HomePageContentThing.module.scss';
import {Link} from "react-router-dom";

type HomePageContentThingProps = {
    img_name: string;
    title: string;
    content: string;
    link?: string;
}

const HomePageContentThing = ({img_name, title, content, link} : HomePageContentThingProps) => {
    return (
        <div className={styles.homePageContentThingDiv}>
            <img
                src={`src/assets/icons/${img_name}.png`}
                alt={`${img_name} error`}
            />
            <span>{title}</span>
            <p>{content}</p>
            {link && <Link to={link}>Dowiedz się więcej &rarr;</Link> }
        </div>
    )
}

export default HomePageContentThing