
# SkillMatch JS

## Como a internet funciona

A internet funciona por meio da comunicação entre clientes e servidores.

O cliente, como um navegador ou aplicação, faz uma solicitação. O servidor recebe essa solicitação, processa os dados e envia uma resposta. Em sistemas reais, essa comunicação costuma acontecer por meio de requisições HTTP.

Neste projeto, essa lógica foi representada de forma simplificada com uma Promise simulando o carregamento das vagas.

---


## Sobre o projeto

O **SkillMatch JS** é um simulador de compatibilidade entre uma pessoa candidata e vagas fictícias de Front-End Júnior.

O sistema compara as habilidades da candidata com os requisitos de cada vaga e apresenta:

- percentual de compatibilidade;
- habilidades encontradas;
- habilidades faltantes;
- classificação da compatibilidade;
- vaga mais compatível;
- recomendação de estudos.

O projeto foi desenvolvido utilizando **somente JavaScript**, conforme proposto no mini-projeto avaliativo do curso **Fundamentos da Programação com JavaScript**.

---

## Objetivo

O objetivo do projeto é praticar os principais conceitos estudados no módulo, aplicando lógica de programação em um cenário próximo do mercado de tecnologia.

A aplicação simula uma análise simples de perfil profissional, comparando as habilidades de uma candidata com os requisitos de vagas de Front-End.

---

## Funcionalidades

O sistema realiza as seguintes ações:

1. Cria um perfil de candidata com nome, área, habilidades e tempo de experiência.
2. Cria uma lista de vagas fictícias de Front-End.
3. Compara as habilidades da candidata com os requisitos de cada vaga.
4. Calcula o percentual de compatibilidade.
5. Lista habilidades encontradas.
6. Lista habilidades faltantes.
7. Classifica a compatibilidade como alta, média ou baixa.
8. Identifica a vaga mais compatível.
9. Gera uma recomendação de estudos.
10. Simula o carregamento das vagas usando `Promise` e `async/await`.

---

## Como executar

Este projeto pode ser executado de duas formas.

### Opção 1: pelo terminal com Node.js

1. Abra o projeto no VS Code.
2. Abra o terminal.
3. Execute o comando:

```bash
node skillmatch.js
```

### Opção 2: pelo console do navegador

1. Abra o Google Chrome.
2. Pressione `F12` ou `Ctrl + Shift + J`.
3. Acesse a aba **Console**.
4. Copie o conteúdo do arquivo `skillmatch.js`.
5. Cole no console e pressione `Enter`.

---

## Estrutura do projeto

```text
resolucao-projeto/
├── README.md
├── skillmatch.js

```

---

## Conceitos aplicados

Durante o desenvolvimento foram aplicados os seguintes conceitos:

### JavaScript básico

- `const` e `let`;
- strings;
- números;
- booleanos;
- arrays;
- objetos;
- operadores matemáticos;
- operadores lógicos;
- estruturas condicionais com `if`, `else if` e `else`.

### Funções

Foram utilizadas funções tradicionais e funções de callback para organizar a lógica do sistema.

Exemplos aplicados:

- função para finalizar análise;
- função de mensagem final;
- função assíncrona para iniciar o sistema;
- função que retorna outra função, demonstrando closure.

### Arrays e métodos de array

O projeto utiliza métodos de array para percorrer, filtrar e reduzir informações:

- `map()` para gerar a lista de análises das vagas;
- `filter()` para encontrar habilidades presentes e faltantes;
- `reduce()` para encontrar a vaga com maior compatibilidade;
- `flatMap()` para juntar as habilidades faltantes em uma única lista.

### Programação Orientada a Objetos

O projeto utiliza classes para representar as vagas.

Foram aplicados:

- classe `Vaga`;
- classe `VagaFrontEnd`;
- construtor;
- atributos;
- métodos;
- herança com `extends`;
- uso de `super`;
- uso de `this`.

### Callback

Foi criada uma função que recebe outra função como parâmetro:

```javascript
finalizarAnalise(candidato.nome, exibirMensagemFinal);
```

Esse recurso permite executar uma mensagem final após a conclusão da análise.

### Closure

O projeto utiliza uma closure para contar o total de análises realizadas:

```javascript
function criarContadorDeAnalises() {
  let total = 0;

  return function () {
    total++;
    return total;
  };
}
```

A variável `total` permanece protegida dentro da função externa.

### Promise e async/await

O carregamento das vagas é simulado como se os dados viessem de um servidor:

```javascript
function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
}
```

A função `iniciarSistema()` utiliza `async/await` para aguardar o carregamento das vagas antes de executar a análise.

---


## Links do projeto

Repositório no GitHub:

```text
https://github.com/denisoncruz-sctech/resolucao-projeto
```

Quadro Trello:

```text
https://trello.com/b/Wmd1XvsL/mini-projeto-avaliativo-modulo-01-semana-06
```

Vídeo de apresentação:

```text
Adicionar link aqui
```

---

## Autores

Projeto desenvolvido em squad para o curso **Fundamentos da Programação com JavaScript**.

Integrantes:

```text
Dênison Santos da Cruz
Josiane da Franca
```

---

## Status do projeto

Projeto finalizado para entrega avaliativa.