const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector("#modalTitle");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");
const formBtn = document.querySelector(".formBtn");
const productsDiv = document.querySelector(".products");
const productsArr = [];
let editIndex = -1;

let productCard = () => {
  productsDiv.innerHTML = "";

  productsArr.forEach((e, idx) => {
    productsDiv.innerHTML += `
                <div class="product-card">
                    <div class="img">
                        <img src="${e.imgUrl}" alt="${e.productName}">
                    </div>
                    <div class="text">
                        <p>${e.productName}</p>
                        <p>${e.description}</p>
                        <p>${e.price}</p>
                    </div>
                    <div class="btns">
                      <button onclick="editProduct(${idx})" class="update">Update</button>
                      <button onclick="deleteProduct(${idx})" class="delete">Delete</button>
                    </div>
                </div>
        `;
  });
};

createBtn.addEventListener("click", () => {
  editIndex = -1;
  form.reset();

  modal.style.display = "flex";
  formBtn.textContent = "CREATE PIECE";
  modalTitle.textContent = "Add Collection Piece";
  formDiv.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let productName = e.target[0].value;
  let description = e.target[1].value;
  let price = e.target[2].value;
  let imgUrl = e.target[3].value;

  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    imgUrl.trim() === ""
  ) {
    alert("Please fill all the fields");
    return;
  }

  let obj = {
    productName,
    description,
    price,
    imgUrl,
  };

  if (editIndex === -1) {
    productsArr.push(obj);
  } else {
    productsArr[editIndex] = obj;
    editIndex = -1;
  }

  productCard();
  form.reset();
  modal.style.display = "none";

  formBtn.textContent = "CREATE PIECE";
  modalTitle.textContent = "Add Collection Piece";
});

function editProduct(index) {
  editIndex = index;

  let product = productsArr[index];

  form[0].value = product.productName;
  form[1].value = product.description;
  form[2].value = product.price;
  form[3].value = product.imgUrl;

  modal.style.display = "flex";
  formBtn.textContent = "SAVE CHANGES";
  modalTitle.textContent = "Edit Collection Piece";
}

function deleteProduct(index) {
  productsArr.splice(index, 1);
  productCard();
}
