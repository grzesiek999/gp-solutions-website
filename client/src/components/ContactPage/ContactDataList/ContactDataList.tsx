
type ContactDataListProps = {
    containerClassName?: string;
    titleSpanClassName?: string;
    dataSpanClassName?: string;
    imgClassName?: string;
    workHoursLiDivClassName?: string;
}

const ContactDataList = ({
                             containerClassName,
                             titleSpanClassName,
                             dataSpanClassName,
                             imgClassName,
                             workHoursLiDivClassName,
}: ContactDataListProps) => {

    const phoneIconPath = '/icons/blue-phone-icon2.png'
    const mailIconPath = '/icons/blue-email-icon2.png'
    const pineappleIconPath = '/icons/pineapple-icon2.png'
    const clockIconPath = '/icons/clock-icon.png'

    return (
        <div className={containerClassName}>
            <span className={titleSpanClassName}>Dane kontaktowe</span>
            <ul>
                <li>
                    <img
                        src={phoneIconPath}
                        alt={'phone icon error'}
                        className={imgClassName}
                    />
                    <span className={dataSpanClassName}>+48 608 158 611</span>
                </li>
                <li>
                    <img
                        src={mailIconPath}
                        alt={'mail icon error'}
                        className={imgClassName}
                    />
                    <span className={dataSpanClassName}>grzegorz.pasich@o2.pl</span>
                </li>
                <li>
                    <img
                        src={pineappleIconPath}
                        alt={'pineapple icon error'}
                        className={imgClassName}
                    />
                    <span className={dataSpanClassName}>Dębowa 10, 32-340 Wolbrom</span>
                </li>
                {workHoursLiDivClassName &&
                    <li>
                        <img
                            src={clockIconPath}
                            alt={'clock icon error'}
                            className={imgClassName}
                        />
                        <div className={workHoursLiDivClassName}>
                            <span className={dataSpanClassName}>Godziny pracy</span>
                            <p>Poniedziałek - Piątek</p>
                            <p>8:00 - 20:00</p>
                            <p>Sobota - Niedziela</p>
                            <p>9:00 - 16:00</p>
                        </div>
                    </li>
                }
            </ul>
        </div>
    )
}

export default ContactDataList