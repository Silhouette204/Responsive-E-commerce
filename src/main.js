import './style.css'

import { 
  products 
} 
from './product.js'

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('#menu-btn');
  const menu = document.querySelector('#menu');
  const menuIcon = document.querySelector('#menu-icon');

  if (!menuBtn || !menu || !menuIcon) return;

 menuBtn?.addEventListener('click', () => {
  menu.classList.toggle('opacity-0');
  menu.classList.toggle('translate-y-2.5');
  menu.classList.toggle('pointer-events-none');

  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
  });
});

function formatBrandName(brand) {
  const names = {
    all: " ",
    tagheuer: "Tag Heuer",
    rolex: "Rolex",
    gshock: "G-Shock",
    fossil: "Fossil",
    tissot: "Tissot"
  };
  return names[brand] || brand;
}

const buttons = document.querySelectorAll("#brand-selector button");
const productGrid = document.querySelector("#product-grid");
const loader = document.getElementById("loader");
const brandTitle = document.getElementById("brand-title");

document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const brand = button.dataset.brand;

     buttons.forEach(btn => {
      const img = btn.querySelector("img");
      if (btn === button) {
        img.classList.remove("opacity-50");
        img.classList.remove("w-20");
        img.classList.add("opacity-100");
        img.classList.add("w-32");
      } else {
        img.classList.remove("opacity-100");
        img.classList.remove("w-32");
        img.classList.add("opacity-50");
        img.classList.add("w-20");
      }
    });

    switchBrand(brand);
  });
});

function switchBrand(brand) {
  // Show loader (it already has the flex class in HTML)
  loader.classList.remove("hidden");
  productGrid.classList.add("hidden");
  brandTitle.classList.add("hidden");

  setTimeout(() => {
    renderProducts(brand);
    
    // Hide loader
    loader.classList.add("hidden");
    
    // Show results
    productGrid.classList.remove("hidden");
    brandTitle.classList.remove("hidden");
  }, 1000);
}

function renderProducts(brand) {
  productGrid.innerHTML = "";
  brandTitle.textContent = brand.toUpperCase();

  if (!products[brand]) {
    productGrid.innerHTML = `<p class="text-light">No products found.</p>`;
    return;
  }

  const list = products[brand];
  if (!list) return;

  brandTitle.textContent = brand === "all" ? "Watches" : brand.toUpperCase();

 brandTitle.textContent = formatBrandName(brand);

  list.forEach(product => {
    productGrid.innerHTML += `
      <div class="product-card">
        <div class="product-img">
          <img src="${product.img}" class="p-5 mx-auto" alt="">
        </div>

        <h1 class="text-secondary font-semibold">${product.name}</h1>
        <p class="text-light my-1">${product.type}</p>
        <p class="text-secondary my-1">${product.price}</p>
        
        <ul class="flex justify-between items-center mt-5">
          <li>
            <a href="#" class="rounded-4xl bg-primary py-3 px-4 font-semibold text-light hover:bg-secondary hover:text-dark hover:duration-300 ease-in-out">
              Buy Now
            </a>
          </li>
          <li>
            <i class="fa-solid fa-cart-shopping text-light border-2 p-2 rounded-3xl hover:border-primary hover:text-primary hover:duration-300 ease-in-out"></i>
          </li>
        </ul>
      </div>
    `;
  });
}



