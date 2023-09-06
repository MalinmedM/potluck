// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//appears when guest list is full
const assignButton = document.querySelector(".assign");
//list of guests names and assigned dishes
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;

  if (guest !== "") {
    addToList(guest);
    clearInput();
  }
  updateGuestCount();
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
    const potluckItems = [
      "potato salad",
      "hummus",
      "fruit",
      "chocolate balls",
      "cake",
      "zucchini pancakes",
      "grilled chicken",
      "kale crisps",
      "pickles",
      "cheeses",
      "crispy veg salad",
      "seafoods"
      "sour dough bread"
    ];
  };

  const allGuests = document.querySelectorAll(".guest-list li");

  for(let guest of allGuests) {
    
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    
    let listItem = createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
  }

