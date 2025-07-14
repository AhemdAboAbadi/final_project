/* eslint-env browser, es6 */
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
)

function addToCart(productName) {
  alert(`${productName} has been successfully added to cart!`)
}

function showMoreProducts() {
  const productsGrid = document.getElementById("productsGrid")
  const showMoreBtn = document.querySelector(".show-more-btn")

  const additionalProducts = [
    {
      name: "Laser Printer",
      price: "$450",
      image:
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Digital Camera",
      price: "$1,800",
      image:
        "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Professional Microphone",
      price: "$600",
      image:
        "https://images.unsplash.com/photo-1588800347304-ec7e6f353327?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Projector Screen",
      price: "$3,200",
      image:
        "https://images.unsplash.com/photo-1521607630287-ee2e81ad3ced?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  additionalProducts.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
        `
    productsGrid.appendChild(productCard)
  })

  showMoreBtn.style.display = "none"
}

function togglePromo() {
  const promoDetails = document.getElementById("promoDetails")
  const promoBtn = document.querySelector(".promo-btn")

  if (
    promoDetails.style.display === "none" ||
    promoDetails.style.display === ""
  ) {
    promoDetails.style.display = "block"
    promoBtn.textContent = "Hide Details"
  } else {
    promoDetails.style.display = "none"
    promoBtn.textContent = "View Details"
  }
}
