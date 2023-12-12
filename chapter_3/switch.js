let date = new Date()

let today = date.getDay()
// console.log(today)

switch(today){
    case 6: 
            console.log("Today is saturday")
            break
    case 0:
            console.log("Today is sunday")
            break 
    case 1:
            console.log("Today is monday")
            break 
    case 2:
            console.log("Today is tuesday")
            break
    case 3:
            console.log("Today is wednesday")
            break 
    case 4:
            console.log("Today is thursday")
            break
    case 5:
                console.log("Today is friday")
                break

    default: console.log("not a valid number")
}