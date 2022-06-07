class expect {
    data;
    constructor(Data) {
        this.data=Data;
    }
    toBe(result){
        return(this.data==result);
    }
}


function test(Titulo,...fn){
    const resultado=  fn;
    console.log(`Test ${Titulo}` ,resultado)
}


const sum = (a, b) => a + b;

test('Test sobre Suma', 
    new expect(sum(1, 2)).toBe(3),
    new expect(sum(2, 2)).toBe(4),
    new expect(sum(3, 2)).toBe(5)
)
