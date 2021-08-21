const memory8GBbtn = document.getElementById('memory-8GB-btn');
const memory16GBbtn = document.getElementById('memory-16GB-btn');
const memoryCostField = document.getElementById('memory-cost');
const storage256GBbtn = document.getElementById('storage-256GB-btn');
const storage512GBbtn = document.getElementById('storage-512GB-btn');
const storageButton1TB = document.getElementById('storage-1TB-btn');
const storageCostField = document.getElementById('storage-cost');
const deliveryChargedbBtn = document.getElementById('delivery-charged-btn');
const deliveryChargeField = document.getElementById('delivery-charge');
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');
let totalFinal = document.getElementById('total-final');

memory8GBbtn.addEventListener('click', function () {

})
memory16GBbtn.addEventListener('click', function () {
    memoryCostField.innerText = "180"
    updateTotalPrice()
    updateFinalTotal()
})

storage512GBbtn.addEventListener('click', function () {
    storageCostField.innerText = "100"
    updateTotalPrice()
    updateFinalTotal()
})

storageButton1TB.addEventListener('click', function () {
    storageCostField.innerText = "180"
    updateTotalPrice()
    updateFinalTotal()
})

deliveryChargedbBtn.addEventListener('click', function () {
    deliveryChargeField.innerText = "20"
    updateTotalPrice()
    updateFinalTotal()
})
bestPrice.innerText = "1299"
updateTotalPrice()
updateFinalTotal()
function updateTotalPrice() {
    let memoryCost = parseInt(memoryCostField.innerText);
    let storageCost = parseInt(storageCostField.innerText);
    let deliveryCost = parseInt(deliveryChargeField.innerText);
    let getBestPrice = parseInt(bestPrice.innerText);
    let subTotalPrice = memoryCost + storageCost + deliveryCost + getBestPrice;
    totalPrice.innerText = subTotalPrice;
    return totalPrice.innerText;

}
function updateFinalTotal() {
    let memoryCost = parseInt(memoryCostField.innerText);
    let storageCost = parseInt(storageCostField.innerText);
    let deliveryCost = parseInt(deliveryChargeField.innerText);
    let getBestPrice = parseInt(bestPrice.innerText);
    let subTotalPrice = memoryCost + storageCost + deliveryCost + getBestPrice;
    totalFinal.innerText = subTotalPrice;
}

function promoApply(){
    document.getElementById('promo-code-btn').addEventListener('click', function(){
        const promoCodeField = document.getElementById('promo-code');
        const promoCode = promoCodeField.value ;
        promoCodeField.value = '';
        if(promoCode == 'stevekaku'){
            const promo = subTotalPrice * 0.2  ;
             console.log(subTotalPrice - promo) ;
           
        } 
    }) 
    
}

promoApply()






