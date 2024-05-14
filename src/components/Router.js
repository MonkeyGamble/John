import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import BlogPage from '../pages/BlogPage/BlogPage';
import WorksPage from '../pages/WorksPage/WorksPage';
import WorksDetailPage from '../pages/WorksPage/WorksDetailPage/WorksDetailPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Layout from './Layout';

export const router = createHashRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				component: <HomePage />,
			},
			{
				path: '/blog',
				component: <BlogPage />,
			},
			{
				path: '/works',
				component: <WorksPage />,
			},
			{
				path: '/works/:id',
				component: <WorksDetailPage />,
			},
			{
				path: '/contact',
				component: <ContactPage />,
			},
			{
				path: '*',
				component: <NotFoundPage />,
			},
		],
	},
]);
