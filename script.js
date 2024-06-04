document.addEventListener('DOMContentLoaded', function () {
    const subscribeButton = document.querySelector('.bg-sec .srch button');
    const emailInput = document.querySelector('.bg-sec .srch input');
    const subscriptionMessage = document.querySelector('.subscription-message');

    subscribeButton.addEventListener('click', function (e) {
        e.preventDefault();
        const email = emailInput.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            subscriptionMessage.textContent = 'Thank you for subscribing!';
            subscriptionMessage.style.color = 'green';
        } else {
            subscriptionMessage.textContent = 'Please enter a valid email address.';
            subscriptionMessage.style.color = 'red';
        }
    });
});
