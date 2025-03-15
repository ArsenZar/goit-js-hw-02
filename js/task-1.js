function sumTo(number) {
    let totalResoult = 0;

    for (let i = 0; i <= number; i += 1) {
        if (i % 2 == 0) {
            totalResoult += i;
        }
    }
    return totalResoult;
};

console.log(sumTo(7));



/* 
--- here i use first time % operator to check if the number is even and add it to the totalResoult if it true.

function sumTo(number) {
    let totalResoult = 0;

    for (let i = 0; i <= number; i += 1) {
        if (i % 2 == 0) {
            totalResoult += i;
        }
    }
    return totalResoult;
};

console.log(sumTo(7));
.
.
.
--- thats the same as the previous task but different way.

function sumTo(number) {
    let totalResoult = 0;
    let i;

    for (i = 0; totalResoult <= number; i += 1) {
        totalResoult += i;
    }
    return i;
};

console.log(sumTo(170));
.
.
.
--- thats the same as the previous task but with for loop.

function sumTo(number) {
    let totalResoult = 0;

    for (let i = 0; i <= number; i += 1) {
        totalResoult += i;
    }
    return totalResoult;
};

console.log(sumTo(18));
.
.
.
--- test with while loop.

let totalResoult = 0;

function calculateTotal(number) {
  let startNum = 0;
  while (startNum < number){
    startNum++;
      totalResoult += startNum;
  }
  return totalResoult;
}

console.log(`---` + totalResoult);
calculateTotal(18);
console.log(totalResoult);
.
.
.
--- add both parts, fole name + extension and add dot between them.

function createFileName(name, ext) {
  return `${name.trim()}.${ext.trim()}`;
}
.
.
.
--- crop main name of file without extension.

function getFileName(file) {
  indexFile = file.indexOf(".");
  return indexFile >= 0 ? file.slice(0, indexFile) : file;
}

*/