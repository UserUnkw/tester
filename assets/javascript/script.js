function enableButton() {
	var checkbox = document.getElementById("agree");
	var button = document.getElementById("checkout-btn");
	if (checkbox.checked) {
	  button.disabled = false;
	} else {
	  button.disabled = true;
	}
  }
  