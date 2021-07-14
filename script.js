console.log("Here");

let bill_amount = document.querySelector("#input-bill-amount");
let tip_btn = document.getElementsByClassName("btn");
let btns = document.getElementsByTagName("button");
let input_bill_amount;

bill_amount.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // code for enter
    input_bill_amount = bill_amount.value;
  }
  input_bill_amount = bill_amount.value;
});

console.log(input_bill_amount);
console.log(bill_amount);

Object.keys(btns).forEach((btn) => {
  console.log(btns[btn]);
  btns[btn];
});
