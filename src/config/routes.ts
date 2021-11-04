import IRoute from '../interfaces/route';
import AboutPage from '../pages/about';
import HomePage from '../pages/home';
import NotFound from '../pages/notFound';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true,
    },
    {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
    {
        path: '/about/:number',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
    {
        path: '*',
        name: 'NotFound Page',
        component: NotFound,
        exact: true
    },
]

export default routes;