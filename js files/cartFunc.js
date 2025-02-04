var order_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
<path d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z" fill="#1EA575"/>
<path d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z" fill="#1EA575"/>
</svg>`

const carBon_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>`
const removeElement = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`
const defualtSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128"><path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z" opacity=".15"/><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"/><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"/><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16"/><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"/><path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"/><path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"/><path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"/></svg>`
const decrementSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>`
const incrementSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>`

function createCartItems(dessert) {
  let list = $("<ul></ul>");
  list.attr("id", "ul-list");
  let listItem = $("<li></li>");

  let itemNameAndqauntity = $("<div></div>");

  let btnSvgHolder = $('<div></div>')
  btnSvgHolder.addClass('btn-svg-holder')
  btnSvgHolder.append(removeElement)

  let deleteBtn = $("<button></button>");
  deleteBtn.append(btnSvgHolder)
  deleteBtn.click(function(){
    let currentList = $(this).closest('li')

    let currentItem = $('.item-container').filter(function(){
      return $(this).find('.item-name').text() === currentList.find('.item-cart-name').text()
    })

  currentItem.find('.item-pic').css('border', 'none')
  currentItem.find(".click-section").css('background', 'none')

  let svgHolder = $("<div></div>");
        svgHolder.addClass("svg-holder");
        svgHolder.append(cart);

        let cartBtn = $("<button></button>");
        cartBtn.addClass("cart-btn");
        cartBtn.attr("value", currentItem.find('.item-name').text());

        let btnText = $("<span>Add to cart</span>");
        cartBtn.append(svgHolder, btnText);
        cartBtn.click(function(){
          cartButton($(this).attr("value"))
        })
        currentItem.find('.click-section').empty().append(cartBtn)

    removeListItem(currentList.find('.item-cart-name').text())
})//end of delete button func

  let itemName = $("<h3></h3>");
  itemName.addClass("item-cart-name");
  itemName.text(dessert.find(".item-name").text());

  let itemDetails = $("<h4></h4>");
  itemDetails.addClass("original-price");

  let qauntity = $("<span></span>");
  qauntity.addClass("qauntity");

  let itemPrice = $("<span></span>");
  itemPrice.addClass("item-cart-price");

  itemPrice.text("@ " + dessert.find(".item-price").text());

  let itemTotal = $("<span></span>");
  itemTotal.addClass("item-total");

  //purchase and amount values
  let purchase = $("<div></div>");
  purchase.attr("id", "purchase");

  let titleAmount = $("<h4>Order Total</h4>");
  titleAmount.attr("id", "title-amount");

  let amount = $("<h1>$0.00</h1>");
  amount.attr("id", "amount");

  purchase.append(titleAmount, amount);

  let carBonParagraph = $('<p></p>')
  carBonParagraph.attr('id', 'carBon-paragraph')
  carBonParagraph.append(carBon_svg)
  carBonParagraph.append(' This is a&nbsp<strong>carbon-neutral</strong>&nbspdelivery');

  let confirmBtn = $("<button>Confirm Order</button>");
  confirmBtn.attr("id", "confirm-btn");

  confirmBtn.click(()=>{
    openDialog()
    $('#confirm-dialog')[0].showModal()
  })

  //removing default items
  if ($("#item-cart ul").length === 0) {
    while ($("#item-cart").children().length > 1) {
      $("#item-cart").children().last().remove();
    } //end of while loop
    $("#item-cart").append(list, purchase,carBonParagraph, confirmBtn);
  } //end of outer if

  qauntity.text("0x");
  itemTotal.text("$0.00");

  itemDetails.append(qauntity, itemPrice, itemTotal);
  itemNameAndqauntity.append(itemName, itemDetails);
  listItem.append(itemNameAndqauntity, deleteBtn);
  $("#ul-list").append(listItem);

} //add of create cart item func

function cartButton(dessertName){
  let currentItem = $(".item-container").filter(function () {
    return $(this).attr("id") === dessertName;
  })

  let incrementBtn = $("<button></button>");
  incrementBtn.append(incrementSvg)
  incrementBtn.attr("id", "increment");
  incrementBtn.attr('value', currentItem.find('.item-name').text())
  incrementBtn.addClass("add-subract");

  let decrementBtn = $("<button></button>");
  decrementBtn.append(decrementSvg)
  decrementBtn.attr("id", "decrement");
  decrementBtn.attr('value', currentItem.find('.item-name').text())
  decrementBtn.addClass("add-subract");

  let countValue = $("<span></span>");
  countValue.addClass("count-value");

  currentItem
    .find(".click-section")
    .empty()
    .append(decrementBtn, countValue, incrementBtn);

  currentItem.find('.item-pic').css('border', '2.5px solid hsl(20, 50%, 48%)')
  currentItem.find(".click-section").css('background-color', 'hsl(14, 86%, 42%)')

  incrementBtn.click(function () {
    incrementDecrement($(this).attr("id"), currentItem);
  });

  decrementBtn.click(function () {
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
  return $(this).find("h3").text() === dessertName;
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

}//end of cart btn func

function incrementDecrement(crrValue, crrContainer) {
  let itemName = crrContainer.find(".item-name").text();
  // console.log(`This is the current elment being clicked: \n${itemName}`)

  //getting the li element with value to modify
  let listItem = $("#item-cart ul li").filter(function () {
    return $(this).find(".item-cart-name").text() === itemName;
  });

  let num = Number($("#counter").text());
  let numberOfItems = Number(listItem.find(".qauntity").text().split("x")[0]);
  let btnCount = Number(crrContainer.find(".count-value").text());
  
  let addPrice = listItem.find(".item-total").text() !== '' ? Number(listItem.find(".item-total").text().split("$")[1]) : 0
  let overoll = Number($("#amount").text().split("$")[1]);

  if (crrValue === "increment") {
    ++num;
    ++numberOfItems;
    ++btnCount;
    overoll += Number(listItem.find(".item-cart-price").text().split("$")[1]);
    addPrice += Number(listItem.find(".item-cart-price").text().split("$")[1]);
  } //end of if
  else {
    if (btnCount !== 0) {
      --num;
      --numberOfItems;
      --btnCount;
      overoll -= Number(listItem.find(".item-cart-price").text().split("$")[1]);
      addPrice -= Number(
        listItem.find(".item-cart-price").text().split("$")[1]
      );
    }
  } //end  outer else

  $("#counter").text(num.toString());
  listItem.find(".qauntity").text(`${numberOfItems}x`);
  crrContainer.find(".count-value").text(`${btnCount}`);
  if (addPrice < 0) {
    addPrice = 0;
  }
  let correctPrice =
    addPrice.toString().split(".").length === 1
      ? addPrice + ".00"
      : addPrice + "0";
  let format =
    overoll.toString().split(".").length === 1
      ? overoll + ".00"
      : overoll + "0";
  $("#amount").text("$" + format);
  listItem.find(".item-total").text("$" + correctPrice);

  if(crrContainer.find('.count-value').text() === '0'){
    crrContainer.find('.item-pic').css('border', 'none')
    crrContainer.find(".click-section").css('background', 'none')
    let svgHolder = $("<div></div>");
        svgHolder.addClass("svg-holder");
        svgHolder.append(cart);

        let cartBtn = $("<button></button>");
        cartBtn.addClass("cart-btn");
        cartBtn.attr("value", crrContainer.find('.item-name').text());

        let btnText = $("<span>Add to cart</span>");
        cartBtn.append(svgHolder, btnText);
        cartBtn.click(function(){
          cartButton($(this).attr("value"))
        })
        crrContainer.find('.click-section').empty().append(cartBtn)

        removeListItem(crrContainer.find('.item-name').text())
  }//end of if counte value equals to zero

} //end of increment decrement func

function removeListItem(listName){
 let currentListItem = $('#item-cart li').filter(function(){return $(this).find('.item-cart-name').text() === listName})

 $('#counter').text( Number($('#counter').text()) - Number(currentListItem.find('.qauntity').text().split('x')[0]))
 let priceSetup = Number($('#purchase').find('#amount').text().split('$')[1]) - Number(currentListItem.find('.item-total').text().split('$')[1])
  let finalPriceSet = priceSetup.toString().split('.').length === 1 ? priceSetup + '.00' : priceSetup + '0'
    $('#purchase').find('#amount').text('$' + finalPriceSet)

    currentListItem.empty().remove()

    if($('#counter').text() === '0'){
      while($('#item-cart').children().length > 1) {
        $('#item-cart').children().last().empty().remove()
      }//end of while loop

      let para = $('<p>Your added items will appear here</p>')
      $('#item-cart').append(defualtSvg, para)

    }//end of if

}//end of remove list item

function openDialog(){

    let dialog = $('<dialog></dialog>')
    dialog.attr('id', 'confirm-dialog')

    let dialogHeader = $('<header></header')
    let itemOrderedList = $('<ul></ul>')
    let orderConfirmTitle = $('<h1>Order Confirmed</h1>')
    let dialogParagraph = $('<p>We hope you enjoy your food!</p>')
    let startOrderBtn = $('<button>Start New Order</button>')
    startOrderBtn.attr('id', 'start-order-btn')
    startOrderBtn.click(()=>{location.reload()})

    let svgHold = $('<div></div>')
    svgHold.append(order_svg)

    dialogHeader.append(svgHold, orderConfirmTitle, dialogParagraph)

    let cartItemList = $('#item-cart ul li').toArray()

    cartItemList.forEach((item)=>{
      
        let thumbList = $('<li></li>') 
        //i need 2 div and an h1
        let thumPicbHolder = $('<div></div>')
        thumPicbHolder.addClass('thumb-holder')

        let thumbPic = $('<img>')
        thumbPic.addClass('thumb-pic')

        fetch("data.json")
        .then(res =>{

          if(!res.ok){
            throw new Error('Invalid response..!')
          }
          else{return res.json()}
        })
        .then(data =>{

          data.forEach((dessert)=>{

            if($(item).find('h3').text() === dessert.name){
            thumbPic.attr("src", dessert.image.thumbnail)
            }
            // if(data[i].name === item_name){}//end of if
          })

        })
        .catch(err => console.error(err))

        thumPicbHolder.append(thumbPic)
        thumbList.append(thumPicbHolder)

        let details = $('<div></div>')
        details.addClass('details')

        let item_name = $('<h4></h4>')
        item_name.addClass('name-title')
        item_name.text($(item).find('h3').text())
        details.append(item_name)

        let item_infor= $('<h5></h5>')
        item_infor.addClass('item-mini-infor')

        let numberOfItemsList = $('<span></span>')
        numberOfItemsList.addClass('number-of-list-items    ')
        numberOfItemsList.text($(item).find('.qauntity').text())
        
        let itemListPrice = $('<span></span>')
        itemListPrice.addClass('item-list-price')
        itemListPrice.text($(item).find('.item-cart-price').text())
        
        item_infor.append(numberOfItemsList, itemListPrice)

        details.append(item_name, item_infor)

        let totalPrice = $('<h4></h4>')
        totalPrice.addClass('total-price')
        totalPrice.text($(item).find('.item-total').text())

        thumbList.append(details, totalPrice)
        itemOrderedList.append(thumbList)

    })//end of the first each loop
    itemOrderedList.append($('#purchase'))
    dialog.append(dialogHeader, itemOrderedList, startOrderBtn);

    $('body').append(dialog)
    dialog.css('display', 'flex')
}//end of open dialog