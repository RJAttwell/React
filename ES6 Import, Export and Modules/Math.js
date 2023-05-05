const pi = 3.1415962;

// How to export multiple items
function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;

export { doublePi, triplePi };
