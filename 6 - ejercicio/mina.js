function minar(diamantes) {
  return new Promise((resolve, reject) => {
    let extraidos = 0;
    const extrae = diamantes.split("");
    for (let i = 0; i < extrae.length; i++) {
      if (extrae[i] == "<" && extrae[i + 1] == ">") {
        extraidos++;
        extrae.splice(i, 2);
        i = i - 2 < 0 ? -1 : i - 2;
      }
    }
    const tiempoMinado = extraidos * 100;
    setTimeout(() => {
      resolve(extraidos);
    }, tiempoMinado);
  });
}

module.exports = minar;
