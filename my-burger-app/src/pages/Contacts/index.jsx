import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';

import { getContacts } from '../../api';
import { Loader } from '../../components';

import email from '../../assets/email-logo.png';
import telephone from '../../assets/telephone-logo.png';
import facebook from '../../assets/facebook-logo.png';
import instagram from '../../assets/instagram-logo.png';
import location from '../../assets/location-logo.png';
import worktime from '../../assets/worktime-logo.png';

import './contacts.css';

const Contacts = () => {
  const loaderData = useLoaderData();

  return (
    <div id='contacts-wrapper'>
      <Suspense fallback={<Loader />}>
        <Await resolve={loaderData.contacts}>
          {(loaderContacts) =>
            loaderContacts.map((el) => (
              <ul className='contacts-list' key={el._id}>
                <li className='contact-item'>
                  {' '}
                  <img className='contact-logo' src={email} alt='email' />:{el.email}
                </li>
                <li className='contact-item'>
                  <img className='contact-logo' src={facebook} alt='facebook' /> :{el.fb}
                </li>
                <li className='contact-item'>
                  <img className='contact-logo' src={instagram} alt='instagram' /> :{el.inst}
                </li>
                <li className='contact-item'>
                  <img className='contact-logo' src={telephone} alt='telephone' /> :{el.phone}
                </li>
                <li className='contact-item'>
                  <img className='contact-logo' src={worktime} alt='worktime' /> :{el.worktime}
                </li>
                <li className='contact-item'>
                  <img className='location-logo' src={location} alt='location' /> 
                  <span className='locations'>
                    lviv:{el.locations.lviv}
                  </span>
                  <img className='location-logo' src={location} alt='location' /> 
                  <span className='locations'>
                    kyiv:{el.locations.kyiv}
                  </span>
                  <img className='location-logo' src={location} alt='location' /> 
                  <span className='locations'>
                    if"{el.locations.if}
                  </span>
                </li>
              </ul>
            ))
          }
        </Await>
      </Suspense>
    </div>
  );
};
export default Contacts;

export async function loader() {
  return defer({ contacts: getContacts() });
}
