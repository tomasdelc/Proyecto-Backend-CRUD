const obtenerRecurso = (req, res, next) => {
  res.send("respond with a resource");
};

const obtenerUsuarios = (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "Marcos",
    },
    {
      id: 2,
      nombre: "Federico",
    },
    {
      id: 3,
      nombre: "Alejandra",
    },
  ]);
};

module.exports = { obtenerRecurso, obtenerUsuarios };
