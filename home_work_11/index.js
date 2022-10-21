import { mockDataArray } from "./mockData.js";

const root = document.createElement("div");

const containerValueOfProducts = document.createElement("div");
containerValueOfProducts.classList.add("value-container"); /// from value-container to container

const productList = document.createElement("ul");
productList.classList.add("product-list");

root.prepend(productList, containerValueOfProducts);
document.body.prepend(root);

function showDetails(productName) {
  const productDetailsBlock = document.getElementById(productName);
  if (productDetailsBlock.style.display === "none") {
    productDetailsBlock.style.display = "block";
    return;
  } else {
    productDetailsBlock.style.display = "none";
    return;
  }
}

function renderProductsListItem(
  productName,
  productPrice,
  certificate,
  productCountry,
  weight,
  dateOfExpiry,
  sugarFree,
  productProvider
) {
  return `<div class = "product-item">
    <span style="color:red">${certificate ? "" : "!"}</span>
    <span class = "product-name"> ${productName}</span>
    <span class = "product-price">: for ${weight} grams, the price ${productPrice} UAH</span>
    <img style = "width:30px; margin-left: 6px" src = "${productCountry}" alt = "imageFlag">
    <span class="show-more">show more</span>
  </div>
  <div id=${productName}  class = "sd" style="display: none;">
    Date of expiry: ${dateOfExpiry}; sugar free: ${sugarFree}; product provider: ${productProvider}
  </div>`;
}

mockDataArray.forEach((product) => {
  const {
    productName,
    productPrice,
    productData,
    productCountry,
    productProvider,
  } = product;

  const itemList = document.createElement("li");
  itemList.classList.add("list-item");
  itemList.addEventListener("click", () => showDetails(productName));
  itemList.innerHTML = `${renderProductsListItem(
    productName,
    productPrice,
    productData.certificate,
    productCountry,
    productData.weight,
    productData.dateOfExpiry,
    productData.sugarFree,
    productProvider
  )}`;
  productList.append(itemList);
});

function getTotalPrice(array) {
  const totalPrice = array.reduce((sum, el) => sum + el.productPrice, 0);
  return totalPrice;
}

const totalPrice = getTotalPrice(mockDataArray);

function getAveragePrice(array) {
  const totalPrice = array.reduce((sum, el) => sum + el.productPrice, 0);
  const averagePrice = (totalPrice / array.length).toFixed(2);
  return averagePrice;
}

const averagePriceOfProducts = getAveragePrice(mockDataArray);

function getMostExpensiveProduct(array) {
  const sortedMostExpensiveProductS = array.sort(
    (el1, el2) => el2.productPrice - el1.productPrice
  );
  return `${sortedMostExpensiveProductS[0].productName} it costs ${sortedMostExpensiveProductS[0].productPrice} UAH`;
}
const mostExpensiveProduct = getMostExpensiveProduct(mockDataArray);

function renderValueOfProducts(
  totalPrice,
  averagePriceOfProducts,
  mostExpensiveProduct
) {
  return `<span class="red">Total price: ${totalPrice} UAH</span>
  <span class="blue"> Average price of products: ${averagePriceOfProducts} UAH</span>
  <span class="green"> Most expensive product: ${mostExpensiveProduct} </span>`;
}
containerValueOfProducts.innerHTML = `${renderValueOfProducts(
  totalPrice,
  averagePriceOfProducts,
  mostExpensiveProduct
)}`;
