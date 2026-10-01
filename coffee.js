


class CoffeeMachine {

    machineIsOn = false
    waterQ
    coffeeQ
    milkQ
    t 
    contamination = 0


    constructor(water,coffee,milk,trash){
       
        this.waterBox = water   //макс 1000
        this.coffeeBox = coffee  //макс 1000
        this.milkBox = milk      //макс 1000
        this.trashBox = trash      //макс 300

    }

    start() {

        this.machineIsOn = true
        //alert('Кофемашина включена!')
        console.log('---Подготовка к работе......---')   
        if(this.waterBox < 100) {
            //alert('Недостаточно воды!')
            alert('----Недостаточно воды!----')
        }
        else if(this.coffeeBox < 100) {
            //alert('Закончились зерна!')
            alert('----Закончились зерна!----')
        }
        else if(this.milkBox < 100) {
            //alert('Закончиось молоко!')
            alert('----Закончиось молоко!----')
        }
        else if(this.contamination > 5) {
            //alert('Закончиось молоко!')
            alert('----Необходима программа очистки!----')
        }
        else if(this.trashBox >= 290) {
            //alert('Контейнер отходов заполнен!')
            alert('----Контейнер отходов заполнен!----')
        }
        else{
            console.log(`---Готова к работе!---
            МЕНЮ:
            1.ЭСПРЕССО
            2.АМЕРИКАНО
            3.КАПУЧИНО
            4.ЛАТТЕ
            5.ПРОМЫВКА
            6.ВЫКЛЮЧИТЬ
        `)
            this.makeCoffee()
        }
    }


    // menu(){
    //     alert(`---Готова к работе!---
    //         МЕНЮ:
    //         1.ЭСПРЕССО
    //         2.АМЕРИКАНО
    //         3.КАПУЧИНО
    //         4.ЛАТТЕ
    //         5.ПРОМЫВКА
    //         6.ВЫКЛЮЧИТЬ
    //     `)
    //     this.makeCoffee()
    // }

    


    makeCoffee() {

         this.t = Number(prompt('Ваш выбор?'))                                    

        switch(this.t){
            case 1: 
                    this.espresso()
            break;

            case 2: 
                    this.americano()
            break;

            case 3: 
                    this.cappucino()
            break;

            case 4: 
                    this.latte()
            break;

            case 5: console.log('Промывка.....')
                    this.washing()
            break;

            case 6: console.log('Выключаюсь...')
                    this.machineIsOn = false
            break;

            default: alert('Такой программы нет :(')
                    this.start()
            break;
        }

    }


    espresso(){
        console.log('Готовит эспрессо....')
        console.log('Перемалывает зерна....')
        this.coffeeQ = 5
        console.log('Проливает кофе....')
        this.waterQ = 50
        
        this.coffeeBox -= this.coffeeQ
        this.waterBox -= this.waterQ
        this.trashBox += this.coffeeQ

        console.log('Эспрессо готов!')
        console.log(this.coffeeBox, this.waterBox)
        this.start()
    }



    americano() {
        console.log('Готовит американо....')
        console.log('Перемалывает зерна....')
        this.coffeeQ = 5
        console.log('Проливает кофе....')
        this.waterQ = 150

        this.coffeeBox -= this.coffeeQ
        this.waterBox -= this.waterQ
        this.trashBox += this.coffeeQ

        console.log('Американо готов!')
        console.log(this.coffeeBox, this.waterBox)
        this.start()
    }



    cappucino(){
        console.log('Готовит капучино....')
        console.log('Перемалывает зерна....')
        this.coffeeQ = 5 
        console.log('Проливает кофе....')
        this.waterQ = 50
        console.log('Взбивает молоко....')
        console.log('Проливает молоко....')
        this.milkQ = 100

        this.coffeeBox -= this.coffeeQ
        this.waterBox -= this.waterQ
        this.milkBox -= this.milkQ
        this.trashBox += this.coffeeQ

        this.contamination += 1

        console.log('Капучино готов!')
        console.log(this.coffeeBox, this.waterBox, this.milkBox, this.contamination)
        this.start()
    }
    


    latte(){
        console.log('Готовит латте....')
        console.log('Перемалывает зерна....')
        this.coffeeQ = 5 
        console.log('Проливает кофе....')
        this.waterQ = 50
        console.log('Взбивает молоко....')
        console.log('Проливает молоко....')
        this.milkQ = 200

        this.coffeeBox -= this.coffeeQ
        this.waterBox -= this.waterQ
        this.milkBox -= this.milkQ
        this.trashBox += this.coffeeQ 

        this.contamination += 1
        
        console.log('Латте готов!')
        console.log(this.coffeeBox, this.waterBox, this.milkBox, this.contamination)
        this.start()
    }



    washing(){
        console.log('Промывает трубки....')
        this.contamination = 0
        console.log('Промывка завершена!')
        this.start()
    }
  

}


const coffeeMachine = new CoffeeMachine(1000, 1000, 1000, 0)
coffeeMachine.start()



