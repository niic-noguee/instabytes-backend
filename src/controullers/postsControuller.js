import getTodosOsPosts from "../models/postsModels.js";

export async function listarPosts(req, res) {// Define uma rota GET para a URL '/posts'. 
   const posts =  await getTodosOsPosts();
   // Chama a função getTodosOsPosts() para obter os posts do banco de dados.
   res.status(200).json(posts);
   // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
}