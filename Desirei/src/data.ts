import { Service, Metric, FAQItem, FeedPreset } from "./types";

export const SERVICES: Service[] = [
  {
    id: "posicionamento",
    title: "Estratégia de Posicionamento",
    description: "Definição clara do seu diferencial de mercado, arquétipo de marca e narrativa magnética para atrair o cliente de alto ticket.",
    icon: "Compass",
    details: [
      "Diagnóstico e auditoria completa de perfil",
      "Definição de territórios de conteúdo e pilares estratégicos",
      "Estudo de público-alvo e cliente ideal (ICP) de alto padrão",
      "Criação de narrativa proprietária e tom de voz (Copywriting único)"
    ]
  },
  {
    id: "conteudo",
    title: "Gestão de Conteúdo Magnético",
    description: "Planejamento tático de posts, pautas estruturadas para stories diários e roteiros persuasivos com foco total em conversão.",
    icon: "Sparkles",
    details: [
      "Calendário editorial estratégico mensal focado em intenção de compra",
      "Redação persuasiva (Copywriting) para posts em carrossel e legendas",
      "Roteirização profissional para Reels e vídeos curtos (ganchos e CTAs)",
      "Cronograma estratégico para aquecimento de stories"
    ]
  },
  {
    id: "visual",
    title: "Identidade Visual Premium",
    description: "Design sofisticado e direção criativa para que seu perfil pareça uma boutique de luxo, gerando valor imediato ao primeiro olhar.",
    icon: "Palette",
    details: [
      "Direção de arte personalizada e paleta de cores magnética",
      "Design refinado de posts estáticos, carrosséis e capas de Reels",
      "Identidade visual de Stories e destaques inesquecíveis",
      "Guia de estética para fotos, ensaio profissional e cenários"
    ]
  }
];

export const METRICS: Metric[] = [
  {
    value: "+340%",
    label: "Alcance Orgânico",
    description: "Aumento médio na entrega orgânica e atração de novos seguidores qualificados nos primeiros 90 dias de gestão."
  },
  {
    value: "+15M",
    label: "Visualizações",
    description: "De impressões intencionais geradas organicamente para os perfis dos nossos parceiros de marca."
  },
  {
    value: "100%",
    label: "Intencional",
    description: "Sem 'postar por postar'. Cada peça de conteúdo atende a um objetivo claro do funil de vendas e atração."
  },
  {
    value: "10x+",
    label: "Valor Percebido",
    description: "Transformamos perfis amadores em marcas que justificam cobrar o dobro pelo mesmo serviço."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como funciona o processo de contratação?",
    answer: "Tudo começa no WhatsApp! Após clicar em qualquer botão do site, conversamos para entender seu negócio. Se houver alinhamento, agendamos uma reunião breve, fechamos o contrato, enviamos um briefing detalhado e iniciamos a pesquisa estratégica de posicionamento da sua marca."
  },
  {
    question: "Vou precisar gravar vídeos ou aparecer?",
    answer: "A gravação de vídeos (Reels/Stories) é altamente recomendada para gerar conexão e confiança, que são cruciais no mercado de alto padrão. No entanto, eu entrego os roteiros mastigados (palavra por palavra, ganchos e indicação de cenários), facilitando 100% a sua execução. Se você optar por não aparecer, desenhamos uma estratégia visual com carrosséis ricos e vídeos de banco estético profissional."
  },
  {
    question: "Para quais nichos os seus serviços são indicados?",
    answer: "Nossos serviços são focados em profissionais liberais que vendem serviços de alto valor (como advogados, médicos, dentistas, arquitetos, designers, psicólogos, consultores, mentores), infoprodutores de alto ticket e empresas que buscam elevar a percepção de valor e autoridade de suas marcas no ambiente digital."
  },
  {
    question: "O que está incluso na gestão mensal?",
    answer: "Está incluso todo o diagnóstico, planejamento estratégico de posicionamento, roteirização de Reels/vídeos, redação de legendas, criação do design visual premium das postagens, agendamento/postagem, relatórios mensais e suporte direto para tirar dúvidas."
  }
];

export const FEED_PRESETS: FeedPreset[] = [
  {
    id: "minimalista",
    name: "Minimalista & Sofisticado",
    tagline: "Ideal para Advogados de Elite, Consultores de Alta Finança e Médicos Especialistas.",
    colors: ["#121214", "#cfa864", "#ffffff", "#1e1b18"],
    posts: [
      { title: "O verdadeiro custo da mediocridade no mercado atual", category: "Autoridade", aspectRatio: "1:1", views: "14.2k" },
      { title: "Como proteger seu patrimônio com decisões estratégicas de longo prazo", category: "Educacional", aspectRatio: "1:1", views: "8.9k" },
      { title: "Os bastidores do fechamento de um contrato de 6 dígitos", category: "Conexão", aspectRatio: "1:1", views: "22.1k" },
      { title: "Posicionamento silencioso: por que as maiores marcas falam menos?", category: "Insights", aspectRatio: "1:1", views: "11.5k" },
      { title: "Iniciamos a mentoria com nosso novo grupo de elite. Vagas encerradas.", category: "Venda", aspectRatio: "1:1", views: "19.3k" },
      { title: "Três erros que dilapidam sua autoridade digital imediatamente", category: "Educacional", aspectRatio: "1:1", views: "15.4k" }
    ]
  },
  {
    id: "editorial",
    name: "Editorial & Forte",
    tagline: "Perfeito para Mentoras de Negócios, Estética Premium e Arquitetas de Luxo.",
    colors: ["#161311", "#e6c891", "#f9f6f0", "#544338"],
    posts: [
      { title: "Não compre mais seguidores. Compre atenção qualificada.", category: "Provocação", aspectRatio: "1:1", views: "34.5k" },
      { title: "Design de Interiores: Projetando o amanhã com sofisticação", category: "Portfólio", aspectRatio: "1:1", views: "12.1k" },
      { title: "Por que o design de alta costura inspira nosso tom de marca", category: "Estética", aspectRatio: "1:1", views: "9.8k" },
      { title: "De amadora a inesquecível: A jornada da nossa cliente de mentoria", category: "Estudo de Caso", aspectRatio: "1:1", views: "41.2k" },
      { title: "A engenharia por trás do desejo: o que faz alguém pagar 5x mais?", category: "Estratégia", aspectRatio: "1:1", views: "28.7k" },
      { title: "O guia prático para criar uma atmosfera de luxo no seu Instagram", category: "Tutorial", aspectRatio: "1:1", views: "18.3k" }
    ]
  },
  {
    id: "arrojado",
    name: "Arrojado & Tech",
    tagline: "Perfeito para Startups, Agências, Produtoras e Assessores Financeiros Disruptivos.",
    colors: ["#020203", "#e6c891", "#00ffcc", "#12131a"],
    posts: [
      { title: "O algoritmo mudou de novo. E agora? (A estratégia definitiva)", category: "Notícia", aspectRatio: "1:1", views: "55.1k" },
      { title: "Automatizando seu funil de WhatsApp para triplicar conversão", category: "Tech Hacks", aspectRatio: "1:1", views: "43.9k" },
      { title: "Construindo marcas exponenciais na era da Inteligência Artificial", category: "Futuro", aspectRatio: "1:1", views: "32.1k" },
      { title: "O dia em que colocamos R$ 100k no bolso com um único Reels de 15s", category: "Conexão", aspectRatio: "1:1", views: "94.0k" },
      { title: "As ferramentas ocultas que os top players usam no backstage", category: "Recursos", aspectRatio: "1:1", views: "27.6k" },
      { title: "Sua agência está te entregando posts ou faturamento real?", category: "Alerta", aspectRatio: "1:1", views: "61.3k" }
    ]
  }
];

export const WHATSAPP_LINK = "https://wa.me/5561984246995?text=Olá,%20Desireé!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20de%20Social%20Media.";
