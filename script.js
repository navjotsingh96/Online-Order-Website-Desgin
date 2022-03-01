let food = [];
let price = [];
let qunatity = [];
// Calaculation
let totalPortion = [];



function addtoBasket(foods, prices, qunatitys) {
    // if basket not empty
    updateTrolly(foods);
    if (food.length <= 1) {
        let basketEmpty = document.getElementById('basket_none');
        let baskettextEmpty = document.getElementById('basket_item1');
        basketEmpty.classList.add('d-none');
        baskettextEmpty.classList.add('d-none');



    } else {


    }

    // till hire.

    if (food.includes(foods)) {
        let post = food.indexOf(foods);
        qunatity[post]++;

    } else {
        food.push(foods);
        price.push(prices);
        qunatity.push(qunatitys);
        updateBasket();


    }
}

function updateTrolly(foods) {
    totalPortion.push(foods);
    document.getElementById('update-trolly').innerHTML = totalPortion.length;
}

function updateBasket() {
    let sum = 0;
    let basketFood = document.getElementById('basket_item');
    basketFood.innerHTML = ``;
    addPrice = '';


    for (let i = 0; i < food.length; i++) {
        let endPrice = price[i] * qunatity[i];
        sum = sum + endPrice;

        basketFood.innerHTML += `<div class"food_itmes_basket" style="display: flex;align-items: center;">
        <div class="amount_cont"><span class="amount">${qunatity[i]}</span>x</div>
        <div class="food_cont"><span class="food-class">${food[i]}</span></div>
        <div class="plus_cont"> <button class="plus_btn" onclick="plusPrice(${i})">+ </button></div>
        <div class="minus_cont"> <button class="minus_btn" onclick="minusPrice(${i})">-</button></div>
        <div class="price_cont"> <span id="middel_price">${endPrice.toFixed(2)} €</span></div>
 
    <img class="delete_icon" onclick="delete_items(${i})" src="icon/delete-64.png" >
    </div>`;

    }

    priceUpdate(sum);
    delevery(sum);
    zeroGesamt(sum);
    zeroBasket(sum);
    dialogBoix(sum);

}

function priceUpdate(sum) { // delevry possibilty text
    let addPrice = document.getElementById('price1');
    addPrice.innerHTML = sum.toFixed(2);

    if (sum < 15) {

        let text_change = document.getElementById('possibility');

        let notallowed = document.getElementById('to-order');

        notallowed.classList.add('to_order');
        notallowed.classList.remove('allow_click');

        text_change.innerHTML = '';
        text_change.innerHTML = `Sie haben Mindesetbestellwert noch nicht erreicht`;

    } else if (sum > 15) {
        let text_change = document.getElementById('possibility');
        text_change.innerHTML = '';
        text_change.innerHTML = `Sie haben das Wert Mindesbestlelwert errecht`;

        let allowed = document.getElementById('to-order');
        allowed.classList.remove('to_order');
        allowed.classList.add('allow_click');
    }

}

function delevery(sum) { // delevry conditions
    if (sum < 25) {
        let delveryPrice = document.getElementById('del_kosten');
        let all_price = document.getElementById('total_price');
        let lieferfrei = document.getElementById('liefer_from')
        all_price.innerHTML = '';
        lieferfrei.innerHTML = `lieferung ist ab 25,00 € kostenlos`;
        delveryPrice.innerHTML = '';
        delveryPrice.innerHTML = `5,00 €`;
        deverlykoste = 5;
        total = sum + deverlykoste;
        all_price.innerHTML = total + `€`;

    } else if (sum > 25) {
        let lieferfrei = document.getElementById('liefer_from')
        let all_price = document.getElementById('total_price');
        let delveryPrice = document.getElementById('del_kosten');
        lieferfrei.innerHTML = '';
        lieferfrei.innerHTML = `lieferung ist jetzt kostenlos`;
        delveryPrice.innerHTML = `Lieferung kostenlos`;
        deverlykoste = 0;
        total = sum + deverlykoste;
        all_price.innerHTML = total.toFixed(2) + `€`;
    }

}

function zeroGesamt(sum) { //Price to zero
    if (sum == 0) {
        let delveryPrice = document.getElementById('del_kosten');
        let all_price = document.getElementById('total_price');
        delveryPrice.innerHTML = `0,00 €`;
        deverlykoste = 0;
        total = sum + deverlykoste;
        all_price.innerHTML = total.toFixed(2) + `€`;
    }
}

function zeroBasket(sum) { // if basket empty
    if (sum == 0) {
        let basketEmpty = document.getElementById('basket_none');
        let baskettextEmpty = document.getElementById('basket_item1');
        basketEmpty.classList.remove('d-none');
        baskettextEmpty.classList.remove('d-none');
        let lieferfrei = document.getElementById('liefer_from')
        let text_change = document.getElementById('possibility');
        text_change.innerHTML = `Das Mindestbestellwert ist 15,00 €`;
        lieferfrei.innerHTML = '';
        lieferfrei.innerHTML = `lieferung ist ab 25,00 € kostenlos`;
    }
}

//Basket responsuve

function open_basket() {
    let showBasket = document.getElementById('basket_container');
    let restLogo = document.getElementById('hide_logo');

    showBasket.classList.toggle('hide_responsvie');

    setTimeout(function() {
        restLogo.classList.toggle('hide_logos');

        showBasket.classList.toggle('d-none');
    }, 225);





}


function delete_items(i) {
    food.splice(i, 1);
    price.splice(i, 1);
    qunatity.splice(i, 1)
    updateBasket();

}

function plusPrice(i) {
    qunatity[i]++;
    updateBasket();

}

function minusPrice(i) {

    if (qunatity[i] > 1) {
        qunatity[i]--;
        updateBasket();
    } else {
        delete_items(i);

    }

}

window.onscroll = basketScroll;

function basketScroll() {
    if (window.pageYOffset > 72) {

        document.getElementById('basket_container').style.top = `0px`;
        document.getElementById('basket_container').style.position = `fixed`;
    } else {
        document.getElementById('basket_container').style.top = `72px`;
    }
}

function trollyBottom() {
    if (window.scrollY > 1818) {
        console.log('Hello');
    }
}


function mobileaddDialog() {
    open_basket();

}

function dialogBoix(sum) {

    if (sum > 1) {
        let openDialog = document.getElementById('mobile_dia');
        openDialog.classList.remove('opacity_prop');
    }

}