const cart = `<svg fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>`;
$(document).ready(() => {
  fetch("data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((item) => {
        let itemContainer = $("<div></div>");
        itemContainer.attr("id", item.name);
        itemContainer.addClass("item-container");

        let btnAndImage = $("<div></div>");
        btnAndImage.addClass("btn-image");

        let pic = $("<img>");
        pic.addClass("item-pic");

        let svgHolder = $("<div></div>");
        svgHolder.addClass("svg-holder");
        svgHolder.append(cart);

        let clickSection = $("<div></div>");
        clickSection.addClass("click-section");

        let cartBtn = $("<button></button>");
        cartBtn.addClass("cart-btn");
        cartBtn.attr("value", item.name);

        let btnText = $("<span>Add to cart</span>");
        cartBtn.append(svgHolder, btnText);

        if (window.matchMedia("(max-width: 480px)").matches) { 
          pic.attr("src", item.image.mobile);
        } else if (window.matchMedia("(max-width: 1280px)").matches) {
          pic.attr("src", item.image.tablet);
        } else {
          pic.attr("src", item.image.desktop);
        }
        //appending pic and btn

        //setting up cart button function
        cartBtn.click(function () {
          cartButton($(this).attr("value"))
        }); //end of cartBtn click fun

        clickSection.append(cartBtn);

        btnAndImage.append(pic, clickSection);

        let itemInfor = $("<div></div>");
        itemInfor.attr("id", "item-infor");

        let itemCategory = $("<h5></h5>");
        itemCategory.addClass("item-category");
        itemCategory.text(item.category);

        let itemName = $("<h3></h3>");
        itemName.addClass("item-name");
        itemName.text(item.name);

        let itemPrice = $("<h3></h3>");
        itemPrice.addClass("item-price");

        let finalPrice =
          item.price.toString().split(".").length === 1
            ? item.price + ".00"
            : item.price + "0";
        itemPrice.text("$" + finalPrice);

        itemInfor.append(itemCategory, itemName, itemPrice);

        //now append to main dom
        itemContainer.append(btnAndImage, itemInfor);
        $("#item-display").append(itemContainer);
      }); //end of each loop
    })
    .catch((err) => console.log(err));
}); //end of document ready
