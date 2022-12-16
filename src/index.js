const express = require('express')
const app = express()
const connectDatabase = require('./database/db')

const routes = require('./routes')

app.use(express.json());
app.use(routes)
// app.put('/football/:id', (request, response) =>{
//     const {id} = request.params;
//     const {name, foundation, stadium} = request.body;
//     const footballIndex = football.findIndex(p => p.id === id);

//     if(footballIndex < 0){
//         return response.status(404).json({error: 'football not found'})
//     }
//     if(!name || !foundation || !stadium){
//         return response.status(400).json({error:'name, foundation and stadium are required'})
//     }
//     const football_update = {
//         id,
//         name,
//         foundation,
//         stadium
//     }
//     football[footballIndex] = football_update;
//     return response.json(football_update);
// })


connectDatabase().then(()=> {
    app.listen(3000, () =>{
        console.log('server is running');
    })
})
.catch((error) => console.log(error))
