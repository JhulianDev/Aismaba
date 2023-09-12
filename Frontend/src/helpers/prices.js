export const formatPrice = new Intl.NumberFormat("es-AR", {
  currency: "ARS",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const calculateTotalValue = (items, currency, dolarValue) => {

  let totalValue = 0;

  items.forEach((item) => {
    totalValue += currency === "ARS" ? item.precio * dolarValue : item.precio;
  });

  return totalValue;
};