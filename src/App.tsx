
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { FormRow } from './components/form-row/form-row';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>Have a question? Fill out the form below and we&apos;ll get back to you as soon as we can.</p>
            <form className={styles.form}>
                <FormRow>
                    <Label>Name</Label>
                    <Input id={'name'} /></FormRow>
                <FormRow>
                    <Label>Email</Label>
                    <Input /></FormRow>
                <FormRow>
                    <Label>Message</Label>
                    <Input />
                </FormRow>
                <FormRow>
                    <SubmitButton>
                        Submit</SubmitButton></FormRow></form>
        </div>
    );
}

export default App;
