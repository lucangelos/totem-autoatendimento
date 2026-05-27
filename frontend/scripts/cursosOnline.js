// Todos os cursos disponíveis
const cursosOnline = [{
    nome: "Comércio",
    duracao: "2 semestres",
    descricao: "Focado na gestão de vendas, logística e marketing. Prepara o aluno para planejar e operar atividades comerciais de bens e serviços."
},
{
    nome: "Desenvolvimento de Sistemas",
    duracao: "3 semestres",
    descricao: "Focado na criação, análise e manutenção de softwares, sites e aplicativos, utilizando diversas linguagens de programação."
},
{
    nome: "Guia de Turismo",
    duracao: "2 semestres",
    descricao: "Focado em formar profissionais para planejar roteiros, acompanhar grupos e apresentar atrativos culturais ou naturais com segurança."
},
{
    nome: "Secretariado",
    duracao: "3 semestres",
    descricao: "Capacita para organizar rotinas administrativas, redigir documentos, gerir agendas e assessorar executivos com eficiência."
},
{
    nome: "Transações Imobiliárias",
    duracao: "3 semestres",
    descricao: "Focado em capacitar o profissional para intermediar compra, venda e locação de imóveis, além de gerir contratos e documentações do setor"
}
];

const container = document.getElementById("courses_container");

cursosOnline.forEach(cursos => {
container.innerHTML += `
<article class="course_detail_card">

    <h2 class="course_name">
        ${cursos.nome}
    </h2>

    <div class="course_data">
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


