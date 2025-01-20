"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const list = input.split("");

function checkParentheses(bracketList) {
    let count = 0;
    let countParentheses = 0;
    let countSquare = 0;
    let countCurly = 0;
    let bracketOrder = [];
    for (let i = 0; i < bracketList.length; i++) {
        if (bracketList[i] === '(') {
            count++;
        }
        else if (bracketList[i] === ')') {
            count--;
        }
    }
    if (count !== 0) {
        return false;
    }

    for (let i = 0; i < bracketList.length; i++) {
        
        if (bracketList[i] === '(') {
            bracketOrder.push('(');
        } else if (bracketList[i] === ')') {
            if (bracketOrder.length === 0) {
                return false;
            }
            bracketOrder.pop();
        }
    }

    return true;
}

if (checkParentheses(list) === true) {
    console.log('YES');
} else {
    console.log('NO');
}
