import React, { useState } from 'react';
import pintsLogo from '../assets/pintsLogo.svg';
import quesLogo from '../assets/quesLogo.svg';
import humanLogo from '../assets/humanLogo.svg';
import clock from '../assets/clock.svg';
import smallBlood from '../assets/smallBlood.svg';
import smallTahaleb from '../assets/smallTahaleb.svg';

const FeedCard = () => {
  const [open, setOpen] = useState(false);

  const handleDivSizeChange = () => {
    setOpen(!open);
  };
  const formatDate = (string) => {
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

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
  ];

  return (
    <div>
      {feed.map((f) => (
        <div
          className={'container ' + (open ? 'expand' : '')}
          onClick={handleDivSizeChange}
        >
          <div class="  h-14 ml-3 flex flex-row justify-between">
            <div class="flex flex-row">
              <img
                src={f.user.avatar}
                alt="profile"
                class="rounded-full w-12 h-12 mt-1"
              />
              <p class="mt-3 ml-2">
                <span class="text-gray-500 text-sm">{f.user.username} </span>
                <span class="text-gray-500 text-sm">
                  {f.data.operation} is{' '}
                </span>
                <span class="text-pri-red text-sm">Fulfilled</span>
              </p>
            </div>
            <div class="text-gray-300 text-xs mr-2 mt-5 flex flex-row ">
              <img src={clock} alt="clock" class="w-4 h-4" />
              <span class="ml-1">{formatDate(f.data.date)}</span>
            </div>
          </div>

          <div class="bg-pink ml-16 rounded-xl  mr-5 flex flex-row justify-between">
            <div class="mt-5 -ml-5">
              <img src={smallTahaleb} alt="smallTahaleb" class="w-20 h-20 " />
            </div>
            <div class="-ml-10">
              <div class="flex flex-row ">
                <img
                  src={pintsLogo}
                  alt="pintsLogo"
                  class=" w-6 h-6 mt-2 ml-2"
                />
                <span class="text-gray-500 text-xs mt-2 ml-1">
                  {f.data.amount}{' '}
                </span>
              </div>

              <div class="flex flex-row ">
                <img src={quesLogo} alt="quesLogo" class=" w-6 h-6 mt-2 ml-2" />
                <span class="text-gray-500 text-xs mt-2 ml-1">
                  {f.data.reason}{' '}
                </span>
              </div>

              <div class="flex flex-row ">
                <img
                  src={humanLogo}
                  alt="humanLogo"
                  class=" w-6 h-6 mt-2 ml-2 mb-2"
                />
                <span class="text-gray-500 text-xs mt-3 ml-1">
                  {f.data.donors[0]}, {f.data.donors[1]}, and{' '}
                  {f.data.donors.length - 2} Others
                </span>
              </div>
            </div>
            <div class="mr-2">
              <img
                src={smallBlood}
                alt="smallBlood"
                class="w-6 h-6 mt-2 ml-2"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedCard;
