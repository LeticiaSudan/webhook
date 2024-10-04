const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rota do webhook
app.post('/api/crm/webhook/225/7e2d4be9107a3b9c06d84199403a857c8a08657b2a05dfcd6ac10b854f5dfb4a', (req, res) => {
    console.log(req.body); // Log do corpo da requisição

    // Aqui você pode pegar informações do corpo se precisar
    const clientMessage = req.body.message || "Mensagem não recebida";

    // Resposta com as categorias, independente da mensagem do cliente
    const responseMessage = {
        "messages": [
            {
                "text": "Selecione a categoria de serviço:",
                "quickReplies": [
                    {
                        "title": "1- Banho e tosa",
                        "payload": "BANHO_E_TOSA"
                    },
                    {
                        "title": "2- Consulta veterinária",
                        "payload": "CONSULTA_VETERINARIA"
                    },
                    {
                        "title": "3- Vacinação e vermifugação",
                        "payload": "VACINACAO_VERMIFUGACAO"
                    },
                    {
                        "title": "4- Venda de Rações e acessórios",
                        "payload": "VENDA_RACOES_ACESSORIOS"
                    }
                ]
            }
        ]
    };

    // Retorna a resposta para o Scale4
    res.status(200).json(responseMessage);
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});