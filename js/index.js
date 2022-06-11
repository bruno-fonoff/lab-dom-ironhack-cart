// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');

  let priceValue = price.innerText;
  console.log(priceValue);

  let quantityValue = quantity.value;
  console.log(quantityValue);

  let resultSubtotal = priceValue * quantityValue;
  console.log(resultSubtotal);

  let subtotal = product.querySelector('.subtotal span');
  console.log(subtotal);

  subtotal.innerText = resultSubtotal;

  return resultSubtotal;

  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here

  const products = document.getElementsByClassName('product');

  //===>>>  consigo clonar, mas fica um ao lado do outro e nao embaixo   <<<===\\
  //===>>>  fiz o clone direto no HTML para seguir em frente   <<<===\\

  // let pclone = products[0].cloneNode(true);
  // products[0].appendChild(pclone);

  let totalValue = 0;

  for (let product of products) {
    totalValue += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here

  document.querySelector('#total-value span').innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
