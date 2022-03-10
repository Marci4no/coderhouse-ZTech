function Service(serviceValue, costValue, levelValue, idValue, imgValue) {
    this.name = serviceValue;
    this.cost = costValue;
    this.level = levelValue;
    this.id = idValue;
    this.img = imgValue;
}

const serviceA = new Service('Technical Support', 15000, "Lvl 1", 1, "../images/soporte-tecnico.png")
const serviceB = new Service('Web Development', 30000, "Lvl 1", 2, "../images/desarrollo-web.png")
const serviceC = new Service('SysAdmin', 40000, "Lvl 2", 3, "../images/servidor.png")
const serviceD = new Service('Cloud Management', 50000, "Lvl 3", 4, "../images/cloud-storage.png")
const serviceE = new Service('Network', 25000, "Lvl 2", 5, "../images/red.png")
const serviceF = new Service('Cyber Security', 60000, "Lvl 3", 6, "../images/seguridad-informatica(1).png")

const serviceList = [serviceA, serviceB, serviceC, serviceD, serviceE, serviceF]


let viewAllServices = document.getElementById("btn1")
viewAllServices.addEventListener('click', allCards)

function allCards(){
    let catalogo = document.querySelector('.catalogo')
    catalogo.innerHTML = ""
    for (const service of serviceList) {
        let conteiner = document.createElement("div");
        conteiner.innerHTML =  `<div class="cards">
                                <h4> ${service.name}</h4>
                                <p>  Price: $${service.cost}</p>
                                <b>  Category: ${service.level}</b>
                                <img src=${service.img} class="imgJS"/>
                                <button> Acquire! </button></div>`;
        catalogo.appendChild(conteiner);
    }
}

let filerLevels = document.getElementById("btn2")
filerLevels.addEventListener('click', cards)

function cards(){

    let catalogo = document.querySelector('.catalogo')
    catalogo.innerHTML = ""
    let serviceLevel = prompt ('Please, provide your level interesting, choose between Lvl 1, Lvl 2 or Lvl 3')

    const serviceListForLevel = serviceList.filter(x => x.level == serviceLevel)
    for (const service of serviceListForLevel) {
        let conteiner = document.createElement("div");
        conteiner.innerHTML =  `<div class="cards">
                                <h4> ${service.name}</h4>
                                <p>  Price: $${service.cost}</p>
                                <b>  Category: ${service.level}</b>
                                <p>  ID: ${service.id}</p>
                                <img src=${service.img} class="imgJS"/>
                                <button> Acquire! </button></div>`;
        catalogo.appendChild(conteiner);
    }
}

let inputServices = document.getElementById("input1")

inputServices.addEventListener('input1', () => {
    console.log(inputServices.value)
})
