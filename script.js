console.log("listo para aprender canvas!")

const canvas = document.querySelector("#my-canvas");
canvas.style.backgroundColor = "lightgray"

const ctx = canvas.getContext("2d");

// FIGURAS LLENAS

// color a las figuras rellenas que estaré dibujando
ctx.fillStyle = "green";

// fillRect => dibujar un rectangulo

// ctx.fillRect(xPos, yPos, ancho, alto) => px
ctx.fillRect(50, 50, 100, 40)

ctx.fillStyle = "red";
ctx.fillRect(50, 150, 80, 80)



ctx.fillStyle = "green";
ctx.fillRect(75, 175, 80, 80)
ctx.fillRect(170, 175, 80, 80)

// clearRect => para borrar
// ctx.clearRect(xPos, yPos, ancho, alto) => px

ctx.clearRect(100, 200, 300, 300)
 

// ejemplo de borra el canvas
// ctx.clearRect(0, 0, canvas.width, canvas.height)


// metodos y propiedades de trazados

ctx.strokeStyle = "blue";
ctx.strokeRect(50, 300, 150, 150)

ctx.strokeStyle = "red";
ctx.strokeRect(60, 320, 150, 180)

// trazados de lineas

ctx.beginPath() // => el pincel empezará a dibujar
ctx.strokeStyle = "purple"
ctx.moveTo(50, 600) // => donde empezará a dibujar el pincel
ctx.lineTo(120, 650) // desde la posición anterior, a donde quieres dibujar
// ... a partir de aqui, podemos agregar mas trazados
ctx.stroke() // ok, haz el trazado
ctx.lineTo(180, 630)
ctx.lineTo(100, 600)
ctx.lineTo(60, 640)
ctx.stroke() // ok, haz el trazado

// opcionalmente tenemos el metodo fill
ctx.fillStyle = "salmon"
ctx.fill()

ctx.closePath()

// circulos y circunferencias

ctx.beginPath()
ctx.strokeStyle = "magenta"
// ctx.arc(xPos, yPos, radio, anguloInicial, anguloFinal, antiClockwise)
ctx.arc(400, 100, 80, 0, 2 * Math.PI, false);
ctx.stroke()
ctx.fillStyle = "brown"
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = "magenta"
// ctx.arc(xPos, yPos, radio, anguloInicial, anguloFinal, antiClockwise)
ctx.arc(400, 100, 40, 0, 1 * Math.PI, false);
ctx.stroke()
ctx.fillStyle = "salmon"
ctx.fill()
ctx.closePath()


// como agregamos imagenes

let img = new Image();
// el src podría ser externo o interno (recomendado sería interno)
img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg"


// drawImage => 3 argumentos o 5 argumentos
// (imagen, xPos, yPos, ancho, alto)
ctx.drawImage(img, 300, 360)
// a veces, tendremos que esperar que la imagen se cargue correctamente, antes de subirla al canvas

// img.addEventListener("load", () => {
//   // ctx.drawImage(img, 300, 360)
//   ctx.drawImage(img, 300, 360, 100, 100)
// })


// recursion

let control = 0;

function printSomething() {
  control = control + 1 // control++

  console.log("Imprimiendo en la consola!")

  if (control < 200) {
    printSomething()
  }
}

printSomething()


// como hacemos animaciones

// let controlAnimation = 0;
let cubeX = 50

function moveCube() {
  // controlAnimation++

  // 1. limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 2. mover los elementos
  cubeX = cubeX + 1

  // 3. dibujar los elementos
  ctx.fillStyle = "black";
  ctx.fillRect(cubeX, 700, 40, 40)

  // 4. efecto de recursion
  if (cubeX < 400) {
    // moveCube()
    // requestAnimationFrame => ejecuta esto 60 veces cada segundo 60fps
    requestAnimationFrame(moveCube) // detecta la velocidad de refresque de la pantalla y lo ejecuta de acuerdo
  }

}

moveCube()