import styles from './ContactPageForm.module.scss';
import Button from "../Button/Button.tsx";


const ContactPageForm = () => {

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.currentTarget.placeholder = '';
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>, pleaceholder: string) => {
        event.currentTarget.placeholder = pleaceholder;
    };

    const handleFocusText = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = '';
    };

    const handleBlurText = (event: React.FocusEvent<HTMLTextAreaElement>, pleaceholder: string) => {
        event.currentTarget.placeholder = pleaceholder;
    };

    return (
        <div className={styles.contactPageFormDiv}>
            <span className={styles.contactPageFormTitle}>Wyślij wiadomość</span>
            <form onSubmit={() => {}}>
                <label htmlFor={'full_name'}>Imię i nazwisko</label>
                <input
                    type='text'
                    id='full_name'
                    name='full_name'
                    placeholder="Wpisz imię i nazwisko"
                    onFocus={handleFocus}
                    onBlur={(event) => handleBlur(event,"Wpisz imię i nazwisko")}
                />
                <label htmlFor="company_name">Nazwa firmy</label>
                <input
                    type='text'
                    id='company_name'
                    name='company_name'
                    placeholder="Wpisz nazwę firmy"
                    onFocus={handleFocus}
                    onBlur={(event) => handleBlur(event,"Wpisz nazwę firmy")}
                />
                <label htmlFor="phone_number">Telefon</label>
                <input
                    type='tel'
                    id='phone_number'
                    name='phone_number'
                    pattern="(\+48)?[0-9]{9}"
                    placeholder="Wpisz numer telefonu"
                    onFocus={handleFocus}
                    onBlur={(event) => handleBlur(event,"Wpisz numer telefonu")}
                />
                <label htmlFor="email">Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    autoComplete='email'
                    required
                    placeholder="Wpisz adres e-mail"
                    onFocus={handleFocus}
                    onBlur={(event) => handleBlur(event,"Wpisz adres e-mail")}
                />
                <label htmlFor="message">Wiadomość</label>
                <textarea
                    name='message'
                    id='message'
                    required

                    placeholder="Napisz, w czym możemy pomóc..."
                    onFocus={handleFocusText}
                    onBlur={(event) => handleBlurText(event,"Napisz, w czym możemy pomóc...")}
                />
                <Button
                    onClick={()=>{}}
                    type={'submit'}
                    className={''}
                >
                    <span>Wyślij wiadomość</span>
                    <img
                        src={'/img/icons/icon.png'}
                        alt={''}
                        className={''}
                    />
                </Button>
            </form>
        </div>
    )
}

export default ContactPageForm