let imgProducto = document.getElementById("imgProducto");
let miniaturas = document.querySelectorAll(".miniaturas img");

function setMini(pos) {
    if (pos == '0') {
        imgProducto.style.transform = "rotateZ(0deg)";
    }
    if (pos == '1') {
        imgProducto.style.transform = "rotateZ(35deg)";
    }
    if (pos == '2') {
        imgProducto.style.transform = "rotateZ(-55deg) scale(0.75)";
    }

    miniaturas.forEach((miniatura, index) => {
        miniatura.style.backgroundColor = "#fff1d9"; // Reset background color
        if (index == pos) {
            miniatura.style.backgroundColor = "#fdc10e"; // Highlight selected
        }
    });
}

let sizes = document.querySelectorAll(".info-detalle button");

function setSize(pos) {
    sizes.forEach((size, index) => {
        size.style.backgroundColor = "#fff1d9"; // Reset background color
        if (index == pos) {
            size.style.backgroundColor = "#fdc10e"; // Highlight selected
        }
    });
}

// MENU RESPONSIVE
let menu_responsive_visible = false;
let nav_responsive = document.getElementById("nav-responsive");
let nav = document.getElementById("nav");
let close_responsive = document.getElementById("close-responsive");

nav_responsive.onclick = function() {
    if (menu_responsive_visible == false) {
        nav.className = "menu-responsive";
        menu_responsive_visible = true;
    }
}
close_responsive.onclick = function() {
    if (menu_responsive_visible == true) {
        nav.className = "";
        menu_responsive_visible = false;
    }
}

// Funcionalidad del carrito
let productos = document.querySelectorAll('.fila');

productos.forEach(producto => {
    const btnAumentar = producto.querySelector('.btn-aumentar');
    const btnDisminuir = producto.querySelector('.btn-disminuir');
    const totalCantidad = producto.querySelector('.total-cantidad');
    const btnEliminar = producto.querySelector('.btn-eliminar');

    let cantidad = 1;

    btnAumentar.addEventListener('click', () => {
        cantidad++;
        totalCantidad.textContent = cantidad;
        actualizarTotal();
    });

    btnDisminuir.addEventListener('click', () => {
        if (cantidad > 1) {
            cantidad--;
            totalCantidad.textContent = cantidad;
            actualizarTotal();
        }
    });

    btnEliminar.addEventListener('click', () => {
        producto.remove();
        actualizarTotal();
    });
});

function actualizarTotal() {
    let total = 0;
    productos.forEach(producto => {
        const precio = parseFloat(producto.querySelector('.precio span').textContent.replace(/[$.]+/g, '').trim());
        const cantidad = parseInt(producto.querySelector('.total-cantidad').textContent);
        total += precio * cantidad;
    });
    document.querySelector('.monto').textContent = `$ ${total.toLocaleString()}`;
}

document.getElementById('btnPagar').addEventListener('click', () => {
    const totalCompra = document.querySelector('.monto').textContent.replace(/[$.]+/g, '').trim();
    const mensaje = `¡Hola! Quiero pagar mi compra de $${totalCompra}`;
    const numeroWhatsApp = '51987654321'; // Cambia por tu número de WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`, '_blank');
});
