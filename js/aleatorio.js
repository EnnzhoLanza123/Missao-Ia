const nomes = ["Lucas", "Beatriz", "Kael", "Valéria", "Yuri", "Helena", "Enzo"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
