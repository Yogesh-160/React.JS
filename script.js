let getListOfProductsElements = document.querySelector('.list-of-products');

function renderProducts(getProducts){
getListOfProductsElements.innerHTML = getProducts.map(singleProductItem => `<p>${singleProductItem.title}</p>`).join(' ')
}

async function fetchListOFProducts() {
    try{
const apiResponse = await fetch('https://dummyjson.com/products',{method: 'GET'})

const result = await apiResponse.json();

if (result.products.length > 0) 
    {
        renderProducts(result.products)
    }

console.log(result);
    }catch(e){
        console.log("The Error is ", e);
    }
}

fetchListOFProducts();