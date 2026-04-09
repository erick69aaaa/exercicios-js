// ========================================
// Aula 06 — Funções e Arrays
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula06
// Não mexa no arquivo index.test.js.

// Exercício 1 — criarSaudacao
export function criarSaudacao(nome) {
    return `Olá, ${nome}!`;
}

// Exercício 2 — filtrarAprovados
export function filtrarAprovados(alunos) {
  return alunos.filter((aluno) => aluno.nota >= 60);
}

// Exercício 3 — extrairNomes
export function extrairNomes(alunos) {
  return alunos.map(aluno => aluno.nome);
}

// Exercício 4 — buscarAluno
export function buscarAluno(alunos, nome) {
  return alunos.find((alunos) => alunos.nome === nome);
}

// Exercício 5 — calcularMedia
export function calcularMedia(notas) {
  let valor = 0;
  for(let i = 0; i<notas.length; i++){ 
      valor += notas[i]; 

  }
  if (notas.length != 0 ){
  let media = valor/notas.length;
  return media;} 
  else{
    return 0;
  }
 }