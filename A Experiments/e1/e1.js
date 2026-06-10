const container = document.querySelector(".container")
const rowContainer = document.querySelector(".row")

async function fetchProductData() {
    try {
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()

        data.forEach((product) => {
            rowContainer.innerHTML += `<div class="col-12 col-sm-2 col-md-3 col-lg-4">
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
        				<p class="card-text">${product.description.slice(0,100)}...</p>
            <a href="https://fakestoreapi.com/products/${product.id}" class="btn btn-primary">${product.price}</a>
            </div>
        </div>
        </div>`
        })
    } catch (error) {
        console.log(error);
    }
}
fetchProductData()