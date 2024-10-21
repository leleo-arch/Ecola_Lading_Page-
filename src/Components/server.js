const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { nome, mesNascimento, idade, responsaveis, serieDesejada } = req.body;

  // Configurar o transporter (servidor SMTP)
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use seu serviço de email (pode ser Outlook, Gmail, etc.)
    auth: {
      user: 'estacaodopensar@contato.com', // Coloque aqui seu email
      pass: 'suasenha', // Coloque aqui sua senha do email
    },
  });

  // Conteúdo do email
  let mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'estacaodopensar@contato.com',
    subject: 'Novo cadastro de aluno',
    text: `
      Nome: ${nome}
      Mês de Nascimento: ${mesNascimento}
      Idade: ${idade}
      Responsáveis: ${responsaveis}
      Série Desejada: ${serieDesejada}
    `,
  };

  // Enviar email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email enviado com sucesso!');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
