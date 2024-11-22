import express from 'express';
import { listarPosts } from '../controullers/postsControuller.js';

const routes = (app) => {
   app.use(express.json());//Permite que recebamos dados em formato JSON nas requisições POST.
   
   app.get('/posts', listarPosts);
}

export default routes;