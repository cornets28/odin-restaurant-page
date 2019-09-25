const food = {
  itemOne: document.createElement('img'),
  itemTwo: document.createElement('img'),
  itemThree: document.createElement('img'),
};

food.itemOne.src = 'dist/images/food5.jpg';
food.itemTwo.src = 'dist/images/food2.jpg';
food.itemThree.src = 'dist/images/food4.jpg';

food.itemOne.classList.add('meal-1', 'the-food');
food.itemTwo.classList.add('meal-2', 'the-food');
food.itemThree.classList.add('meal-3', 'the-food');

const gallary = document.createElement('div');
gallary.classList.add('tab__display', 'tab__display--menu');

gallary.appendChild(food.itemOne);
gallary.appendChild(food.itemTwo);
gallary.appendChild(food.itemThree);

export default gallary;
