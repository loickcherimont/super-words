export function getAlphabet() {
    const alpha = Array.from(Array(26)).map((_, index) => index + 65)
    const alphabet = alpha.map((x) => String.fromCharCode(x))
    return alphabet
}

