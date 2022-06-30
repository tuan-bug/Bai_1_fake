
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

    $(".nav-more").click(function (){
        $(".dropdown").show();
    })

    $(".click-search").click(function (){
        $(".drop-hidden").show();
        $(".fifth").addClass("nav-hinden");
        $(".input-responsive").addClass("input-responsive-click");
        $(".click-search").addClass("m-search-box");
        $(".nav-all").addClass("m-nav-all");
        $(".icon-search").addClass("mt-icon-search");
        $(".icon-search").addClass("scree-search");
    })

    $('body').on('click',(e) => {
        console.log("body body 000 ........");
        var content = $(".click-search");
        var content2 = $(".nav-more");
        if(!content.is(e.target) && content.has(e.target).length === 0 && !content2.is(e.target) ){
            console.log("body body ........");
            $(".drop-hidden").hide();
            $(".fifth").removeClass("nav-hinden");
            $(".input-responsive").removeClass("input-responsive-click");
            $(".click-search").removeClass("m-search-box");
            $(".nav-all").removeClass("m-nav-all");
            $(".icon-search").removeClass("mt-icon-search");
            $(".icon-search").removeClass("scree-search");
            $(".dropdown").hide();
        }
    })

    // $('body').click(function (){
    //     console.log("body body ........");
    //     $(".drop-hidden").hidden;
    //     $(".fifth").remove("nav-hinden");
    //     $(".input-responsive").remove("input-responsive-click");
    //     $(".click-search").remove("m-search-box");
    //     $(".nav-all").remove("m-nav-all");
    //     $(".icon-search").remove("mt-icon-search");
    // })


});




function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
        console.log(navbar);
    });
}
toggleMenu();



const btn = document.querySelectorAll("button.btn-product-add")
console.log(btn);

btn.forEach(function (button,index){
    // console.log(button,index);
    button.addEventListener("click",function (event){{
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement ;
        var productImg = product.querySelector("img.img-product-item").src;
        var productName = product.querySelector("p.name-product").innerText;
        var productPrice = product.querySelector("p.price-product").innerText;
        // console.log(product)
        // console.log(productImg);
        // console.log(productName);
        console.log(productPrice)

        addCart(productImg,productName,productPrice)
    }})
})


// them san pham vao trong gio hang
function addCart(productImg,productName,productPrice){
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0; i < cartItem.length;i++){
        var productTemp = document.querySelectorAll(".title-cart");
        if(productTemp[i].innerText == productName){
            console.log(productTemp[i].innerHTML);
            alert("Sản phẩm đã có trong giỏ hàng");
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
    // console.log(cartItem)
    for(var i = 0; i < cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector(".cart-to-price").innerText;

        var priceProduct = inputValue * productPrice;
        priceProduct = priceProduct
        priceAll =  priceAll + priceProduct;
        // console.log(priceAll)
    }
    addInput();
    var cartIndex = document.querySelector(".sum-product span");
    cartIndex.innerHTML = priceAll
    console.log(cartIndex);
    // khi tang so luong hang len


}


// xoa ra khoi gio hang

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
    // console.log(i,index);
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

function addProduct(){
    alert("Please wait......");
}


