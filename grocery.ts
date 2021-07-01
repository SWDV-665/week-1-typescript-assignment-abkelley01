class Grocery {
  name: string;
  quantity: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }

}

let grocery_list = [
  new Grocery("Milk", 1),
  new Grocery("Bread", 2),
  new Grocery("Eggs", 12)
]


grocery_list.forEach(e => {
  var para = document.createElement("p");
  para.textContent = `${e.name} ${e.quantity}`;
  document.getElementById("app").appendChild(para);
});

