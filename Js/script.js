//-----SERVICES FUNCTION-----//

function Service(serviceValue, costValue) {
    this.name = serviceValue;
    this.cost = costValue;
}

const serviceA = new Service('Technical Support', 15000)
const serviceB = new Service('Web Development', 30000)
const serviceC = new Service('SysAdmin', 40000)
const serviceD = new Service('Cloud Management', 50000)
const serviceE = new Service('Network', 25000)
const serviceF = new Service('Cyber Security', 60000)

const serviceList = [serviceA, serviceB, serviceC, serviceD, serviceE, serviceF]

//-----MENU FUNCTION-----//

let userName = prompt("Hi, welcome to ZTech website" + "\n" + "First of all, tell us about yourself, what's your name?")

userName

alert("Thanks " + userName + " let's continue")

function mainMenu() {
    let choise = prompt("Main Menu: \n1 - Own Services\n2 - Work whit Us\n3- Close")

    switch (choise) {
        case "1":
            viewServices();
            mainMenu();
            break;
        case "2":
            viewServices();
            validateBuy();
            mainMenu();
            break;
        case "3":
            alert("Thanks for your visit")
            break;
        default:
            alert("Wrong option")
            mainMenu();
            break;
    }
}

//-----FLOW FUNCTIONS-----//

function viewServices() {
    alert("These are the services we offer and its price per month: " + "\n" + "\n" + "1-" + serviceA.name + " $" + serviceA.cost + "\n" + "2-" + serviceB.name + " $" + serviceB.cost + "\n" + "3-" + serviceC.name + " $" + serviceC.cost + "\n" + "4-" + serviceD.name + " $" + serviceD.cost + "\n" + "5-" + serviceE.name + " $" + serviceE.cost + "\n" + "6-" + serviceF.name + " $" + serviceF.cost + "\n" + "\n" + "choose the one that best suits the needs of your company")
}
let totalPrice = 0;

function buy(cost) {
    servicePlan = parseInt(prompt("I chose the plan in number format, between 1 and 12 months"))
    if ((servicePlan > 12) || (servicePlan == 0) || (servicePlan == "")) {
        alert("You have entered a invalid value, please choose between 1 and 12")
        exit
    }
    else {
        totalPrice += cost * servicePlan
    }
}

function validateBuy(service) {
    alert("Ok " + userName + ", The next step is to choose the plan for each service, keep in mind that they range from 1 to 12 months")
    let numberOfServices = parseInt(prompt("Enter the number of services you want to hire"))
    for (let i = 0; i < numberOfServices; i++) {
        let serviceName = prompt(userName + ", enter service name, only one" + "\n" + "\n" + "Remember, our services are:" + "\n" + "\n" + "1-" + serviceA.name + "\n" + "2-" + serviceB.name + "\n" + "3-" + serviceC.name + "\n" + "4-" + serviceD.name + "\n" + "5-" + serviceE.name + "\n" + "6-" + serviceF.name)
        if (serviceName == "") {
            alert("This field can not be blank, please, start the process again")
            mainMenu()
        }
        else if (serviceName == serviceA.name) {
            buy(serviceA.cost)
        }
        else if (serviceName == serviceB.name) {
            buy(serviceB.cost)
        }
        else if (serviceName == serviceC.name) {
            buy(serviceC.cost)
        }
        else if (serviceName == serviceD.name) {
            buy(serviceD.cost)
        }
        else if (serviceName == serviceE.name) {
            buy(serviceE.cost)
        }
        else if (serviceName == serviceF.name) {
            buy(serviceF.cost)
        }
        else {
            alert(userName + ", you have not chosen a valid service, please start the process again")
            exit
        }
        alert('The total budget is: $ ' + totalPrice)
    }
}


mainMenu()