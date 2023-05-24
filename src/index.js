const sayHello = () => {
  return "Hello World!";
};
const suma = (a, b) => {
  if (typeoff a !=="number" || typeoff b!=="number") {
    throw new Error("debes introducir dos numeros");
  }
  
};

module.exports = {sayHello, suma};


