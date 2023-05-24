const sayHello = require("../src/index");

test("Greetings from JEST", ()=> {
let result = sayHello();
expect(result).toBe("Hello World!");
});

test(`cheking primitive types`,  () => {
   expect(2 +2).toBe(4);
   expect(typeof "hello").toBe("string");
   expect(!0).toBe(true);
})


it ("checkings arrays and objects recursively", () => {
    let data ={
        email:"john@connor.com" 
    };
    let numbers = [1, 2, 3];
   
    expect(Object.keys(data).length).toEqual(2);
    expect(numbers[numbers.length -1]).toEqual(3);
})
test(`checking the opposite of something`, () => { 
    expect(2 + 2).not.toBe(5);
    expect("hello").not.toBe("World");
    expect(3 % 2).not.toBe(0);
    
});
test("cheking floating numbers",() => {
    expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
    
})
test(`shoulf check truthiness`, () => {
    let numbers = [1, true , 3.5, null, undefined];
    expect(numbers[3]).toBeNull();
    expect(numbers).toBeDefined();
    expect(numbers[4]).toBeUndefined();
    expect(numbers[5]).toBeUndefined();
    expect(numbers.length === 5).toBeTruthy();
    expect(numbers[0] === 4).toBeFalsy();
    

})
it ("should check strings", () => {
   const DNI= "12345678C";
   expect(DNI).toMatch(/^[0-9]{8,8}[A-Za-z]/);  
});
function validarString(string) {
    var patron = "60828be935bf80268d0326b7e1a2c408";
    var resultado = string.match(patron);
  
    if (resultado) {
      console.log("El string es válido");
    } else {
      console.log("El string no es válido");
    }
  }
  
  validarString("60828be935bf80268d0326b7e1a2c408"); // El string es válido
  validarString("60828Be935bf80268d0326b7e1a2c408"); // El string no es válido
  

  it ("should check strings", () => {
    const WPA= "60828be935bf80268d0326b7e1a2c408";
    expect(WPA).toMatch(/^[0-9a-f]{32}$/i);
  });


  const suma = (a, b) => a + b;

it("should check the function suma", () => {
  expect(suma(a, b)).toBe(a + b);
  expect(suma(a, b)).not.toBe(a - b);
  expect(a + b).toBeTruthy();
  expect(a - b).toBeFalsy();
  expect(a + b).toBeCloseTo(a - b);
});

const addition = (a, b) => {
  const result = a + b;
  const multiplier = 3;
  const resultFinal = result * multiplier;
  return resultFinal;
};




  
    
 
  const adittion = requiere(`./suma`);  
  console.log(suma(2, 4));


  describe("ponemos a prueba la funcion suma", () => {
    test("comprobamos la suma de enteros pequeños", () => {
      expect(suma(2, 2)).toBe(4);
    });
    test("comprobamos la suma de enteros grandes", () => {
      expect(suma(Number.MAX_SAFE_INTEGER, 1)).toBe(9007199254740992);
    
  });
  test("comprobamos la suma de enteros negativos y positivos", () => {
    expect(suma(-2, 2)).toBe(0);
   
    expect(suma(10, -2)).toBe(8);
  })

test("comprobamos la suma de decimales", () => {
  let ramdom = Math.random();
  expect(suma(ramdom, 0)).toBe(ramdom);
});
test("comprobamos la suma de 0 + 0", () => {
  expect(suma(0, 0)).toBe(0);
});
test("comprobamos la suma de NaN", () => {
  expect(suma(0, 0)).toBe(0);
});


  }); 
