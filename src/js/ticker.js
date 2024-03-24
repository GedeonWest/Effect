import InfiniteMarquee from 'vanilla-infinite-marquee';

let logosTicker;

const shouldRun = () => document.querySelector('#ticker');

const findElements = () => {
  logosTicker = document.getElementById('ticker');
};

const subscribe = () => {
  new InfiniteMarquee({
    element: logosTicker,
    speed: 25000,
    smoothEdges: true,
    direction: 'left',
    gap: '28px',
    duplicateCount: 2,
    // mobileSettings: {
    //   direction: 'top',
    //   speed: 20000
    // },
  });
};

export default () => {
  if (!shouldRun()) {
    return;
  }
  findElements();
  subscribe();
};
