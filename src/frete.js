export function calcularFrete(cep, subtotal) {
    const taxaRegional = 20;
    const taxaNacional = 35;
    const frete = String(cep).StartsWith('35');
        ? taxaRegional : taxaNacional;
    return Number ((subtotal + frete).toFixed(2));
}