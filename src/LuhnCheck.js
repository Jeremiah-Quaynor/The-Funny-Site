function solutions (operations) {
    let results = []
    let Cards = []

    const luhnCheck = num => {
        let arr = (num + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
        sum += lastDigit;
        return sum % 10 === 0;
    };
    operations.forEach(operation => {
        if(operation.length == 4) {
            const [action, card_holder, card_number, limit]= operation
            if(action === "Add" && luhnCheck(card_number)) {
                let cc = {name: card_holder, lim: parseInt(limit.slice(1)), balance: 0}
                Cards = [...Cards, cc]
            }else{
                let cc = {name: card_holder, lim: parseInt(limit.slice(1)), balance: "error"}
                Cards = [...Cards, cc]
            }            
        }else if(operation.length == 3){
            const [action, card_holder, amount]= operation
            let val = parseInt(amount.splice(1))
            Cards.forEach(card => {
                if(action === "Charge" && card.name === card_holder && card.balance != "error") {
                    val + card.balance <= card.lim ? card.balance= card.balance + val: null
                }else if(action === "Credit"&& card.name === card_holder && card.balance != "error"){
                    card.balance = card.balance + val
                }
            })


        }

        console.log(Cards);
    });







    return results
}

solutions([["Add","ajpylgynwa","237140607761","$6"], 
["Add","rmfwosquus","222172499667","$52"], 
["Add","wrowmtxzkq","820329274576","$99"], 
["Add","totyemyqrg","447761950693","$1"], 
["Credit","totyemyqrg","$7"]])