const crypto = require("crypto");

module.exports = {
  async create(req, res) {
    const { pagina } = req.body;
    console.log(pagina);
    const id = crypto.randomBytes(4).toString("HEX");
    const obj = {
      id,
      nome: "Pilar Regis",
      dataNasc: "2000-01-01",
      cpf: "074.716.624-25",
      ativo: true,
      meta: 1000.2,
    };

    const information = [
      {
        pagina: 1,

        tamanho: 2,
        registros: [
          {
            id,
            nome: "Yuri Regis",
            dataNasc: "2000-01-01",
            cpf: "074.716.624-25",
            ativo: true,
            meta: 1000.2,
          },
          {
            id,
            nome: "Murilo Regis",
            dataNasc: "2000-01-01",
            cpf: "074.716.624-25",
            ativo: true,
            meta: 1000.2,
          },
        ],
      },
    ];

    information.map((item) => {
      item.registros.push(obj);
    });

    return res.json(information);
  },
};
