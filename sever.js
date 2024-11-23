import express from "express";
import routes from "./src/routes/postRoutes.js";
const posts = [
  //Array que vai ser usado como base de dados
  {
    id: 1,
    descricao: "Foto de um gatinho fofo",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 2,
    descricao: "Paisagem marítima",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 3,
    descricao: "Cachorro fazendo festa",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 4,
    descricao: "Montanha nevada",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 5,
    descricao: "Comida deliciosa",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 6,
    descricao: "Cidade à noite",
    imagem: "https://placekitten.com/200/300",
  },
];
const app = express(); //Inicializa um objeto Express(servidor)
app.use(express.static("uploads"));
routes(app);
app.listen(3000, () => {
  //Monitora, utilizando a porta 3000 do computador, que o servidor está escutando
  console.log("Server Listening!");
});


function getPostId(id) {
  //Metodo para retornar um obeto especifico de acordo com o id passado como parametro
  return posts.findIndex((post) => {
    //busca no array um id que seja igual ao parametro
    return post.id === Number(id); //retorna o id do post qndo este for igual ao do parametro
  });
}
app.get("/posts/:id", (req, res) => {
  const index = getPostId(req.params.id);
  res.status(200).json(posts[index]); //Envia pro servidor e converte o objeto em um Json que será renterizado
});

