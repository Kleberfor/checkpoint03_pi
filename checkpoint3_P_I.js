/*********************************************************************
 * 1) CRIAR CONSTRUTOR PARA ALUNO E IMPORTAR O OBJETO COMO MÓDULO ALUNO
 *********************************************************************/

function Aluno(nome, qtFaltas, notas) {
    this.nome = nome
    this.qtFaltas = qtFaltas
    this.notas = notas
   
/***********************************************
 * 2) MÉTODO CALCULAR A MÉDIA
 ***********************************************/

 this.calcularMedia = function () {
    let media = 0
    for (let i = 0; i < this.notas.length; i++) {
        media += this.notas[i]
    }
    return media / this.notas.length
}
this.faltas = function () {
    return this.qtFaltas + 1
}
}
let aluno1 = new Aluno("Kleber", 5, [7, 8, 7, 9, 8])
let aluno2 = new Aluno("Angelica", 3, [3, 7, 6, 8, 8])
let aluno3 = new Aluno("William", 7, [5, 6, 8, 7, 9])
let aluno4 = new Aluno("Rosa", 13, [10, 8, 9, 8, 9 ])
let aluno5 = new Aluno("William", 18, [9, 8.5, 8, 7.5, 9])
let aluno6 = new Aluno("Rosa", 1, [6, 5, 7, 7, 6])

console.log(aluno1)

 
/***********************************************
 * 3) CRIAR O OBJETO LITERAL CURSO
 ***********************************************/

function Curso(nomeDoCurso, notaDeAprovacao, faltasMaximas, listaDeEstudantes) {
    this.nomeDoCurso = nomeDoCurso
    this.notaDeAprovacao = notaDeAprovacao
    this.faltasMaximas = faltasMaximas
    this.listaDeEstudantes = listaDeEstudantes


/*******************************************************
 * 4) CRIAR MÉTODO QUE ADICIONE ALUNOS À LISTA DO CURSO
 *******************************************************/

this.adicionarAluno = function (alunoNovo) {
        return this.listaDeEstudantes.push(alunoNovo)
    }


/***************************************************************************
 * 5) CRIAR MÉTODO QUE RETORNA O ALUNO APROVADO 
 ****************************************************************************/

this.aprovarAluno = function (alunoAvaliado) {
    let aprovado = false
    if (alunoAvaliado.calcularMedia() >= this.notaDeAprovacao && alunoAvaliado.qtFaltas < this.faltasMaximas) {
    aprovado = true
        } else if (alunoAvaliado.calcularMedia() >= (this.notaDeAprovacao + (this.notaDeAprovacao * 0.1)) && alunoAvaliado.qtFaltas == this.faltasMaximas) {
           aprovado = true
        } 
            return aprovado
    }


/***************************************************************************
 * 6) CRIAR MÉTODO QUE PERCORRE A LISTA DE ALUNOS E RETORNA OS APROVADOS
 ****************************************************************************/

    this.alunosAprovados = function () {
        let listaAlunosAprovados = []

        for(let i=0;i<this.listaDeEstudantes.length;i++){
            listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[i]))
            console.log(this.aprovarAluno(this.listaDeEstudantes[i]))
        }

            console.log(listaAlunosAprovados)
    }
}