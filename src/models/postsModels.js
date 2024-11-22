import conectarAoBanco from '../config/dbConfig.js';
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta à base de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO.
// O resultado da conexão é armazenado na variável conexao.

export default async function getTodosOsPosts() {
   // Função assíncrona para obter todos os posts do banco de dados.
   const db = conexao.db('instabytes');
   // Obtém o banco de dados chamado 'instabytes' a partir da conexão estabelecida.
   const colecao = db.collection('posts');
   // Obtém a coleção 'posts' dentro do banco de dados.
   return colecao.find().toArray();
   // Executa uma consulta para encontrar todos os documentos (posts) na coleção
   // e retorna os resultados como um array.
}