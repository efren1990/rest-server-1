/**============================================================
 * PROYECTO - REST SERVER:
=============================================================*/
/**==============================================
* IMPORTAR MODULOS
=================================================*/
// ARCHIVO DE CONFIGURACIONES GLOBALES->
require('./config/config');
// EXPRESS->
const express = require('express');
// INSTANCIA EXPRESS->
const app = express();
// BODY PARSER - permite obtener los payload para las peticiones POST
const bodyParser = require('body-parser');
// MIDDLEWARE: parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// MIDLEWARE: parse application/json
app.use(bodyParser.json())

/**==============================================
* SISTEMA DE RUTAS
=================================================*/
// GET: ****USUARIO ******>
app.get('/usuario', (req, res) => {
  // RESPUESTA
  res.json("GET USUARIO 3:}> ");
});

// POST: ****USUARIO ******>
app.post('/usuario', (req, res) => {
  
  // TOMAR EL BODY DE LA PETICION - PAYLOAD
  let body = req.body;
  // VALIDAR DATOS
  if(body.nombre === undefined){
    
    // RESPUESTA POR MEDIO DE CODIGO DE ERROR
    res.status(400).json({
      ok: false,
      message: 'El nombre es necesario'
    });
  
  }else{
  
    // RESPUESTA
    res.json({
      body
    });

  }
});

// PUT: ****USUARIO ******>
app.put('/usuario/:id', (req, res) => {
  // TOMAR PARAMETROS DESPUES DE LA RUTA, LLEVAN LOS /:nombre
  let id = req.params.id;
  // RESPUESTA
  res.json({
    "Peticion": "PUT",
    "Parametro": id
  });
})

// DELETE: ****USUARIO ******>
app.delete('/usuario', (req, res) => {
  // RESPUESTA
  res.json("DELETE USUARIO 3:}> ");
});

// PATCH: ****USUARIO ******>
app.patch('/usuario', (req, res) => {
  // RESPUESTA
  res.json("PATCH USUARIO 3:}> ");
});

/**==============================================
* SALIDA DE PUERTO
=================================================*/
app.listen(process.env.PORT, () => {
  console.log(`On PORT: ${process.env.PORT}`);
})


