const camera =
document.getElementById("camera");

const successModal =
document.getElementById(
    "successModal"
);

const closeModal =
document.getElementById(
    "closeModal"
);

const canvas =
document.getElementById("canvas");

const preview =
document.getElementById("preview");

const captureButton =
document.querySelector(".capture_button");

const sendButton =
document.querySelector(".send_button");

let fotoBlob = null;
let stream = null;

/* ==========================
   INICIAR CÂMERA
========================== */

async function iniciarCamera() {

    try {

        stream =
        await navigator
        .mediaDevices
        .getUserMedia({
            video: true,
            audio: false
        });

        camera.srcObject =
        stream;

        await camera.play();

        camera.style.display =
        "block";

        preview.style.display =
        "none";

        console.log(
            "camera iniciada"
        );

    }

    catch(error) {

        console.error(error);

        alert(
            "Erro ao abrir câmera"
        );
    }
}

iniciarCamera();

/* ==========================
   TIRAR FOTO
========================== */

/* ==========================
   TIRAR FOTO
========================== */

captureButton
.addEventListener(
"click",
() => {

    if(!stream) {

        alert(
            "Câmera não iniciada"
        );

        return;
    }

    captureButton.disabled =
    true;

    let contador = 5;

    captureButton.innerHTML =
    `Capturando em ${contador}`;

    const timer =
    setInterval(() => {

        contador--;

        captureButton.innerHTML =
        `Capturando em ${contador}`;

        if(contador === 0) {

            clearInterval(timer);

            const largura =
            camera.videoWidth;

            const altura =
            camera.videoHeight;

            canvas.width =
            largura;

            canvas.height =
            altura;

            const ctx =
            canvas.getContext("2d");

            ctx.drawImage(
                camera,
                0,
                0,
                largura,
                altura
            );

            canvas.toBlob(
            (blob) => {

                if(!blob) {

                    alert(
                        "Erro ao capturar foto"
                    );

                    return;
                }

                fotoBlob =
                blob;

                preview.src =
                URL.createObjectURL(blob);

                preview.style.display =
                "block";

                camera.style.display =
                "none";

                console.log(
                    "foto capturada"
                );

            },
            "image/png"
            );

            captureButton.innerHTML =
            `
            <i class="fa-solid fa-check"></i>
            Foto Capturada
            `;
        }

    }, 1000);
});

/* ==========================
   ENVIAR
========================== */

sendButton.addEventListener(
"click",
async () => {

    const rm =
    document
    .getElementById("rm")
    .value;

    const nome =
    document
    .getElementById("name")
    .value;

    const curso =
    document
    .getElementById("course")
    .value;

    if(!rm || !nome || !curso) {

        alert(
            "Preencha todos os campos"
        );

        return;
    }

    if(!fotoBlob) {

        alert(
            "Tire uma foto primeiro"
        );

        return;
    }

    try {

        const formData =
        new FormData();

        formData.append(
            "rm",
            rm
        );

        formData.append(
            "nome",
            nome
        );

        formData.append(
            "curso",
            curso
        );

        formData.append(
            "foto",
            fotoBlob,
            "atestado.png"
        );

        console.log(
            "Enviando..."
        );

        const resposta =
        await fetch(
            "https://totem-autoatendimento-backend.onrender.com/enviar-atestado",
            {
                method: "POST",
                body: formData
            }
        );

        const dados =
        await resposta.json();

        if(!resposta.ok) {

            alert(
                dados.erro
            );

            return;
        }

        if(dados.mensagem) {
            console.log(successModal);
            successModal
            .classList
            .add("show");

        }

        console.log(
            dados
        );

    }

    catch(error) {

        console.error(error);

        alert(
            "Erro ao conectar com servidor"
        );
    }
});

/* ==========================
   FECHAR MODAL
========================== */

closeModal
.addEventListener(
"click",
() => {

    successModal
    .classList
    .remove("show");

});