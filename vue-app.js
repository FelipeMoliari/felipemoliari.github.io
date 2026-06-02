const techs = [
    {
        id: 'vue',
        name: 'Vue.js',
        category: 'Front-end',
        level: 'Intermediário',
        summary: 'Componentização reativa para construir interfaces modulares e escaláveis.',
        highlights: [
            'Uso de Composition API para organizar lógica por domínio.',
            'Componentes reutilizáveis focados em performance e clareza.',
            'Integração rápida com design system e APIs REST.'
        ],
        iconType: 'font',
        icon: 'fab fa-vuejs'
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        category: 'Front-end',
        level: 'Intermediário',
        summary: 'Tipagem estática para entregar código mais seguro e fácil de manter.',
        highlights: [
            'Definição de tipos e interfaces para contratos claros.',
            'Refatorações com mais confiança e menos bugs.',
            'Documentação implícita através das tipagens.'
        ],
        iconType: 'image',
        icon: 'https://cdn.simpleicons.org/typescript/3178c6'
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        category: 'Front-end',
        level: 'Avançado',
        summary: 'Base sólida para interações ricas, acessíveis e performáticas.',
        highlights: [
            'Domínio de manipulação do DOM e eventos.',
            'Integração com APIs nativas do browser.',
            'Boas práticas de organização e modularidade.'
        ],
        iconType: 'font',
        icon: 'fab fa-js-square'
    },
    {
        id: 'node',
        name: 'Node.js',
        category: 'Back-end',
        level: 'Intermediário',
        summary: 'Construção de APIs e automações com foco em produtividade.',
        highlights: [
            'Criação de APIs REST com boas práticas.',
            'Integração com bancos de dados e serviços externos.',
            'Automação de rotinas e scripts utilitários.'
        ],
        iconType: 'font',
        icon: 'fab fa-node-js'
    }
];

const activeTechId = Vue.ref(techs[0]?.id ?? '');
const activeTech = Vue.computed(() => techs.find((tech) => tech.id === activeTechId.value) ?? null);

const selectTech = (id) => {
    activeTechId.value = id;
};

Vue.createApp({
    setup() {
        return {
            techs,
            activeTechId,
            activeTech,
            selectTech
        };
    }
}).mount('#techShowcase');
