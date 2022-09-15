import { total } from './summary.js';

const itemsContainer = document.getElementById('items-container');

export let items = [
  {
    id: 1,
    imageUrl:
      'https://banner2.cleanpng.com/20180531/ey/kisspng-t-shirt-gucci-clothing-fashion-logo-gucci-5b1038906ebe49.5785627215277897124536.jpg',
    name: 'two new shoes ',
    price: 20.13,
    quantity: 1,
    description: 'a description',
  },
  {
    id: 2,
    imageUrl:
      'https://w7.pngwing.com/pngs/855/190/png-transparent-t-shirt-hoodie-clothing-gucci-gucci-shirt-tshirt-white-fashion.png',
    name: 'one car',
    price: 11.13,
    quantity: 2,
    description: 'a description',
  },
];

// const addItemBtn = document.querySelector('.add');

export const productId = (DOMElement) => {
  return DOMElement.target.closest('.item').dataset.id;
};

export const addItem = (id) => {
  const existingItemIndex = items.findIndex((item) => item.id === id);
  const existingItem = items[existingItemIndex];
  let updateItem;

  if (existingItem) {
    updateItem = { ...existingItem };
    updateItem.quantity = updateItem.quantity + 1;
    updateItem.itemTotal = existingItem.price * updateItem.quantity;
    // items = [...items];
    items[existingItemIndex] = updateItem;

    itemsContainer.innerHTML = '';
    items.forEach((item) => {
      const html = createCartItem(item);
      itemsContainer.insertAdjacentHTML('afterbegin', html);
    });

    total(items);
  }
};

export const reduceItem = (id) => {
  const existingItemIndex = items.findIndex((item) => item.id === id);
  const existingItem = items[existingItemIndex];
  let updateItem;

  if (existingItem) {
    updateItem = { ...existingItem };
    updateItem.quantity = updateItem.quantity - 1;
    updateItem.itemTotal = existingItem.price * updateItem.quantity;
    items = [...items];
    items[existingItemIndex] = updateItem;

    itemsContainer.innerHTML = '';

    items.forEach((item) => {
      const html = createCartItem(item);
      itemsContainer.insertAdjacentHTML('afterbegin', html);
    });

    total(items);
  }
};

export const createCartItem = (item) => {
  const html = `
        <div class="item" data-id="${item.id}">

          <div class="image">
            <img src=${item.imageUrl} alt="guccie shirt">
          </div>

          <div class="details">

            <div class="info">
              <div class="name"><span>Product: </span>${item.name}</div>
              <div class="item-id"><span>ID: </span>${item.id}</div>
              <div class="name"><span>Color: </span>green</div>
              <div class="name"><span>Size: </span>M</div>
            </div>

            <div class="price">
              <div class="quantity"><span class="minus">&minus;</span> ${
                item.quantity
              } <span class="add">&plus;</span></div>
              <div class="item-total"><span>&dollar; </span>${(
                item?.itemTotal || item.price
              ).toFixed(2)}</div>
            </div>

          </div>
        </div>
  `;

  return html;
};

// const item = {
//   id: '1',
//   imageUrl: 'image url',
//   name: 'two new shoes ',
//   price: 20.13,
//   quantity: 1,
//   description: 'a description',
// };
