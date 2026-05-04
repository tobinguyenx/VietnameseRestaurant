const foods = [
  {
    name: "Pho with Sliced Beef",
    price: 17,
  },
  {
    name: "Bún Bò Huế - Spicy Beef Soup",
    price: 17.5,
  },
  {
    name: "Pho with Sliced Beef and well done Flank",
    price: 17,
  },
  {
    name: "Pho with Sliced Beef, Tripe and well done Flank",
    price: 17,
  },
  {
    name: "Pho with Sliced Beef, Well done Flank and Soft Tendon",
    price: 17,
  },
  {
    name: "Pho with Beef Balls",
    price: 17,
  },
  {
    name: "Pho with Special Beef Combination",
    price: 18,
  },
  {
    name: "Pho with Special Chicken Combination",
    price: 18,
  },
  {
    name: "Pho with Beef and Chicken",
    price: 18,
  },
  {
    name: "Pho with Chicken",
    price: 17,
  },
  {
    name: "Pho with Beef and Beef Balls",
    price: 17,
  },
  {
    name: "Pho with Special Beef and Chicken Combination",
    price: 19,
  },
];
const cartList = document.getElementById("cart-list");
const totalEl = document.getElementById("total");
let total = 0;
let cart = {};

const menu = document.getElementById("menu");

function renderCart() {
  cartList.innerHTML = "";
  Object.keys(cart).forEach((name) => {
    const item = cart[name];
    const li = document.createElement("li");
    li.textContent =
      name + " x" + item.quantity + " - $" + item.price * item.quantity;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      total = total - item.price * item.quantity;
      totalEl.textContent = total + "$";
      delete cart[name];
      renderCart();
    });

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
}
foods.forEach((food) => {
  const div = document.createElement("div");
  div.textContent = food.name + " -$" + food.price;

  // button addCart to the Shop Cart
  const addCart = document.createElement("button");
  addCart.addEventListener("click", () => {
    if (cart[food.name]) {
      cart[food.name].quantity += 1;
    } else {
      cart[food.name] = { price: food.price, quantity: 1 };
    }

    total = total + food.price;
    totalEl.textContent = total + "$";
    renderCart();
  });
  addCart.textContent = "Add to Cart";
  div.appendChild(addCart);
  menu.appendChild(div);
});
