const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5500",
        "https://totem-autoatendimento-etec.vercel.app/"
    ]
}));
app.use(express.json());
app.use(express.static(__dirname));

/* ================= MULTER ================= */

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(
            null,
            Date.now() + path.extname(file.originalname)
        );
    }
});

const upload = multer({
    storage
});

/* ================= NODEMAILER ================= */

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

/* ================= ENVIO ================= */

app.post(
    "/enviar-atestado",
    upload.single("foto"),
    async (req, res) => {

        try {

            const {
                rm,
                nome,
                curso
            } = req.body;

            const foto = req.file;
            
            console.log(req.body);
            console.log(req.file);

            if (!foto) {
                return res.status(400).json({
                    erro: "Foto não enviada"
                });
            }

            await transporter.sendMail({

                from: process.env.EMAIL_USER,

                to: process.env.EMAIL_DESTINO,

                subject:
                "Novo Atestado Médico",

                html: `
                    <h2>Novo atestado enviado</h2>

                    <p>
                        <strong>RM:</strong>
                        ${rm}
                    </p>

                    <p>
                        <strong>Nome:</strong>
                        ${nome}
                    </p>

                    <p>
                        <strong>Curso:</strong>
                        ${curso}
                    </p>
                `,

                attachments: [
                    {
                        filename: foto.filename,
                        path: foto.path
                    }
                ]
            });

            res.json({
                mensagem:
                "Atestado enviado com sucesso!"
            });

        } catch (erro) {

            console.error(erro);

            res.status(500).json({
                erro:
                "Erro ao enviar atestado"
            });
        }
    }
);

/* ================= START ================= */

const PORT =
process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor rodando:
        http://localhost:${PORT}`
    );
});