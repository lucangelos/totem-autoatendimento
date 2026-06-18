// Todos os cursos disponíveis
const cursosPresenciais = [{
        nome: "Comércio Exterior",
        duracao: "2 semestres",
        descricao: "Focado na gestão de importação, exportação e logística internacional."
    },
    {
        nome: "Informática Suporte",
        duracao: "3 semestres",
        descricao: "Formação para suporte técnico, manutenção de redes, hardware e auxílio direto ao usuário final."
    },
    {
        nome: "Logística",
        duracao: "3 semestres",
        descricao: "Focado na gestão do fluxo de materiais, armazenamento e transporte, otimizando processos."
    },
    {
        nome: "Recursos Humanos",
        duracao: "3 semestres",
        descricao: "Focado na gestão de pessoas, recrutamento, seleção, treinamento e rotinas trabalhistas."
    }
];

const container = document.getElementById("courses_container");

cursosPresenciais.forEach(cursos => {
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
 

