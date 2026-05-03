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

const menu = document.getElementById("menu");

foods.forEach((food) => {
  const div = document.createElement("div");
  div.textContent = food.name + " -$ " + food.price;

  // button addCart to the Shop Cart
  const addCart = document.createElement("button");
  addCart.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = food.name + "- $" + food.price;

    // delete button of list
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    li.appendChild(deleteBtn);

    // Remove any items from the cart
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    cartList.appendChild(li);
    total = total + food.price;
    totalEl.textContent = total + "$";
  });
  addCart.textContent = "Add to Cart";
  div.appendChild(addCart);
  menu.appendChild(div);
});
