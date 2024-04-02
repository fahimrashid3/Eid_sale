function myFunction(name,price){
    
    const itemName= document.getElementById(name).innerText;
   
    console.log(itemName);
    

    // get the item price
    const itemPriceField=document.getElementById(price);
    const itemPricesString= itemPriceField.innerText;
    const itemPriceInt=parseFloat(itemPricesString);

    // console.log(itemPriceInt);


    // get the value of total price
    const totalPriceField=document.getElementById('total-price');
    const totalPriceString=totalPriceField.innerText;
    const totalPriceInt=parseFloat(totalPriceString);

    // console.log(totalPriceInt);

    // get the value of discount
    const DiscountField=document.getElementById('discount');
    const DiscountString=DiscountField.innerText;
    const DiscountInt=parseFloat(DiscountString);

    // console.log(DiscountInt);


    // get the value of total
    const totalField=document.getElementById('total');
    const totalString=totalField.innerText;
    const totalInt=parseFloat(totalString);

    // console.log(totalInt);


    // set new total price
    const newItemPrice=itemPriceInt+totalPriceInt;
    totalPriceField.innerText=newItemPrice;
    // console.log(newItemPrice);

    if(newItemPrice>=200){

    const couponInputField=document.getElementById('coupon-input');
    couponInputField.disabled=false;

    


    // set new discount
    const newDiscount1Percent=newItemPrice/100;
    const newDiscount=newDiscount1Percent*20;
    DiscountField.innerText=newDiscount;

    // set new total
    const newTotalTemp=newItemPrice-newDiscount;
    const total=newTotalTemp+DiscountInt;
    totalField.innerText=total;




    }

}