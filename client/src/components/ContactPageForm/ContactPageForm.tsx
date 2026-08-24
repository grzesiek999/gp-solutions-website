import {useState} from "react";
import styles from './ContactPageForm.module.scss';
import Button from "../Button/Button.tsx";


const ContactPageForm = () => {

    const [formData, setFormData] = useState({
        full_name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.currentTarget.placeholder = '';
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, pleaceholder: string) => {
        event.currentTarget.placeholder = pleaceholder;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("sending")

        try {
            const response = await fetch('http://localhost:8080/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Request failed.');

            setStatus("success");
            setFormData({ full_name: '', company: '', phone: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    return (
        <div className={styles.contactPageFormDiv}>
            <span className={styles.contactPageFormTitle}>Wyślij wiadomość</span>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'full_name'}>Imię i nazwisko</label>
                <input
                    type='text'
                    id='full_name'
                    name='full_name'
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Wpisz imię i nazwisko"
                    onFocus={handleFocus}
                    onBlur={(event) => handleBlur(event,"Wpisz imię i nazwisko")}
                />
                <label htmlFor="company">Nazwa firmy</label>
                <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Wpisz nazwę firmy"
                    onFocus={handleFocus}
                    onBlur={(event) => handleBlur(event,"Wpisz nazwę firmy")}
                />
                <label htmlFor="phone">Telefon</label>
                <input
                    type='tel'
                    id='phone'
                    name='phone'
                    pattern="(\+48)?[0-9]{9}"
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Wpisz adres e-mail"
                    onFocus={handleFocus}
                    onBlur={(event) => handleBlur(event,"Wpisz adres e-mail")}
                />
                <label htmlFor="message">Wiadomość</label>
                <textarea
                    name='message'
                    id='message'
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Napisz, w czym możemy pomóc..."
                    onFocus={handleFocus}
                    onBlur={(event) => handleBlur(event,"Napisz, w czym możemy pomóc...")}
                />
                <div className={styles.buttonDivInf}>
                    <Button
                        type={'submit'}
                    >
                        <span>{status === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość'}</span>
                        <img
                            src={'src/assets/icons/email-send-icon.png'}
                            alt={'email send icon error'}
                        />
                    </Button>
                    {status === 'success' && <p>Wiadomość wysłana pomyślnie!</p>}
                    {status === 'error' && <p>Coś poszło nie tak, spróbuj ponownie.</p>}
                </div>
            </form>
        </div>
    )
}

export default ContactPageForm