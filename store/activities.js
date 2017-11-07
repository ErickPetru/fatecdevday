import speakers from './speakers'

const talks = [
  {
    id: 1,
    icon: 'assignment_turned_in',
    time: '07:30 - 08:15',
    title: 'Credenciamento',
    description: 'O credenciamento no evento é obrigatório e não ocorre além do horário estipulado.'
  },

  {
    id: 2,
    time: '08:15 - 09:20',
    title: 'Do Java ao Node',
    subtitle: 'Uma Jornada Inesperada',
    description: 'Atualmente, inúmeras linguagens de programação estão à disposição, porém nem sempre é fácil a mudança de hábitos dentro de uma organização ou equipe. Nesta palestra, os participantes podem conhecer sobre a adoção de uma nova plataforma (no caso, Node) para reescrever parte de um grande sistema, os problemas enfrentados, as vantagens e desvantagens da migração.',
    speaker: speakers.talks.find(speaker => speaker.name === 'José Damiani')
  },

  {
    id: 3,
    time: '09:20 - 10:25',
    title: 'Sua Aplicação => (SwarmMode)',
    description: 'Como "containerizar" sua solução de microserviços com Docker e executá-la de forma replicada em modo cluster com o Docker Swarm. Nesta palestra, os participantes podem ver dos conceitos importantes a serem considerados na construção dos Dockerfile até a construção e utilização dos _docker-compose.yml_ de sua _stack_, por fim executando sua solução em seu computador e na AWS.',
    speaker: speakers.talks.find(speaker => speaker.name === 'Wanderley Panosso')
  },

  {
    id: 4,
    time: '10:25 - 11:30',
    title: 'Inteligência Artificial e Reconhecimento Óptico com PHP',
    description: 'PHP é focado em _scripts_ do lado do servidor, como coletar dados de formulários e gerar páginas dinâmicas. Mas pode ir além: de _scripts_ de linha de comando a aplicações _desktop_ com GTK. E por que não resolver problemas avançados de Inteligência Artificial e Reconhecimento Óptico? Nesta palestra, os participantes podem descobrir uma nova gama de possibilidades com PHP.',
    speaker: speakers.talks.find(speaker => speaker.name === 'Rodrigo Cardoso')
  },

  {
    id: 5,
    icon: 'local_dining',
    time: '11:30 - 13:30',
    title: 'Almoço',
    description: 'O intervalo para almoço é livre, cada participante pode escolher onde fazer sua refeição. Ressalta-se que a Fatec Taquaritinga não dispõe de restaurante próprio, recomendando estabelecimentos da cidade para o almoço.'
  },

  {
    id: 6,
    time: '13:30 - 14:35',
    title: 'O Maravilhoso Mundo do ReactJS',
    description: 'Você já conhece o React? Muita gente já pode ter ouvido falar nesta badalada biblioteca JavaScript para construção de interfaces, lançada originalmente pelo Facebook em 2015. Nesta palestra, os participantes podem conhecer mais sobre essa tecnologia e suas possibilidades, visualizar alguns exemplos e explorar o maravilhoso mundo do React.',
    speaker: speakers.talks.find(speaker => speaker.name === 'Guilherme Berghauser')
  },

  {
    id: 7,
    time: '14:35 - 15:40',
    title: 'O Bê-á-bá do HTTP com Python',
    description: 'Python é uma linguagem de alto nível que tem crescido bastante em todos os principais _rankings_ de linguagens de programação. Mas Python não está aí apenas para a área de _data science_. Nesta palestra, os participantes podem conhecer um pouco sobre o protocolo HTTP, como ele funciona e como escrever um exemplo em Python utilizando o Simple HTTP Server.',
    speaker: speakers.talks.find(speaker => speaker.name === 'Sérgio Oliveira')
  },

  {
    id: 8,
    icon: 'free_breakfast',
    time: '15:40 - 16:10',
    title: 'Coffee Break',
    description: 'Breve intervalo para descanço dentro do próprio evento.'
  },

  {
    id: 9,
    time: '16:10 - 17:15',
    title: 'Implementando um Pick Up Line Generator com JavaScript',
    description: 'Nesta palestra, os participantes podem ver a criação de um aplicativo _mobile_ gerador de "cantadas", usando puramente JavaScript! Desde a construção de uma API RESTful usando Node + Express, até a interface com React Native. Esta palestra tem foco prático, com a implementação dos dois lados (_frontend_ e _backend_) da aplicação móvel nativa usando tecnologias Web.',
    speakers: [
      speakers.talks.find(speaker => speaker.name === 'Henrique Zago'),
      speakers.talks.find(speaker => speaker.name === 'Silvio Pereira')
    ]
  },

  {
    id: 10,
    icon: 'people',
    time: '17:15 - 17:30',
    title: 'Sorteios',
    description: 'Distribuição de descontos em cursos e livros oferecidos por nossos parceiros apoiadores do evento.'
  },

  {
    id: 11,
    icon: 'time_to_leave',
    time: '17:30',
    title: 'Encerramento'
  }
]

const liveCodings = [
  {
    id: 1,
    time: null,
    title: 'Desenvolvimento de um Aplicativo Android',
    description: 'Durante esta sessão de codificação ao vivo, os participantes podem acompanhar e interagir com os convidados enquanto um aplicativo completo para Android é criado, desde as decisões iniciais para a criação do projeto até o aplicativo pronto para executar.',
    speakers: [
      speakers.liveCodings.find(speaker => speaker.name === 'Hugo Rossi'),
      speakers.liveCodings.find(speaker => speaker.name === 'Rafael Peratello'),
      speakers.liveCodings.find(speaker => speaker.name === 'Ulisses Curti')
    ]
  },

  {
    id: 2,
    time: null,
    title: 'Desenvolvimento de um Aplicativo iOS',
    description: 'Durante esta sessão de codificação ao vivo, os participantes podem acompanhar e interagir com o convidado enquanto um aplicativo completo para iOS é criado, desde as decisões iniciais para a criação do projeto até o aplicativo pronto para executar.',
    speaker: speakers.liveCodings.find(speaker => speaker.name === 'Denis Oliveira')
  }
]

export default {
  talks: talks,
  liveCodings: liveCodings.sort((a, b) => a.title && a.title.localeCompare(b.title))
}
