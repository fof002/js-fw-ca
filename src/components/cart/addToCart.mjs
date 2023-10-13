export function addToCart(event) {
  let cartArray = [];
  let newCartArray = [];
  if (JSON.parse(localStorage.getItem("cart"))) {
    cartArray = JSON.parse(localStorage.getItem("cart"));
  }
  cartArray.forEach((product) => {
    if (product.id != event.target.getAttribute("data-id")) {
      newCartArray.push(product);
    } else {
      alert("Item is already in cart");
    }
  });
  const productId = event.target.getAttribute("data-id");
  const productPrice = event.target.getAttribute("data-price");
  const productTitle = event.target.getAttribute("data-title");
  const productDiscount = event.target.getAttribute("data-discountedprice");
  const imageUrl = event.target.getAttribute("imageurl");
  const productObject = {
    id: productId,
    price: productPrice,
    discountedPrice: productDiscount,
    title: productTitle,
    imageUrl: imageUrl,
  };
  newCartArray.push(productObject);
  localStorage.setItem("cart", JSON.stringify(newCartArray));
  const cartCounter = document.querySelector("#cartCounter");
  cartCounter.innerText = newCartArray.length;
}
