// Importamos la función que queremos probar
const saludar = require('./app');

// Prueba 1: que salude al mundo si no hay nombre
test('debe saludar al Mundo', () => {
  expect(saludar()).toBe('Hola, Mundo!');
  expect(saludar(null)).toBe('Hola, Mundo!');
});

// Prueba 2: que salude a un nombre específico
test('debe saludar a un nombre', () => {
  expect(saludar('Gemini')).toBe('Hola, Gemini!');
}); 
