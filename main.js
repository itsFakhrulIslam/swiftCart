let trendingCard = document.getElementById('trendingCard')
let trendingCards = document.getElementById('trendingCards')
let categoryDiv = document.getElementById('categoryDiv')
// let category = ''

function productCategory(category) {
    return `<button onclick="resData('${category}')" class="bg-slate-700 px-10 py-5 rounded-xl text-white text-2xl font-bold">${category}</button>`
}

function productShow(product = {}) {
    // console.log(product);

    return `<div class="shadow-md shadow-blue-500 space-y-2 rounded-lg">
      <img
        class="h-[350px] w-full object-contain hover:scale-120 hover:transition-transform duration-500 p-10"
        src="${product.image}"
        alt=""
      />

      <div class="px-4 space-y-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-star"></i>
            <p class="star">${product.rating.rate}</p>
            <p class="number">${product.rating.count}</p>
          </div>
          <p>$${product.price}</p>
        </div>

        <h3 class="text-lg font-bold">${product.title}</h3>

        <div class="flex justify-between pb-10">
          <button
            class="py-2 px-10 outline-2 hover:bg-blue-700 rounded-lg cursor-pointer"
          >
            details
          </button>
          <button class="py-2 px-10 bg-blue-500 rounded-lg cursor-pointer">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>`
}

let resData = (category = 'all') => {
    fetch("https://fakestoreapi.com/products?limit=4")
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            trendingCard.innerHTML = data.map(p => productShow(p)).join('')
        })

    let url = 'https://fakestoreapi.com/products'

    fetch(category == 'all' ? url : `https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            trendingCards.innerHTML = data.map(p => productShow(p)).join('')
        })

    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => {
            console.log(data);

            categoryDiv.innerHTML = data.map(category => productCategory(category))
        })
}

resData()

