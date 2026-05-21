// Todos os cursos disponíveis
const cursosMTEC = [{
    nome: "Contabilidade",
    periodo: "Vespertino",
    duracao: "6 semestres",
    descricao: "Este curso ensina a gerir contas, registrar atos financeiros, elaborar balanços e analisar a saúde econômica de empresas e instituições."
},
{
    nome: "Química",
    periodo: "Vespertino",
    duracao: "6 semestres",
    descricao: "Estuda a composição, propriedades e transformações da matéria, capacitando para análises laboratoriais e processos industriais."
},
{
    nome: "Desenvolvimento de Sistemas",
    periodo: "Matutino",
    duracao: "6 semestres",
    descricao: "Focado na criação, análise e manutenção de softwares, sites e aplicativos, utilizando diversas linguagens de programação."
},
{
    nome: "Logística",
    periodo: "Matutino",
    duracao: "6 semestres",
    descricao: "Focado na gestão do fluxo de materiais, armazenamento e transporte, otimizando processos."
},
{
    nome: "Farmácia",
    periodo: "Matutino",
    duracao: "6 semestres",
    descricao: "Forma profissionais para atuar na produção de medicamentos, análises clínicas, controle de qualidade e assistência farmacêutica."
}
];

const container = document.getElementById("courses_container");

cursosMTEC.forEach(cursos => {
container.innerHTML += `
<article class="course_detail_card">

    <h2 class="course_name">
        ${cursos.nome}
    </h2>

    <div class="course_data">
        <p>
            <strong>Periodo:</strong> ${cursos.periodo}
        </p>

        <p>
            <strong>Duração:</strong> ${cursos.duracao}
        </p>
    </div>

    <p class="course_description">
        ${cursos.descricao}
    </p>

</article>
`
})


