//-----JSON DATABASE-----//

const dataBase = [
    {
        id: 1,
        name: 'Technical Support',
        cost: 15000,
        image: '../images/soporte-tecnico.png'
    },
    {
        id: 2,
        name: 'Web Development',
        cost: 30000,
        image: '../images/desarrollo-web.png'
    },
    {
        id: 3,
        name: 'SysAdmin',
        cost: 40000,
        image: '../images/servidor.png'
    },
    {
        id: 4,
        name: 'Cloud Management',
        cost: 50000,
        image: '../images/cloud-storage.png'
    },
    {
        id: 5,
        name: 'Network',
        cost: 25000,
        image: '../images/red.png'
    },
    {
        id: 6,
        name: 'Cyber Security',
        cost: 60000,
        image: '../images/seguridad-informatica(1).png'
    }
];

let carrito = [];
const coin = 'u$s';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;

//-----FUNCTION BUYCAR-----//

function createCards() {
    dataBase.forEach((info) => {
        //DIV Container
        const miNodo = document.createElement('div');
        miNodo.classList.add();
        // CARDS BODY
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('cards');
        // TITLE
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.name;
        // IMAGES
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('imgJS');
        miNodoImagen.setAttribute('src', info.image);
        // COST
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.cost}${coin}`;
        // BUTTON 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', addServiceToBuy);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

//-----ADD SERVICE TO BUYCAR----//


function addServiceToBuy(event) {
    carrito.push(event.target.getAttribute('marcador'))
    toRenderBuycar();
    saveInLocalStorage();
}

//-----EMPTY BUYCAR-----//

function toRenderBuycar() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = dataBase.filter((itemsDataBase) => {
            return itemsDataBase.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].name} - ${miItem[0].cost}${coin}`;
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', deleteItemBuycar);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
}

//-----EMPTY 1 ITEM ONLY-----//


function deleteItemBuycar(event) {
    const id = event.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    toRenderBuycar();
    saveInLocalStorage();

}


//-----TOTAL COST BUYCAR-----//


function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = dataBase.filter((itemsDataBase) => {
            return itemsDataBase.id === parseInt(item);
        });
        return total + miItem[0].cost;
    }, 0).toFixed(2);
}


function emptyBuycar() {
    carrito = [];
    toRenderBuycar();
    localStorage.clear();

}

function saveInLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function reloadLocalStorage () {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

DOMbotonVaciar.addEventListener('click', emptyBuycar);

//-----SCRIPT INIT FUNCTIONS-----//

reloadLocalStorage();
createCards();
toRenderBuycar();

