import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasMargin: {
            top: 0, right: 0, bottom: 0, left: 0
        }
    }
});
