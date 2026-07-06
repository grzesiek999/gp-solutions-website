import styles from './HomePageContentThing.module.scss';

type HomePageContentThingProps = {
    img_name: string;
    title: string;
    content: string;
}

const HomePageContentThing = ({img_name, title, content} : HomePageContentThingProps) => {
    return (
        <div className={styles.homePageContentThingDiv}>
            <img
                src={`src/assets/icons/${img_name}.png`}
                alt={`${img_name} error`}
            />
            <span>{title}</span>
            <p>{content}</p>
        </div>
    )
}

export default HomePageContentThing