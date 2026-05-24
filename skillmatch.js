const candidato = {
  nome: "Josiane",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3,
};

//2. Lista de vagas disponíveis
class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(
    id,
    empresa,
    cargo,
    requisitos,
    salario,
    modalidade,
    nivel
  ) {
    super(id, empresa, cargo, requisitos, salario, modalidade);

    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

const vagas = [
  new VagaFrontEnd(
    1,
    "TechStart",
    "Desenvolvedor Front-End Junior",
    ["JavaScript", "GitHub", "Lógica de Programação"],
    5000,
    "Remoto",
    "Junior"
  ),

  new VagaFrontEnd(
    2,
    "CodeLab",
    "Estágio Front-End",
    ["JavaScript", "Kanban", "GitHub"],
    3000,
    "Híbrido",
    "Estágio"
  ),

  new VagaFrontEnd(
    3,
    "WebSolutions",
    "Programador JavaScript Junior",
    ["JavaScript", "Arrays", "Objetos", "Funções"],
    3000,
    "Presencial",
    "Junior"
  )
];

function criarContadorDeAnalises() {

  let total = 0;

  return function () {
    total++;

    return total;
  };
}

const contador = criarContadorDeAnalises();

function finalizarAnalise(nomeCandidato, callback) {

  console.log("Análise finalizada.");

  callback(nomeCandidato);
}

function exibirMensagemFinal(nome) {

  console.log(
    `${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`
  );
}

function buscarVagasSimuladas() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(vagas);

    }, 1000);

  });
}

async function iniciarSistema() {

  console.log("Carregando vagas...\n");

  const vagasCarregadas = await buscarVagasSimuladas();

  const analises = vagasCarregadas.map((vaga) => {

    const habilidadesEncontradas = vaga.requisitos.filter((req) =>
      candidato.habilidades.includes(req)
    );

    const habilidadesFaltantes = vaga.requisitos.filter(
      (req) => !candidato.habilidades.includes(req)
    );

    const compatibilidade = Math.round(
      (habilidadesEncontradas.length / vaga.requisitos.length) * 100
    );

    let classificacao = "";

    if (compatibilidade >= 80) {

      classificacao = "Alta compatibilidade";

    } else if (compatibilidade >= 50) {

      classificacao = "Média compatibilidade";

    } else {

      classificacao = "Baixa compatibilidade";
    }

    return {
      vaga,
      compatibilidade,
      habilidadesEncontradas,
      habilidadesFaltantes,
      classificacao
    };
  });

  analises.forEach((analise) => {

    console.log("====================================");

    console.log(`Empresa: ${analise.vaga.empresa}`);

    console.log(`Cargo: ${analise.vaga.cargo}`);

    console.log(
      `Compatibilidade: ${analise.compatibilidade}%`
    );

    console.log(
      `Habilidades encontradas: ${analise.habilidadesEncontradas.join(", ")}`
    );

    console.log(
      `Habilidades faltantes: ${analise.habilidadesFaltantes.join(", ") || "Nenhuma"}`
    );

    console.log(
      `Classificação: ${analise.classificacao}`
    );

    console.log(
      analise.vaga.exibirNivel()
    );

    console.log("====================================\n");
  });

  const melhorVaga = analises.reduce((melhor, atual) => {

    return atual.compatibilidade > melhor.compatibilidade
      ? atual
      : melhor;
  });

  console.log("VAGA MAIS COMPATÍVEL");

  console.log(
    `${melhorVaga.vaga.empresa} - ${melhorVaga.vaga.cargo}`
  );

  console.log(
    `Compatibilidade: ${melhorVaga.compatibilidade}%\n`
  );

  const todasFaltantes = analises.flatMap(
    (a) => a.habilidadesFaltantes
  );

  const recomendacoes = [...new Set(todasFaltantes)];

  console.log("RECOMENDAÇÃO DE ESTUDOS");

  console.log(
    `Priorize estudar: ${recomendacoes.join(", ")}\n`
  );

  console.log(
    `Total de análises realizadas: ${contador()}`
  );

  finalizarAnalise(
    candidato.nome,
    exibirMensagemFinal
  );
}

iniciarSistema();
