function myFunction(name,price){
    
    const itemName= document.getElementById(name).innerText;
   
    // console.log(itemName);
    

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
    

    // console.log(totalInt);

    // set new total price
    const newItemPrice=itemPriceInt+totalPriceInt;
    totalPriceField.innerText=newItemPrice;
    // console.log(newItemPrice);

    // reset total and discount field 
    totalField.innerText=newItemPrice;
    DiscountField.innerText='00';

    if(newItemPrice>=200){

        const couponInputField=document.getElementById('coupon-input');
        couponInputField.disabled=false;

    }

   
    
    document.getElementById('discount-apply').addEventListener('click',function(){

        const couponInputField=document.getElementById('coupon-input');
        const coupon=couponInputField.value;
        const validCoupon='SELL200';

        if(coupon==validCoupon){
            // set new discount
            const newDiscount1Percent=newItemPrice/100;
            const newDiscount=newDiscount1Percent*20;
            const newDiscountFixed=newDiscount.toFixed(2);
            DiscountField.innerText=newDiscountFixed;
        
            // set new total
            const newTotalTemp=newItemPrice-newDiscount;
            const total=newTotalTemp+DiscountInt;
            const totalFixed=total.toFixed(2);
            totalField.innerText=totalFixed;
           
        }
        else if(coupon==''){
            alert('Please input a coupon.');            
        }
        else{
            alert('Invalid coupon.');            
        }

        couponInputField.value='';
        

    })

  

    // add to item cart section
    addToCart(itemName,itemPriceInt);

}
function addToCart(name,price){
    const itemListSection=document.getElementById('item_list');
    const p=document.createElement('p');
    p.innerHTML=`${name} ${price} <button id="quantity" class="btn btn-ghost">Remove</button>`;
    itemListSection.appendChild(p);


}




document.getElementById('sell200-btn').addEventListener('click',function(){
    const totalPriceField=document.getElementById('total-price');
    const totalPriceString=totalPriceField.innerText;
    const totalPriceInt=parseFloat(totalPriceString);
    
    if(totalPriceInt>=200){
        const couponInputField=document.getElementById('coupon-input');
        couponInputField.value='SELL200';
    }
    if(totalPriceInt==0){
        alert("Select item to use coupon");
    }
})

document.getElementById('make-purchase').addEventListener('click',function(){

    const totalField=document.getElementById('total');
    const total =totalField.innerText

    if(total>0){
    my_modal_make_purchase.showModal();
    }
    else{
        alert('Add some item to make purchase')
    }
})

document.getElementById('go-home').addEventListener('click',function(){

    const totalPriceField=document.getElementById('total-price');
    const discountField=document.getElementById('discount');
    const totalField=document.getElementById('total');

    totalPriceField.innerText='00';
    discountField.innerText='00';
    totalField.innerText='00'

    const itemListSection=document.getElementById('item_list');
    itemListSection.innerHTML='';

    

})