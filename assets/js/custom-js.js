

$(document).ready(function(){

    $('.multiple-items').slick({
        nav: false,
        dots:true,
        nextArrow: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed :1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite:true,
        speed:1000,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToScroll: 2,
                    slidesToShow: 1
                }
            }
        ]
    });


    $(".click-search-4").click(function (){
        $(".click-search-show").show();

    })

    $('body').on('click',(e) => {
        var content = $(".click-search-4");
        var content2 = $(".input-hindden-1");
        var content3 = $(".btn-search-1");
        var content4 = $(".hide-header-member");

        if(!content.is(e.target) && content.has(e.target).length === 0
            && !content2.is(e.target)&& !content3.is(e.target)&& !content4.is(e.target) ){

            $(".click-search-show").hide();
        }
    })

});

// menu responsive
function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
        console.log(navbar);
    });
}
toggleMenu();


// when click button ADD TO CART
const btn = document.querySelectorAll("button.btn-product-add")
console.log(btn);

btn.forEach(function (button,index){
    button.addEventListener("click",function (event){{
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement ;
        var productImg = product.querySelector("img.img-product-item").src;
        var productName = product.querySelector("h4.name-product").innerText;
        var productPrice = product.querySelector("p.price-product").innerText;
        console.log(productPrice)

        addCart(productImg,productName,productPrice)
    }})
})


// add product to cart
function addCart(productImg,productName,productPrice){
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0; i < cartItem.length;i++){
        var productTemp = document.querySelectorAll(".title-cart");
        if(productTemp[i].innerText == productName){
            console.log(productTemp[i].innerHTML);
            alert("Product already in the cart. Please increase the product in the cart.");
            return;
        }

    }
    var tr_content = '<tr class="tr-style-cart">\n' +
        '                    <td style="display: flex; align-items: center' +
        '"><img style="width: 70px; padding-left: 10px;" src=" '+productImg+' " alt=""> <span class="title-cart">'+productName+'</span> </td>\n' +
        '                    <td style="padding-left: 30px; font-family: Montserrat, sans-serif; font-size: 12px"><p><span class="cart-to-price">'+productPrice+' </span> $</p></td>\n' +
        '                    <td style="padding-left: 30px;"><input class="input-amount" type="number" value="1" min="1"></td>\n' +
        '                    <td style="cursor: pointer"> <span class="btn-del-cart">Remove</span> </td>\n' +
        '                </tr>'

    addtr.innerHTML = tr_content
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr);
    cartTotal();
    deleteCart();

}

function  cartTotal(){
    var priceAll = 0;
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0; i < cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector(".cart-to-price").innerText;

        var priceProduct = inputValue * productPrice;
        priceProduct = priceProduct
        priceAll =  priceAll + priceProduct;
    }
    addInput();
    var cartIndex = document.querySelector(".sum-product span");
    cartIndex.innerHTML = priceAll;
}


// del product to the cart
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0; i < cartItem.length;i++){
        var productTemp = document.querySelectorAll(".btn-del-cart");
        console.log(productTemp);
        productTemp[i].addEventListener("click", function (event){
            var delCart = event.target;
            var cartItem = delCart.parentElement.parentElement;
            cartItem.remove();

            cartTotal();

        })

    }
}

// khi tawng so luong san pham len

function addInput(){
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0; i < cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change",function (){
            cartTotal();
        })
    }
}

const click_heart = document.querySelectorAll(".fa-heart");
console.log(click_heart);
click_heart.forEach(function (btn_heart,index){
    btn_heart.addEventListener("click",function (event){{
        var btnItem = event.target;
        var blog = btnItem.parentElement.parentElement.parentElement ;
        var blogImg = blog.querySelector("img.img-blog").src;
        var blogName = blog.querySelector("p.caption-blog").innerText;
        console.log(blog)
        console.log(blogImg);
        console.log(blogName);

        addBlog(blogImg, blogName);

    }})
})

function addBlog(blogImg, blogName){

}

