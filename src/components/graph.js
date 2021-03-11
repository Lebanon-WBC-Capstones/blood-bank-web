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
            borderRadius: '16px',
            position: 'absolute',
            top: '20%',
            left: '4%',
            width: 'auto',
            padding: '0.5rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          class="  bg-red-300  text-xs "
        >
          {t('landingpage.Emergency_Blood_Request')}
        </button>
        <button
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '38%',
            left: '1%',
            width: 'auto',
            padding: '0.5rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          class=" bg-red-300  text-xs "
        >
          {t('landingpage.Donate_and_help_others')}
        </button>
        <button
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '57%',
            right: '0%',
            width: 'auto',
            padding: '0.5rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          class=" bg-red-300 text-xs "
        >
          {t('landingpage.Flexible_scheduling')}
        </button>
        <button
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '70%',
            right: '3%',
            width: 'auto',
            padding: '0.5rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          class=" bg-red-300 text-xs"
        >
          {t('landingpage.Fast_Response')}
        </button>
      </div>
    </div>
  );
}
export default withNamespaces()(Graph);
