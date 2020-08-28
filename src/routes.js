import Welcome from './components/welcome/Welcome';
import Chat from './components/chat/Chat';

export const routes = [
    {
        path: '/',
        component: Welcome
    },
    {
        path: '/room/:roomId',
        component: Chat
    },
];
