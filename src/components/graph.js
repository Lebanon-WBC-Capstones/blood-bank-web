import React from 'react';
import path2 from '../assets/graph.svg';
import { withNamespaces } from 'react-i18next';
function Graph({ t }) {
  return (
    <div>
      <div
        style={{
          display: 'inline-block',
          position: 'absolute',
          minWidth: '330px',
          paddingLeft: '2.75rem',
          paddingTop: '0.5rem',
        }}
      >
        <img style={{ marginRight: '0px' }} src={path2} alt="house" />
        <button
          style={{
            top: '20%',
            left: '5%',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
          }}
          className=" absolute rounded-2xl px-2 py-1 w-auto text-gray-500 font-Roboto text-xs "
        >
          {t('landingpage.Emergency_Blood_Request')}
        </button>
        <button
          style={{
            top: '39%',
            left: '1%',

            backgroundColor: 'rgba(136, 129, 129, 0.22)',
          }}
          class=" absolute rounded-2xl px-2 py-1 w-auto text-gray-500 font-Roboto text-xs "
        >
          {t('landingpage.Donate_and_help_others')}
        </button>
        <button
          style={{
            top: '57%',
            right: '0%',

            backgroundColor: 'rgba(136, 129, 129, 0.22)',
          }}
          class="absolute rounded-2xl px-2 py-1 w-auto text-gray-500 font-Roboto text-xs "
        >
          {t('landingpage.Flexible_scheduling')}
        </button>
        <button
          style={{
            top: '71%',
            right: '5%',

            backgroundColor: 'rgba(136, 129, 129, 0.22)',
          }}
          class=" absolute rounded-2xl px-2 py-1 w-auto text-gray-500 font-Roboto text-xs"
        >
          {t('landingpage.Fast_Response')}
        </button>
      </div>
    </div>
  );
}
export default withNamespaces()(Graph);
