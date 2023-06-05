const express = require('express'); 
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './data/Curriculo.db';
const urlencodedparser = bodyParser.urlencoded({extended: false})

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(express.static('./frontend'))
app.use(bodyParser.json());
app.use(express.json());
const db = new sqlite3.Database(DBPATH, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Connected to the database.');
    }
});
  
// C
app.post("/caracteristicas/add", urlencodedparser , (req, res) => {
    const sql = `INSERT INTO tb_caracteristicas (titulo, nivel, candidato_id) VALUES (?, ?, ?)`
    const {titulo, nivel, candidato_id} = req.body
    const values = [titulo, nivel, candidato_id]
    db.run(sql, values, err => {
        if (err) {
            throw err
        } else {
            res.status(200).send('Caracteristica adicionada')
        }
    })
})

// R
app.get("/caracteristicas", (req, res) => {
    db.all(
      "SELECT *, nome FROM tb_caracteristicas JOIN tb_candidato ON tb_caracteristicas.candidato_id = tb_candidato.id",
      (err, rows) => {
        if (err) {
          console.error(err.message);
          res.status(500).send("Internal server error");
        } else {
          const caracteristicas = rows.map((row) => {
            const { caracteristica_id, titulo, nivel, candidato_id, nome} = row;
            return { caracteristica_id, titulo, nivel, candidato_id, nome};
          });
          res.json(caracteristicas);
        }
      }
    );
});

// U
app.put('/caracteristicas/update/:id', urlencodedparser, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const sql = `UPDATE tb_caracteristicas SET titulo = ?, nivel = ?, candidato_id = ?  WHERE caracteristica_id = ?`
    const {titulo, nivel, candidato_id} = req.body
    const values = [titulo, nivel, candidato_id, req.params.id]
    db.run(sql, values, err => {
        if (err) {
            throw err
        } else {
            res.status(200).send('Dados atualizados')
        }
    })
})

// D
app.delete('/caracteristicas/remove/:id', (req, res) => {
    const sql = `DELETE FROM tb_caracteristicas WHERE caracteristica_id = ${req.params.id}`
    db.run(sql, err => {
        if (err) {
            throw err
        } else {
            res.status(200).send('Dado removido')
        }
    })
})

app.get("/experiencia", (req, res) => {
    db.all("SELECT * FROM  tb_experiencia", (err, rows) => {
        if (err) {
          console.error(err.message);
          res.status(500).send("Internal server error");
        } else {
          res.json(rows);
        }
      }
    );
});

app.get("/formacao", (req, res) => {
    db.all("SELECT * FROM  tb_formacao", (err, rows) => {
        if (err) {
          console.error(err.message);
          res.status(500).send("Internal server error");
        } else {
          res.json(rows);
        }
      }
    );
});


app.get("/habilidades", (req, res) => {
    db.all("SELECT * FROM  tb_habilidades", (err, rows) => {
        if (err) {
          console.error(err.message);
          res.status(500).send("Internal server error");
        } else {
          res.json(rows);
        }
      }
    );
});

app.get("/info", (req, res) => {
    db.all("SELECT * FROM  tb_info", (err, rows) => {
        if (err) {
          console.error(err.message);
          res.status(500).send("Internal server error");
        } else {
          res.json(rows);
        }
      }
    );
});


app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});