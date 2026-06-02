"use strict";
const { createApp, computed, ref } = Vue;
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
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg'
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
    },
    {
        id: 'react',
        name: 'React',
        category: 'Front-end',
        level: 'Intermediário',
        summary: 'Interfaces baseadas em componentes com gerenciamento eficiente de estado.',
        highlights: [
            'Construção de SPAs com componentização e hooks.',
            'Gerenciamento de estado com Context API e useState.',
            'Integração com APIs REST e bibliotecas do ecossistema React.'
        ],
        iconType: 'font',
        icon: 'fab fa-react'
    },
    {
        id: 'java',
        name: 'Java',
        category: 'Back-end',
        level: 'Intermediário',
        summary: 'Desenvolvimento back-end orientado a objetos com tipagem forte e robustez.',
        highlights: [
            'Aplicação de orientação a objetos e design patterns.',
            'Desenvolvimento de aplicações back-end e sistemas acadêmicos.',
            'Uso de Collections, tratamento de exceções e I/O.'
        ],
        iconType: 'font',
        icon: 'fab fa-java'
    },
    {
        id: 'php',
        name: 'PHP',
        category: 'Back-end',
        level: 'Intermediário',
        summary: 'Desenvolvimento back-end server-side para aplicações web dinâmicas.',
        highlights: [
            'Criação de páginas e APIs dinâmicas com PHP puro.',
            'Manipulação de formulários, sessões e cookies.',
            'Integração com banco de dados via PDO e MySQLi.'
        ],
        iconType: 'font',
        icon: 'fab fa-php'
    },
    {
        id: 'docker',
        name: 'Docker',
        category: 'DevOps',
        level: 'Básico',
        summary: 'Containerização de aplicações para ambientes portáveis e reproduzíveis.',
        highlights: [
            'Criação e execução de containers com Dockerfile.',
            'Gerenciamento de serviços com Docker Compose.',
            'Isolamento de ambientes de desenvolvimento e produção.'
        ],
        iconType: 'font',
        icon: 'fab fa-docker'
    },
    {
        id: 'azure-devops',
        name: 'Azure DevOps',
        category: 'DevOps',
        level: 'Básico',
        summary: 'Gestão de pipelines, boards e repositórios dentro do ecossistema Microsoft.',
        highlights: [
            'Organização de tarefas e sprints com Azure Boards.',
            'Versionamento de código com Azure Repos.',
            'Configuração básica de pipelines de CI/CD.'
        ],
        iconType: 'image',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg'
    }
];
const activeTechId = ref(techs[0]?.id ?? '');
const activeTech = computed(() => techs.find((tech) => tech.id === activeTechId.value) ?? null);
const selectTech = (id) => {
    activeTechId.value = id;
};
createApp({
    setup() {
        return {
            techs,
            activeTechId,
            activeTech,
            selectTech
        };
    }
}).mount('#techShowcase');
