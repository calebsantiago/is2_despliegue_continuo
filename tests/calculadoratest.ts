import { Calculadora } from './../main';
//pruebas unitarias
describe( "Calculadora Test", () => {
    it("sumar", () => {
        let calculadora = new Calculadora()
        let respObtenido = calculadora.sumar(5, 8)
        let respEsperado = 13
        expect(respEsperado).toEqual(respObtenido)
    })
})