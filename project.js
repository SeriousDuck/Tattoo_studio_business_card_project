const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach((element) => {
   element.addEventListener('click', open);
});

function open(event) {
   const tabTarget = event.currentTarget;
   const dataBtn = tabTarget.dataset.button;

   tabItem.forEach((item) => {
      item.classList.remove('tabs__btn-item--active');
   });

   tabTarget.classList.add('tabs__btn-item--active');


   tabContent.forEach((item) => {
      item.classList.remove('tabs__content-item--active');
   });

   document.querySelector(`#${dataBtn}`).classList.add('tabs__content-item--active');
};