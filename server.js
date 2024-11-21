import express from 'express';

const cats = [
   {
      id: 1,
      descricao: 'Neo',
      imagem: 'https://placecats.com/neo/300/200'
   },
   {
      id: 2,
      descricao: 'Millie',
      imagem: 'https://placecats.com/millie/300/150'
   },
   {
      id: 3,
      descricao: 'Millie e Neo',
      imagem: 'https://placecats.com/millie_neo/300/200'
   },
   {
      id: 4,
      descricao: 'Louie',
      imagem: 'https://placecats.com/louie/300/200'
   },
   {
      id: 5,
      descricao: 'Poppy',
      imagem: 'https://placecats.com/poppy/300/200'
   },
   {
      id: 6,
      descricao: 'Bella',
      imagem: 'https://placecats.com/bella/300/200'
   }
 ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
   console.log('Servidor de gatinhos está ouvindo na porta 3000');
});

app.get('/cats', (req, res) => {
   res.status(200).json(cats);
});

function buscarGatoPorId(id) {
   return cats.findIndex((cat) => {
      return cat.id === Number(id);
   });
}

app.get('/cats/:id', (req, res) => {
   const index = buscarGatoPorId(req.params.id); 

   if (index === -1) { 
      return res.status(404).json({ message: 'Gatinho não encontrado' }); 
   }

   res.status(200).json(cats[index]); 
});