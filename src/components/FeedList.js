import React from 'react';
import FeedItem from './FeedItem.js';

const FeedList = () => {
  const feed = [
    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },

    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },
    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },

    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },
    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },

    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },
    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },

    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },
    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },

    {
      fulfilled: true,
      user: {
        username: 'Jolie',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 pints',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },
  ];

  return (
    <div className="px-3 py-1">
      {feed.length !== 0
        ? feed.map((f, i) => (
            <FeedItem item_user={f.user} item_data={f.data} key={i} />
          ))
        : ''}
    </div>
  );
};

export default FeedList;
