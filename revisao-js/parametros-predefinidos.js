function areaForma(base, altura, forma = 'R') {
    let area
    switch (forma) {
        case 'R': //retangulo
            area = base * altura
            break
        case 'T': //triangulo
            area = base * altura / 2
            break
        case 'E': // elipse
            area = (base / 2) * (altura / 2) * Math.PI
    }
    return area
}

console.log(`Retangulo 45x15: ${areaForma(45, 15,'R')} `)
console.log(`Triangulo 13x8: ${areaForma(13, 8,'T')} `)
console.log(`Elipse 12x16: ${areaForma(12, 16,'E')} `)