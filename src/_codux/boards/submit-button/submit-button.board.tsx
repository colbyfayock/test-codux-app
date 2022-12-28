import { createBoard } from '@wixc3/react-board';
import { SubmitButton } from '../../../components/submit-button/submit-button';

export default createBoard({
    name: 'SubmitButton',
    Board: () => <SubmitButton>
        Submit
    </SubmitButton>,
    environmentProps: {}
});
