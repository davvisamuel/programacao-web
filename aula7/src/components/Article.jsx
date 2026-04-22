function Article(props) {
  return (
    <main>
      <article>
        <h2>{props.titulo}</h2>
        <time>{props.data}</time>
        <p>{props.conteudo1}</p>
        <p>{props.conteudo2}</p>
      </article>
    </main>
  );
}

export default Article;
