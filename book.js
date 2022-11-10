let container = document.getElementById("booksStore");
const input = document.querySelector(".search-input");
const cartList = document.getElementById("cart-list");
const row = document.querySelector(".row");
const buyNow = document.getElementById("buy-now");

async function getBooks() {
  const getBooks = await fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      return response.json();
    })
    .then((listOfBooks) => {
      console.log(listOfBooks);
      listOfBooks.forEach(visualiseBook);
    });
}

getBooks();

function visualiseBook(book) {
  console.log(book);
  let card = document.createElement("div");
  card.classList.add("card", "col-3", "mb-3", "p-2");
  card.innerHTML = `<img src=${book.img} class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${book.title}</h5>
     <p class="card-text">Category: ${book.category}</p>
     <a href="#" class="btn btn-primary mb-2">Buy this for £${book.price}</a>
     <p class="card-text "> ID:${book.asin}</p>
     <button href="#" onclick="addBadge(event)" id="by-now" class="btn btn-primary">Add to cart</button>
     <button href="#" onclick="removeCard(event)" class="btn btn-primary">Skip</button>
   
    </div>
`;
  container.appendChild(card);
}

// Add to cart notification.
const addBadge = (e) => {
  e.target.closest(
    ".col-3"
  ).innerHTML += `<span class="badge badge-warning p-2">Added to cart!</span>`;
};

// removing the cart.
const removeCard = (e) => {
  e.target.closest(".col-3").remove();
};

// search the books.

//const searchBooks = (inputNode) => {
//  let search = inputNode.value;
//  console.log(search);
//  if (search.length >= 3) {
//    getBooks(search);
//  } else {
//    getBooks();
//  }
//};
