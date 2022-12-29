import { SyntheticEvent } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { FormRow } from './components/form-row/form-row';
import { SubmitButton } from './components/submit-button/submit-button';
import { RiSendPlaneFill } from 'react-icons/ri';

function App() {
    async function handleOnSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = {};

        // @ts-ignore
        Array.from(e.currentTarget.elements).forEach((field: HTMLInputElement) => {
            if (!field.name) return;
            // @ts-ignore
            formData[field.name] = field.value;
        });

        console.log('formData', formData)

        await fetch('/.netlify/functions/mail', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
    }
    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>Have a question? Fill out the form below and we&apos;ll get back to you as soon as we can.</p>
            <form className={styles.form} onSubmit={handleOnSubmit}>
                <FormRow>
                    <Label>Name</Label>
                    <Input id={'name'} name={'name'} /></FormRow>
                <FormRow>
                    <Label>Email</Label>
                    <Input name={'email'} /></FormRow>
                <FormRow>
                    <Label>Message</Label>
                    <Input name={'message'} />
                </FormRow>
                <FormRow>
                    <SubmitButton>
                        <RiSendPlaneFill />
                        Submit</SubmitButton></FormRow></form>
        </div>
    );
}

export default App;
