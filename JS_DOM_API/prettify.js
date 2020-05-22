// passed 1,3,4
// filed 2,5,6

function prettify(doc) {
  let targetDiv = document.querySelectorAll("div");
  for (let i = 1; i < targetDiv.length; i += 1) {
    if (!targetDiv[i].textContent) {
      continue;
    }
    let p = document.createElement("p");
    let text = targetDiv[i].textContent.trim();
    p.innerHTML = text;
    targetDiv[i].replaceChild(p, targetDiv[i].childNodes[0]);
    // targetDiv[i].childNodes[0].replaceWith(p);
    // doc.appendChild()
  }
  return document.body.innerHTML;
} // my work

// function prettify(document) {
//   let targetDiv = document.querySelectorAll("div");
//   for (let divEl of targetDiv) {
//     if (divEl.textContent) {
//       let p = document.createElement("p");
//       let text = divEl.textContent.trim();
//       p.innerHTML = text;
//       // divEl.remove(divEl.children);
//       divEl.replaceWith(p);
//       document.body.append(divEl);
//     }

//     // targetDiv[i].replaceChild(p, targetDiv[i].childNodes[0]);
//     // targetDiv[i].childNodes[0].replaceWith(p);
//     // doc.appendChild()
//   }
//   return document.body.innerHTML;
// }

// export default prettify;

// function prettify(document) {
//   let targetDiv = document.querySelectorAll("div");
//   for (let divEl of targetDiv) {
//     if (divEl.textContent) {
//       let p = document.createElement("p");
//       let text = divEl.textContent.trim();
//       p.innerHTML = text;
//       divEl.replaceWith(p);
//       document.body.remove(divEl);
//       document.body.append(divEl);
//     //   divEl.replaceChild(p, divEl.children);
//     }

//     // targetDiv[i].replaceChild(p, targetDiv[i].childNodes[0]);
//     // targetDiv[i].childNodes[0].replaceWith(p);
//     // doc.appendChild()
//   }
//   return document.body.innerHTML;
// }

// let doc = document.body;                                                /// working var but not all tests

// const elements = prettify(doc);
// // doc.innerHTML = elements;
// console.log(document.body.innerHTML);

// hexlet
// решение не проходит тесты с вложенными div друг в друга
// let doc = document.body;
// function prettify (doc) {
//     var treeWalker = document.createTreeWalker(doc, 4),
//         elementsArray = [],
//         valuesArray = [];
//     while (treeWalker.nextNode()) {
//         var parentEl = treeWalker.currentNode.parentNode,
//             valueElement = treeWalker.currentNode.nodeValue.trim();
//         if (parentEl.tagName === 'DIV' && valueElement !== "") {
//             elementsArray.push(parentEl);
//             valuesArray.push(valueElement);
//         }
//     }
//     for (var i = 0; i < elementsArray.length; i++) {
//         elementsArray[i].innerHTML = '<p>' + valuesArray[i] + '</p>';
//     }
// };
//
// const elements = prettify(doc);
// console.log(document.body.innerHTML);
