import { useState, SyntheticEvent } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { FormRow } from './components/form-row/form-row';
import { SubmitButton } from './components/submit-button/submit-button';
import { RiSendPlaneFill } from 'react-icons/ri';

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
    return 'value' in e && 'name' in e
}

function App() {
    const [submitted, setSubmitted] = useState(false);

    async function handleOnSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData: Record<string, string> = {};

        Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        await fetch('/.netlify/functions/mail', {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        setSubmitted(true);
    }

    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>Have a question? Fill out the form below and we&apos;ll get back to you as soon as we can.</p>
            <p className={styles.note}>All fields are required</p>
            <form className={styles.form} onSubmit={handleOnSubmit}>
                {!submitted && (
                    <>
                        <FormRow>
                            <Label>Name</Label>
                            <Input id={'name'} name={'name'} required={true} /></FormRow>
                        <FormRow>
                            <Label>Email</Label>
                            <Input name={'email'} required={true} /></FormRow>
                        <FormRow>
                            <Label>Message</Label>
                            <Input name={'message'} required={true} />
                        </FormRow>
                        <FormRow>
                            <SubmitButton>
                                <RiSendPlaneFill />
                                Submit</SubmitButton></FormRow>
                    </>
                )}
                {submitted && (
                    <>
                        <p className={styles.description}>Thank you!</p>
                    </>
                )}
            </form>
        </div>
    );
}

export default App;
