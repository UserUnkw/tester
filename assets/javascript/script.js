const checkbox = document.getElementById('agree-checkbox');
const checkoutBtn = document.getElementById('checkout-btn');

checkbox.addEventListener('change', function() {
	checkoutBtn.disabled = !this.checked;
});
