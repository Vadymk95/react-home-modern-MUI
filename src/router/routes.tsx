import { ReactElement } from 'react';
import { Feed, SearchFeed, VideoDetail, ChannelDetail } from '../components';

interface IRoutes {
  path: string;
  element: ReactElement;
  exact?: boolean;
}

export const routes: IRoutes[] = [
  { path: '/', element: <Feed />, exact: true },
  { path: '/video/:id', element: <VideoDetail /> },
  { path: '/channel/:id', element: <ChannelDetail /> },
  { path: '/search/:searchTerm', element: <SearchFeed /> },
];
