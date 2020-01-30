
import uniq from { lodash }

const getSameCount = () => {

}

// getSameCount([], []); // 0
// getSameCount([4, 4], [4, 4]); // 1
// getSameCount([1, 10, 3], [10, 100, 35, 1]); //
// getSameCount([1, 3, 2, 2], [3, 1, 1, 2]); // 3




// const sentence = 'When you play the game of thrones, you win or you die';
// const liveSimbols = '$#%!';

// const makeCensored = (inSentence, deadWords) => {
//     let workArray = inSentence.split(' ');
//     console.log(workArray);
//     for (let i = 0; i < workArray.length; i += 1) {
//         for (let j = 0; j < deadWords.length; j += 1) {
//             if (workArray[i] === deadWords[j]) {
//                 workArray[i] = liveSimbols;
//             }
//         }
//     }
//     return workArray.join(' ');
// }

// const result = makeCensored(sentence, ['die', 'play']);
// console.log(result);
// When you $#%! the game of thrones, you win or you $#%!

// const definitions = [
//   ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
//   ['Бобр', 'Животное из отряда грызунов'],
// ];

// const buildDefinitionList = (arr) => {
//   let resultSring = [];
//   arr.forEach(function(item){
//     resultSring.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
//   });
//   return `<dl>${resultSring.join('')}</dl>`;
// }

// buildDefinitionList(definitions);

// const data = [
//   [-5, 7, 1],
//   [3, 2, 3],
//   [-1, -1, 10],
// ];
// const data2 = [];
// const data3 = [[],[]];

// const getIndexOfWarmestDay = (arr) => {
//   let maxTDay = 0;
//   let maxTempInDay = -25000;
//   let currentMaxTDay = 0;
//   for(let i = 0; i <= arr.length - 1; i += 1) {
//     for(let j = 0; j <= arr[i].length - 1; j += 1) {
//       if(arr[i][j] >= maxTempInDay) {
//         maxTempInDay = arr[i][j];
//         currentMaxTDay = i;
//       }
//       }
//       maxTDay = currentMaxTDay;
//     }
// if (currentMaxTDay == 0) {
//   return null
// } else {
//   return maxTDay;
// }
//   }

// getIndexOfWarmestDay(data3);

// const getIndexOfWarmestDay = (arr) => {
//   if(arr === [[],[]]) return null;
//   let maxTDay = 0;
//   let temperaturesSumm = 0;
//   let currentTemp = 0;
//   for(let i = 0; i <= arr.length - 1; i += 1) {
//     for(let j = 0; j <= arr[i].length - 1; j += 1) {
//       currentTemp = currentTemp + arr[i][j];
//       }
//       console.log(currentTemp);
//       if(currentTemp >= temperaturesSumm) {
//       maxTDay = i;
//       console.log(maxTDay);
//     }
//     temperaturesSumm = currentTemp;
//     currentTemp = 0;
//   }
//   return maxTDay;
// }

// getIndexOfWarmestDay(data);

// const average = (unit) => {
//   let sum = 0;
//   for(const item of unit) {
//     sum += item;
//   }
//   return sum;
// }

// const average = (unit) => {
//   let sum = 0;
//   for(let item = 0; item <= unit.length - 1; item += 1) {
//     sum += unit[item];
//   }
//   return sum;
// }

// const average = (unit) => {
//   let res = unit.reduce(function(acc, current) {
//     return acc + current;
//   });
//   return res;
// }

// const getIndexOfWarmestDay = (arr) => {
//   if(arr.length == 0) return null;
//   // console.log(average(arr[0]));
//   let maxTemp = average(arr[0]);
//   let maxTDay = 0;
//   for(let i = 1; i <= arr.length - 1; i += 1) {
//       // console.log(average(arr[i]));
//       let currentTemp = average(arr[i]);
//     if(currentTemp >= maxTemp) {
//       maxTDay = i;
//     }
//   }
//   return maxTDay;
// }


// const parity = (num) => {
//   return num % 2 === 0 ? true : false;
// }

// const getSameParity = (arr) => {
//   let result = [];
//   if(arr.length == 0) return result;
//   let getParity = parity(arr[0]);
//   for(const item of arr) {
//     if(parity(item) == getParity) {
//     result.push(item);
//     }
//   }
//     return result;
// }

// // getSameParity([1, 2, 3]); // [1, 3]
// // getSameParity([1, 2, 8]); // [1]
// // getSameParity([2, 2, 8]); // [2, 2, 8]
// getSameParity([]);


// const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];

// const lvName = (str) => {
//   return str.slice(0, 3); // lv always 3 letters
// }

// const lvValue = (str) => {
//   return Number(str.slice(4, str.length));
// }

// const getTotalAmount = (arr, lv) => {
//   let summOflvName = 0;
//    for(const unit of arr) {
//      if(lvName(unit) !== lv) {
//       continue;
//      }
//      summOflvName += lvValue(unit);
//      }
//      return summOflvName;
//    }

// getTotalAmount(money1, 'usd') // 16


//************************* */


// const coll1 = [8, 9, 21, 19, 18, 22, 7];
// const calculateSum = (arr) => {
//   if(arr.length ==0) return null;
//   let summ = 0;
//   for(let unit of arr) {
//     if (unit % 3 == 0) {
//       summ = summ + unit;
//     }
//   }
//   return summ;
// }

// calculateSum(coll1); // 48

// const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];

// const calculateAverage = (arr) => {
//   let summ = 0;
//   for (const unit of arr) {
//     summ = summ + unit;
//   }
//   return summ / arr.length;
// }

// calculateAverage(temperatures1); // 38.5

// const names = ['john', 'smith', 'karl'];

// const swap = (array, index) => {
//   let newArr = [...array];
//   let temp = newArr[index - 1];
//   newArr[index - 1] = newArr[index + 1];
//   newArr[index + 1] = temp;
//   if(newArr[index + 1] == 'underfined' || newArr[index - 1] == 'underfined') {
//     return array;
//   }
//   else return newArr;
// }

// const result = swap(names, 1);
// console.log(result); // => ['karl', 'smith', 'john']

// const names = ['john', 'smith', 'karl'];

// const addPrefix = (array, prefix) => {
//   // let newArr = []
//   // for(let i = 0; i <= array.length - 1; i += 1) {
//   //   newArr[i] = prefix + ' ' + array[i];
//   // }
//   let newArr = Array.from(array, x => prefix + ' ' + x)
//   return newArr;
// }

// console.log(addPrefix(names, 'Mr'));

//   const cities = ['moscow', 'london', 'berlin', 'porto', ''];
// // const defValue = 'null';

// function get (array, index, defValue = null) {
//   if(index >= 0 && index <= array.length - 1) {
//     return array[index];
//   }
//   else return defValue;
// }

// // get(cities, 1); // london
// // get(cities, 4); // null
// // get(cities, 10, 'paris'); // paris
// get(cities, 5, false); // paris

// import apply from '../arrays';

// const cities = ['moscow', 'london', 'berlin', 'porto'];

// function apply (array, operation, param1, param2) {
//   if (!operation) return array;
//   if (operation == 'reset') {
//     array = [];
//     return array;
//   }
//   else if (operation == 'get') {
//     return array[param1];
//   }
//   else if (operation == 'change') {
//     array[param1] = param2;
//     return array;
//   }
//   else return array;
// }

// // возврат пустого массива
// apply(cities);
// apply(cities, 'reset'); // []
// // получение значения по индексу
// apply(cities, 'get', 1); // 'london'
// // изменение значения по индексу
// apply(cities, 'change', 0, 'miami'); // ['miami', 'london', 'berlin', 'porto']
// // операция по умолчанию
// apply(cities); // ['moscow', 'london', 'berlin', 'porto']
