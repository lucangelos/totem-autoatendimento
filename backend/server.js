const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

/* criar uploads automaticamente */

if (!fs.existsSync("uploads")) {

    fs.mkdirSync("uploads");

}

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
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

const transporter =
nodemailer.createTransport({

    host: "smtp.gmail.com",

    port: 587,

    secure: false,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },

    tls: {
        rejectUnauthorized: false
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

            console.log("Dados recebidos:");
console.log(req.body);
console.log(req.file);

/* envio fake temporário */

await new Promise(resolve =>
    setTimeout(resolve, 1000)
);
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