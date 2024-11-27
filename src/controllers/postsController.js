import {getTodosOsPosts, criarPost, atulizarPost} from "../models/postsModels.js"; 
import fs from 'fs';
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) { 
   const posts =  await getTodosOsPosts();
   res.status(200).json(posts);
}

export async function postarPost(req, res) { 
   const novoPost = req.body; 
   try { 
      const postCriado = await criarPost(novoPost); // Cria um novo post
      res.status(201).json(postCriado); // Retorna o post criado
   } catch(error) {
      console.error(error.message); 
      res.status(500).json('Falha na requisição');
   }
}

 export async function uploadImagem(req, res) {
   const novoPost = {
       descricao: "",
       imgUrl: req.file.originalname, 
       alt: ""
   };
   
   try { 
       const postCriado = await criarPost(novoPost);
       const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
       fs.renameSync(req.file.path, imagemAtualizada);
       res.status(200).json(postCriado);  
   } catch(erro) {
       console.error(erro.message);
       res.status(500).json('Falha na requisição');
   }
} 

export async function atulizarNovoPost(req, res) {
   const id = req.params.id;
   const urlImagem = `http://localhost:3000/${id}.png`;
   try {
      const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
      const descricao = await gerarDescricaoComGemini(imgBuffer);

      const postAtualizado = {
         imgUrl: urlImagem,
         descricao: descricao,
         alt: req.body.alt
      };

      const postCriado = await atulizarPost(id, postAtualizado);
      res.status(200).json(postCriado);
   } catch(error) {
      console.error(error.message);
      res.status(500).json('Falha na requisição');
   }
}