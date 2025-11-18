class Pole {
    constructor(name, r) {
        this.name = name;
        this.r = r;
    }

  
    cropPerSquare(k) {
        return this.r * k;
    }
}


class Kartoplyane extends Pole {
    constructor(name, r, S) {
        super(name, r); 
        this.S = S;
    }

   
    totalCrop(k) {
        return this.cropPerSquare(k) * this.S;
    }
}


document.getElementById("calcBtn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const r = parseFloat(document.getElementById("r").value);
    const k = parseFloat(document.getElementById("k").value);
    const S = parseFloat(document.getElementById("S").value);

    const field = new Kartoplyane(name, r, S);
    const result = field.totalCrop(k);

    document.getElementById("result").textContent =
        `Повний урожай з поля "${name}" становить: ${result.toFixed(2)} кг`;
});
