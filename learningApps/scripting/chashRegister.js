function checkCashRegister(price, cash, cid) {
    let states = ["INSUFFICIENT_FUNDS", "CLOSED", "OPEN"]
    let result = { status: undefined, change: [] };
    let change = cash - price;
    let total = 0;
      for (let i = 0; i < cid.length; i++) {
         total += cid[i][1] * 100;
         }
    total /= 100;
    let newCiD = [
      [ 'PENNY', 0 ],
      [ 'NICKEL', 0 ],
      [ 'DIME', 0 ],
      [ 'QUARTER', 0 ],
      [ 'ONE', 0 ],
      [ 'FIVE', 0 ],
      [ 'TEN', 0 ],
      [ 'TWENTY', 0 ],
      [ 'ONE HUNDRED', 0 ] ];
    function calcChange(val) {
      console.log("valor es " + val.toFixed(2))
      if (val >= 100 && cid[8][1] >= 100) {   //Entrega 100
        cid[8][1] -= 100;
        newCiD[8][1] += 100;
        calcChange(val - 100);
      } else if (val >= 20 && cid[7][1] >= 20) {  //Entraga 20
        cid[7][1] -= 20;
        newCiD[7][1] += 20;
        calcChange(val - 20);
      } else if (val >= 10 && cid[6][1] >= 10) {  //Entrega 10
        cid[6][1] -= 10;
        newCiD[6][1] += 10;
        calcChange(val - 10);
      } else if (val >= 5 && cid[5][1] >= 5) {  //Entrega 5
        cid[5][1] -= 5;
        newCiD[5][1] += 5;
        calcChange(val - 5);
      } else if (val >= 1 && cid[4][1] >= 1) {  //Entrega 1
        cid[4][1] -= 1;
        newCiD[4][1] += 1;
        calcChange(val - 1);
      } else if (val >= 0.25 && cid[3][1] >= 0.25) {  //Entrega 0.25
        cid[3][1] -= 0.25;
        newCiD[3][1] += 0.25;
        calcChange(val - 0.25);
      } else if (val >= 0.10 && cid[2][1] >= 0.10) {  //Entrega 0.10
        cid[2][1] -= 0.10;
        newCiD[2][1] += 0.10;
        calcChange(val - 0.10);
      } else if (val >= 0.05 && cid[1][1] >= 0.05) {  //Entrega 0.05
        cid[1][1] -= 0.05;
        newCiD[1][1] += 0.05;
        calcChange(val - 0.05);
      } else if (val >= 0.01 && cid[0][1] >= 0.01) {  //Entrega 0.01
        cid[0][1] -= 0.01;
        newCiD[0][1] += 0.01;
        calcChange(val - 0.01 + 0.001);
      }
    }
    if (change > total) {
      result.status = states[0];
    } else if (change == total) {
      result.status = states [1];
    } else {
      calcChange(change)
    }
    // Pushea la moneda entregada en order MaxMin al Resultado desde nuevoCiD.
    for (let j = newCiD.length-1; j >= 0; j--) {
      if (newCiD[j][1] != 0) {
        result.change.push(newCiD[j])
      }
    }
    let newTotal = 0;
      for (let k = 0; k < result.change.length; k++) {
         newTotal += result.change[k][1] * 100;
         }
    newTotal /= 100;
    if (newTotal == change) {
      return result;
    } else {
      result.status = states[0];
      result.change = [];
    }
    return result;
  };
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))