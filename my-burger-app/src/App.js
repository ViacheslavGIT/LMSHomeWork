import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
} from 'react-router-dom';

import { Header, Content } from './components/index';
import { Contacts, FAQ, Orders } from './pages';
import { loader as loadContacts } from './pages/Contacts';

import './App.css';
import './styles/index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<Content />} />
      <Route path='contacts' element={<Contacts />} loader={loadContacts} />
      <Route path='faq' element={<FAQ />} />
      <Route path='orders' element={<Orders />} />
      <Route path='*' element={<NoMatch />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}
