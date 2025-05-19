document.getElementById("payment-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const method = document.querySelector('input[name="payment"]:checked').value;
  document.getElementById("result").textContent = "Kamu memilih: " + method;
});