'use strict'

// let i = 2;
// if (i === 1) {
//     console.log("真です");
// }

// == の場合は、左右を比較して、データ型が違っても一致するデータ型に変換した後に比較
// === の場合は、左右を比較して、データ型が違った時、等しくないという判断をする

// let testScore = 80;

// if (testScore >= 80) {
//     document.write("合格です！おめでとう！");
// }
// else if (testScore >= 70) {
//     document.write("惜しい！あと少し頑張って！");
// }
// else {
//     document.write("不合格です！勉強して再挑戦しましょう！");
// }

// const nameList = ['田中', '山田', '林', '佐藤'];

// for (let i = 0; i < nameList.length; i++) {
//     console.log(`${1 + i}.${nameList[i]}`);
// }

//continue文
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

//break文
// for (let i = 1; i < 1000; i++) {
//     if (i > 10) break;
//     console.log(i);
// }

function scoreCheck() {
    let testScore = document.getElementById('score').value
    if (testScore >= 80) {
        document.write("合格です！おめでとう！");
    }
    else if (testScore >= 70) {
        document.write("惜しい！あと少し頑張って！");
    }
    else {
        document.write("不合格です！勉強して再挑戦しましょう！");
    }
}