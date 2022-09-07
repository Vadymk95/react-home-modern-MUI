import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const AppRouter = () => {
  const router = useRoutes(routes);
  return router;
};