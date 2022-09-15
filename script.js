import { items, createCartItem, productId, addItem, reduceItem } from './cartItem.js';
const itemsContainer = document.getElementById('items-container');

itemsContainer.addEventListener('click', (e) => {
  const id = +productId(e);
  const clickedBtn = e.target;

  console.log(id);

  if (clickedBtn.classList.contains('add')) {
    addItem(id);
    console.log('clicked add');
  }
  if (clickedBtn.classList.contains('minus')) {
    reduceItem(id);
    console.log('clicked minus');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  itemsContainer.innerHTML = '';

  items.forEach((item) => {
    const html = createCartItem(item);
    itemsContainer.insertAdjacentHTML('afterbegin', html);
  });
});

// paypal
//   .Buttons({
//     style: {
//       layout: 'vertical',
//       color: 'blue',
//       shape: 'pill',
//       label: 'paypal',
//     },
//     createOrder: function (data, actions) {
//       // Set up the transaction
//       return actions.order.create({
//         purchase_units: [
//           {
//             amount: {
//               currency_code: 'USD',
//               value: '35.99',
//               breakdown: {
//                 item_total: {
//                   /* Required when including the items array */ currency_code: 'USD',
//                   value: '35.99',
//                 },
//               },
//             },
//             items: [
//               {
//                 name: 'Rebook Shoes' /* Shows within upper-right dropdown during payment approval */,
//                 description:
//                   'used shoes' /* Item details will also be in the completed paypal.com transaction view */,
//                 unit_amount: {
//                   currency_code: 'USD',
//                   value: '35.99', // value for a single item
//                 },
//                 quantity: '1',
//               },
//             ],
//           },
//         ],
//       });
//     },
//     onApprove: function (data, actions) {
//       // This function captures the funds from the transaction.
//       return actions.order.capture().then(function (details) {
//         console.log(details);
//         // This function shows a transaction success message to your buyer.
//         alert('Transaction completed by ' + details.payer.name.given_name);
//       });
//     },
//   })
//   .render('#paypal-button-container');
