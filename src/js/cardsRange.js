let cardsRange;
let cardsRangeList;

const shouldRun = () => document.querySelector('#views');

const findElements = () => {
  cardsRange = document.getElementById('views');
  cardsRangeList = document.getElementById('tiles');
};

// const addAttribute = (value) => {
//   console.log(value);
//   switch (value) {
//     case '2':
//       return 'repeat(2, 1fr)';
//     case '3':
//       return 'repeat(3, 1fr)';
//     case '4':
//       return 'repeat(4, 1fr)';
//     default:
//       return 'repeat(2, 1fr)';
//   }
// };

const addClassName = (value) => {
  console.log(value);
  switch (value) {
    case '2':
      return 'columns-2';
    case '3':
      return 'columns-3';
    case '4':
      return 'columns-4';
    default:
      return 'columns-2';
  }
};

function onInit() {
  cardsRangeList.classList.add(addClassName(cardsRange.value));
}

function onRange() {
  let count = cardsRange.value;
  // cardsRangeList.style.gridTemplateColumns = addClassName(count);
  cardsRangeList.classList.remove('columns-2', 'columns-3', 'columns-4');
  cardsRangeList.classList.add(addClassName(count));
}

const subscribe = () => {
  cardsRange.addEventListener('input', onRange);
};

export default () => {
  if (!shouldRun()) {
    return;
  }
  findElements();
  onInit();
  subscribe();
};
