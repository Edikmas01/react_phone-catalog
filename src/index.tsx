import { createRoot } from 'react-dom/client';
import './styles/main.scss';
// import { App } from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './modules/components/Layout/Layout';
import { HomePage } from './modules/pages/HomePage';
import { PhonesPage } from './modules/pages/PhonesPage';
import { TabletsPage } from './modules/pages/TabletsPage';
import { AccessoriesPage } from './modules/pages/AccessoriesPage';
import { ProductDetailsPage } from './modules/pages/ProductDetailsPage/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'phones',
        children: [
          {
            index: true,
            element: <PhonesPage />,
          },
          {
            path: ':productId',
            element: <ProductDetailsPage />,
          },
        ],
      },
      {
        path: 'tablets',
        element: <TabletsPage />,
      },
      {
        path: 'accessories',
        element: <AccessoriesPage />,
      },
    ],
  },
  {
    path: '/test',
    element: <div>Hello world</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { App } from './App';
// // import './index.scss';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
