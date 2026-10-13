// Todo o conteúdo do site fica aqui. Edite os textos entre colchetes.
module.exports = {
  titulo: 'Portifólio',
  perfil: {
    nome: 'Victor Anderson Bizerra Nicolau',
    cargo: 'Estudante de Sistemas de Informação',
    resumo:
      'Orquestrar máquinas com o intuito de resoluções de problemas é minha vocação. A pesquisa para chegar a solução do mesmo me apaixona e acende, em mim, a chama da curiosidade. Gostaria de compartilhar meus dons e ser guiado para caminhos onde possa obter conhecimento para desvendar mais repostas.',
    foto: '/img/Victor.jpg',
    curriculo: '/docs/Victor.pdf',
    habilidades: ['Back-end', 'Bancos de dados', 'Sistemas Integrados', `API's REST`],
    localizacao: 'Brasil',
  },
  projetos: [
    {
      titulo: 'Blog',
      descricao: 'O blog foi feito para obter um conhecimento mais profundo de Node.js e ferramentas complementares, como MongoDB, Express, EJS e outros.',
      tecnologias: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
      link: '',
    },
    {
      titulo: 'Cixcevem',
      descricao: 'Aplicação, semelhante ao linktree, que compila uma lista de links e os expõe na tela para o usuário.',
      tecnologias: ['Node.js', 'Express', 'Vercel'],
      link: '',
    },
    {
      titulo: 'Compilador',
      descricao: 'Programa de computador que traduz código-fonte escrito em uma linguagem de alto nível em código de baixo nível para que o processador possa executá-lo',
      tecnologias: ['C'],
      link: '',
    },
  ],
  formacao: [
    {
      periodo: '2023 a 2027',
      titulo: 'Sistemas de Informação',
      instituicao: 'Instituto Federal de Educação, Ciência e Tecnologia do Ceará',
      detalhe: 'Bancos de dados, lógica matemática e desenvolvimento back-end.',
    },
    {
      periodo: '2026 a 2027',
      titulo: 'Curso de inglês',
      instituicao: 'Centro Cearense de Idiomas',
      detalhe: 'Speaking, Listening, Writing and Reading',
    },
  ],
  contatos: [
    { rotulo: 'E-mail', valor: 'victoranderson1575@gmail.com', link: 'mailto:victoranderson1575@gmail.com' },
    { rotulo: 'GitHub', valor: 'https://github.com/VictorNicolau-coder', link: 'https://github.com/VictorNicolau-coder' },
    { rotulo: 'LinkedIn', valor: 'https://www.linkedin.com/in/victor-anderson-bizerra-nicolau-012183227', link: 'https://www.linkedin.com/in/victor-anderson-bizerra-nicolau-012183227' },
  ],
};
