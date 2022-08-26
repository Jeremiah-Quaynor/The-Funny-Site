function solutions(operations) {
    let results = []
    let Cards = []

    //Luhn function
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

    operations = operations.sort((a, b) => a.length >= b.length)

    operations.forEach(operation=> {

        if(operation.length==4) {
            const [action, card_holder, card_number, limit]= operation
            if(action === "Add") {
                if(luhnCheck(card_number)) {
                    let cc = {name: card_holder, lim: parseInt(limit.slice(1)), balance: 0, error:""}
                    Cards = [...Cards, cc]
                }else {
                    let cc = {name: card_holder, lim: parseInt(limit.slice(1)), balance: 0, error: "error"}
                    Cards = [...Cards, cc]
                }
            }
        }else if(operation.length==3) {
            const [action, card_holder, amount]= operation
            let val = parseInt(amount.slice(1))
            Cards.forEach(card=> {
                if(action=== "Charge" && card.name === card_holder && card.balance != "error") {
                    if(val + card.balance <= card.lim){
                        card.balance = card.balance + val
                    }else {
                        card.balance = 0
                    }
                }else if(action=== "Credit" && card.name === card_holder && card.balance != "error") {
                    card.balance = card.balance - val
                }

            })
        }
    })

    Cards.sort((a, b) => {
        let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
    });

    Cards.forEach((card)=> {

        results = [...results, [card.name, `${card.balance === "error"? "error": `$${card.balance}`}`]]

    })








    return results

}


console.log(solutions([["Add","vkmxvllrhd","453821047413","$82"], 
["Charge","vkmxvllrhd","$48"], 
["Add","nnairrmpkn","755246150725","$35"], 
["Add","huuhqswaor","670832200836","$73"], 
["Add","mqhjmupjep","282353123122","$38"], 
["Credit","mqhjmupjep","$79"], 
["Add","ikdgojmexy","773391588094","$27"], 
["Charge","huuhqswaor","$87"]]))