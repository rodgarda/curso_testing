function edadesmayor(edades, mayorque) {
  const result = edades.filter((edad) => edad > mayorque);
  return result.length;
}
module.exports = edadesmayor;
