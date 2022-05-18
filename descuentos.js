'use strict'

// const precioInicial = 120;
// const descuento = 18;

function calcularPrecioDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento
};

function buttonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value

    const PrecioDescuento = calcularPrecioDescuento(priceValue, discountValue)
    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = "El total a pagar con el descuento del "+discountValue+"% es: "+ PrecioDescuento;

}


function buttonPriceDiscountWhitCoupon(){
    const coupon = ["especial15", "fantastico30", "increible50"];

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value

    let descuento;

    switch (couponValue) {
        case "especial15":
            descuento = 15;
            break;
        case "fantastico30":
            descuento = 30;
            break;
        case "increible50":
            descuento = 50;
            break;

        default:
            descuento = 0;
            break;
    };

    const PrecioDescuento = calcularPrecioDescuento(priceValue, descuento)
    const resultWhitCoupon = document.getElementById("resultWhitCoupon")
    resultWhitCoupon.innerText = "El total a pagar con el descuento del "+descuento+"% es: "+ PrecioDescuento;
}

