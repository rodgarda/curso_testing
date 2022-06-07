function spock(primero, segundo) {
  if (primero == segundo) {
    console.log("Empate");
  } else if (primero == "piedra") {
    if (segundo == "tijera" || segundo == "lagarto") {
      return primero;
    }
  } else if (primero == "papel") {
    if (segundo == "piedra" || segundo == "spock") {
      return primero;
    }
  } else if (primero == "tijera") {
    if (segundo == "papel" || segundo == "lagarto") {
      return primero;
    }
  } else if (primero == "Lagarto") {
    if (segundo == "papel" || segundo == "spock") {
      return primero;
    }
  } else if (primero == "spock") {
    if (segundo == "piedra" || segundo == "tijera") {
      return primero;
    }
  }
  return segundo;
}
module.exports = spock;
