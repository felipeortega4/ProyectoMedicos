function calcularTotal() {
    let precioPro = parseFloat(document.getElementById("precio").value);
    let cantidadPro = parseInt(document.getElementById("cantidad").value);

    let sTotal = precioPro * cantidadPro;
    let total = 0;
    let mensaje;

    if (cantidadPro < 6) {
        total = sTotal;
        mensaje = "Usted no tiene descuento.";
    } else if (cantidadPro >= 6 && cantidadPro <= 12) {
        total = sTotal - (sTotal * 0.10);
        mensaje = "Usted tiene un descuento del 10%.";
    } else if (cantidadPro > 12) {
        total = sTotal - (sTotal * 0.20);
        mensaje = "Usted tiene un descuento del 20%.";
    }

 
    document.getElementById("total").textContent = `Total a pagar: $${total.toFixed(2)}`;
    document.getElementById("mensaje").textContent = mensaje;
}
function buscarpro() {
    let productos = [
        { nombre: "arroz", precio: 2.50 },
        { nombre: "azucar", precio: 1.50 },
        { nombre: "aceite", precio: 1.00 },
        { nombre: "sal", precio: 0.50 },
        { nombre: "cafe", precio: 1.00 },
        { nombre: "fideos", precio: 1.50 },
    ];

    let nprodoc = document.getElementById("nameproducto").value.trim().toLowerCase();  

    
    let productoencontra = productos.find(producto => producto.nombre.trim().toLowerCase() === nprodoc);

    
    if (productoencontra) {
        document.getElementById("precio").value = productoencontra.precio.toFixed(2); 
    } else {
        document.getElementById("precio").value = 
    }
}
