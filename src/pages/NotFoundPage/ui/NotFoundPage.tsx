import Page from '../../../components/Page/Page.tsx';
import { Text } from '../../../components/Text/Text.tsx';

const NotFoundPage = () => {
    return (
        <Page>
            <Text text={'Страница не найдена'} size={'L'} align={'center'} color={'inverted'}/>
        </Page>
    );
};

export default NotFoundPage;