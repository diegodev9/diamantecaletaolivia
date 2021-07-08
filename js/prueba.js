var total = 0;
function sumar_items() {
  var regex = /(\d+)/g;
  var cantidad = 0;
  var precio = 0;
  var total = 0;
  var quantity = parseInt(document.getElementById("quantity_wanted").value);
  if (document.getElementById("group_3") == "Venta x Metro") {
    quantity = 10;
  }
  if (quantity <= 1) {
    cantidad = 1;
  } else {
    cantidad = quantity;
  }
  precio = document
    .getElementById("precio-unitario")
    .textContent.match(regex)
    .join(".");

  total = parseFloat(cantidad * precio);
  return total;
}
if (document.getElementById("quantity_wanted").value > 1) {
  document.getElementById("precio-total").value = sumar_items() + " $ Total";
} else {
  document.getElementById("precio-total").value = "";
}
