import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
// Cria uma instância do Express, que será o núcleo da nossa aplicação.
routes(app);

app.listen(3000, () => {
   console.log('Servidor ouvindo na porta 3000');
});// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto para receber requisições.

/* function buscarPostPorID(id){
   return posts.findIndex((post) => {
       return post.id === Number(id);
   })
}

app.get('/posts/:id', (req, res) => {
   const index = buscarPostPorID(req.params.id); 

   if (index === -1) { 
      return res.status(404).json({ message: 'Post não encontrado' }); 
   }

   res.status(200).json(posts[index]); 
}); */