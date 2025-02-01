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
        cartBtn.append(svgHolder);
        // cartBtn.text('Add to Cart')

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
          let crrValue = $(this).attr("value");

          //get the current i am working with
          let currentItem = $(".item-container").filter(function () {
            return $(this).attr("id") === crrValue;
          });

          let clickArray = $(
            ".item-container .btn-image .click-section"
          ).toArray();

          //reseting click section to asingle btn
          for (let i = 0; i < clickArray.length; i++) {
            if ($(clickArray[i]).children().length > 1) {
              // console.log($(clickArray[i]).parents(".item-container").attr('id'))
              let crrName = $($(".item-container").toArray()[i])
                .find(".item-name")
                .text();

              let cartList = $("#item-cart ul li").filter(function () {
                return $(this).find(".item-cart-name").text() === crrName;
              });

              if (cartList.find(".qauntity").text() === "0x") {
                cartList.empty().remove();
              }

              cartBtn.attr("value", crrName);
              $(clickArray[i]).empty().append(cartBtn);
              $(clickArray[i]).css('background-color', 'hsl(20, 50%, 98%)')
              break;
            }
          } //end of 4 loop

          let incrementBtn = $("<button>+</button>");
          incrementBtn.attr("id", "increment");
          incrementBtn.addClass("add-subract");

          let decrementBtn = $("<button>-</button>");
          decrementBtn.attr("id", "decrement");
          decrementBtn.addClass("add-subract");

          let countValue = $("<span></span>");
          countValue.addClass("count-value");

          currentItem
            .find(".click-section")
            .empty()
            .append(decrementBtn, countValue, incrementBtn);

            currentItem.find(".click-section").css('background-color', 'hsl(14, 86%, 42%)')

          $(".add-subract").click(function () {
            incrementDecrement($(this).attr("id"), currentItem);
          });

          let listArray = $("#item-cart ul li div h3")
            .toArray()
            .map((textItem) => $(textItem).text());

          if (!listArray.includes(currentItem.attr('id'))) {
            createCartItems(currentItem);
          }

          //getting the list item in the cart item menu
          let crrItem = $("#item-cart ul li").filter(function () {
            return $(this).find("h3").text() === crrValue;
          }); //end of filter func

          //changin qauntity
          let num = Number(crrItem.find(".qauntity").text().split("x")[0]);
          ++num;
          countValue.text(`${num}`);

          if (crrItem.length === 0) {
            console.log("this item deos not exist..!");
          }

          crrItem.find(".qauntity").text(`${num}x`);

          //changin total price
          let overRollPrice = Number($("#amount").text().split("$")[1]);

          let prices = Number(crrItem.find(".item-total").text().split("$")[1]);
          prices += Number(crrItem.find(".item-cart-price").text().split("$")[1]);
          overRollPrice += Number(crrItem.find(".item-cart-price").text().split("$")[1])
          let finalPrice =
            prices.toString().split(".").length === 1
              ? prices + ".00"
              : prices + "0";
          overRollFormat =
            overRollPrice.toString().split(".").length === 1
              ? overRollPrice + ".00"
              : overRollPrice + "0";
          $("#amount").text("$" + overRollFormat);
          crrItem.find(".item-total").text("$" + finalPrice);

          //changing cart qauntity
          let cartCount = Number($("#item-cart h1 span").text());
          $("#item-cart h1 span").text(`${++cartCount}`);
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
