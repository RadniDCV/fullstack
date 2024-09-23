const express = require('express')
const fs = require('fs')
const app = express();
const cors = require("cors")


app.use(express.json())


app.use(cors());
  

app.post('/save', (req, res)=>{
    const newData = req.body;

    fs.readFile('data.json', 'utf8', (err, data)=>{
        if(err){
            console.error('Error al leer el archivo', err)
            return res.status(500).json({error: 'Error al leer el archivo'})
        }

        let jsonData=[];
            if (data){
                jsonData=JSON.parse(data)
            }
        jsonData.push(newData)

        fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err)=>{
            if(err){
                console.error('Error al guardar el archivo:', err)
                return res.status(500).json({error: 'Error al guardar el archivo'})
            }
            res.json({message:'Datos guardados correctamente'})
        })
    })
})

app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000')
})