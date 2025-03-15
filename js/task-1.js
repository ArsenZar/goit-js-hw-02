

/* 


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