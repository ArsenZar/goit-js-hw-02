

/* 

--- test with while loop

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