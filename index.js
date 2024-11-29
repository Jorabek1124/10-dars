let totalPrice = 0;

function addToCart(price) {
    totalPrice += price;
    document.getElementById('total-price').innerText = `Umumiy Narx: ${totalPrice} USD`;
}


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            
            const price = parseInt(this.previousElementSibling.innerText.split(' ')[0].replace(',', ''));
            addToCart(price);
        });
    });
});