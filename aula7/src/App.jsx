import Header from "./components/Header";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const post = {
    titulo: "Descobrindo as Praias do Nordeste",
    data: "15 de agosto de 2025",
    conteudo1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    conteudo2: "Cupiditate molestias cum sapiente impedit aut reprehenderit.",
  };

  return (
    <>
      <Header />
      <Article
        titulo={post.titulo}
        data={post.data}
        conteudo1={post.conteudo1}
        conteudo2={post.conteudo2}
      />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
