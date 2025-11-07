// Esta es nuestra app "Hola Mundo"
function saludar(nombre) {
  if (!nombre) {
    return "Hola, Mundo!";
  }
  return `Hola, ${nombre}!`;
}

// Exportamos la función para que las pruebas la puedan usar
module.exports = saludar; 
