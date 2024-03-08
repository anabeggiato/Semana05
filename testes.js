class Funcionario {
    constructor(nome, idade, salarioBase) {
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    calcularSalario(){

    }
}

class Professor extends Funcionario {
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
        super(nome, idade, salarioBase);
        this.disciplina = disciplina;
        this.horasAula = horasAula;
    }

    calcularSalario(horasAula, salarioBase) {
        this.salario = this.horasAula * this.salarioBase
        console.log(`O professor ${this.nome}, de ${this.idade} anos, dá aula de ${this.disciplina} durante ${this.horasAula} horas, e recebe um salário de ${this.salario.toLocaleString('PT')}`)
    }
}

let prof1 = new Professor("Mariano", 37, 50, "Ciências", 100);
let prof2 = new Professor("Reginaldo", 46, 48, "História", 100);

prof1.calcularSalario()
prof2.calcularSalario()



