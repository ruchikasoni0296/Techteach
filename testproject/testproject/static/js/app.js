(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // document.querySelector(".theme-btn").addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
    // })
})();


function paymentSuccess(paymentMethod) {
    clearTimeout(this.timeout);
    document.getElementById('paymentSuccessMessage').style.display = 'block';
    document.getElementById('paymentSuccessMessage').innerHTML = 'Successfully paid with ' + paymentMethod + '!';
    this.timeout = setTimeout(function() {
        document.getElementById('paymentSuccessMessage').style.display = 'none';
    }, 5000);
}