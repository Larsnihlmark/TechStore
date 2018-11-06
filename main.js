

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI kjgjfg,
}
/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
        var productDivs = document.createElement("div");
        productDivs.className = "productContainers";
        for (var i = 0; i < listOfProducts.length; i++){
            var productInfo = createProductInfo(listOfProducts[i]);
            productDivs.appendChild(productInfo);        
        }
        
        document.querySelector("main").appendChild(productDivs);
    
        console.log(listOfProducts);
        
        // Add your code here, remember to brake your code in to smaller function blocks
        // to reduce complexity and increase readability. Each function should have
        // an explainetory comment like the one for this function, see row 22.
        
        // TODO: Remove the console.log and these comments when you've read them.
    }

    function createProductInfo(product){
        var productInfoContainer = document.createElement("div");
        productInfoContainer.className = "productInfoContainer";
        
        var getProductTitle = document.createElement("h3");
        getProductTitle.innerText = product.title;
        productInfoContainer.appendChild(getProductTitle);
        
        var getProductDescription = document.createElement("p");
        getProductDescription.innerText = product.description;
        productInfoContainer.appendChild(getProductDescription);
        
        var getProductImage = document.createElement("img");
        getProductImage.src = "./assets/" + product.image;
        productInfoContainer.appendChild(getProductImage);
        
        var getProductPrice = document.createElement("p");
        getProductPrice.innerText = product.price + " kr";
        productInfoContainer.appendChild(getProductPrice);

        var cartButton = document.createElement("button");
        var buttonText = document.createTextNode("Lägg till i varukorgen");
        cartButton.appendChild(buttonText);
        productInfoContainer.appendChild(cartButton);

        return productInfoContainer;
    }
function clickcounter(){
    if (typeof(Storage) !== button){
        if (localStorage.clickcount){
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else{
            localStorage.clickcount = 1;
        }
        document.getElementsByClassName("fas").innerHTML = "Du har i varukorgen" + localStorage.clickcount + "time(s).";
    }
}
    
    
/*     
e.preventDefault();
var $this = $(this);
var $cart = $('#cart');
var item_identifier = $this.data('id');

/* ta bort mobilen */

/* if ($this.data('in-cart')==='yes'
&& $cart.find('li[data-id="' + item_identifier + '"]').length > 0) {
    return
}

// lägg till i kundvagnen
$this.data('in-cart', 'yes');
var to_cart = $('li').data('id', item_identifier).html($this.html());
$cart.append(to_cart);
}); */ 
