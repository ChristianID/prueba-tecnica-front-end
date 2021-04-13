'use strict';

const buyers = [
    { id: 1, name: 'Pedro Roman' },
    { id: 2, name: 'Mayleth Rivera' },
    { id: 3, name: 'Juan Carvalledo' },
];

const products = [
    { id: 1, product: 'Producto 1' },
    { id: 2, product: 'Producto 2' },
    { id: 3, product: 'Producto 3' },
    { id: 4, product: 'Producto 4' },
    { id: 5, product: 'Producto 5' }
];

const purchaseForm = document.getElementById('purchaseForm');
const cardItemCount = document.getElementById('cardItemCount');
const cardItemAmount = document.getElementById('cardItemAmount');
const buyersTable = document.getElementById('buyersTable');