const minar = require("./mina");

test("Cuantos diamantes salen", async () => {
  const result = await minar("");
  expect(result).toBe(0);
});
test("Cuantos diamantes salen", async () => {
  const result = await minar("<>");
  expect(result).toBe(1);
});
test("Cuantos diamantes salen", async () => {
  const result = await minar("<<>>");
  expect(result).toBe(2);
});
test("Cuantos diamantes salen", async () => {
  const result = await minar("<><<>><<");
  expect(result).toBe(3);
});
