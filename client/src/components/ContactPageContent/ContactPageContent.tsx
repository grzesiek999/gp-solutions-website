import styles from './ContactPageContent.module.scss';
import ContactPageForm from "../ContactPageForm/ContactPageForm.tsx";
import ContactDataList from "../ContactDataList/ContactDataList.tsx";


const ContactPageContent = () => {
    return (
        <div className={styles.contactPageContentDiv}>
            <ContactPageForm />
            <ContactDataList
                containerClassName={styles.contactDataContainer}
                titleSpanClassName={styles.contactDataTitleSpan}
                dataSpanClassName={styles.contactDataSpan}
                imgClassName={styles.contactDataImg}
                workHoursLiDivClassName={styles.workHoursDiv}
            />
        </div>
    )
}

export default ContactPageContent