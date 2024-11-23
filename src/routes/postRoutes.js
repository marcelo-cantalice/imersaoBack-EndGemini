import express from "express";
import multer from "multer";
import cors from "cors";
import  { listarPosts, postarNovoPost,uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOption = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,

};
// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});
// Cria uma instância do middleware Multer
const upload = multer({ dest: "./uploads", storage });
//linux ou mac
//const upload = multer({ dest: "./uploads"});

const routes = (app) => {
  app.use(express.json()); //Informa ao servidor que será utilizado JSON
  app.use(cors(corsOption));
  //Rota que busca todos os Posts
  app.get("/posts", listarPosts);
  // Rota pra criar post
  app.post("/posts", postarNovoPost);
  //Rota para upload de uma unica imagem
  app.post("/upload", upload.single("imagem"),uploadImagem);
  app.put("/upload/:id",atualizarNovoPost);
};

export default routes;