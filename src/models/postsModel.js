import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); //Cria uma conexao do cliente ao banco de dados

export  async function getAllPosts(){
    const db = conexao.db("imersao-instabytes"); //Obj referente ao banco de dados
    const colecao = db.collection("posts"); //Coleçao de todos os posts da base de dados
    return colecao.find().toArray(); //retorna todos os posts em forma de um array 
}
export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes"); 
    const colecao = db.collection("posts"); 
    return colecao.insertOne(novoPost); 
}
export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId (objId)}, {$set: novoPost}); 

}