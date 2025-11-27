# Portfolio Robson Souza - Desenvolvedora PHP

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Portfolio profissional da desenvolvedor PHP Robson Souza, implementado fielmente a partir do design no Figma. O projeto apresenta uma interface moderna e responsiva, destacando projetos e habilidades técnicas.

## 🌐 Demo ao Vivo

**[Acesse o Portfolio](https://robsonbs.github.io/friendly-octo-sniffle/)**

## 📋 Visão Geral

Este projeto é um portfolio completo que inclui:

### ✨ Funcionalidades

* **Design Responsivo** - Adaptação perfeita para desktop, tablet e mobile
* **Interface Moderna** - Design escuro com elementos visuais atraentes
* **Navegação Intuitiva** - Experiência fluida entre seções
* **Projetos em Destaque** - Grid com 6 projetos reais
* **Contato Social** - Links para redes sociais e comunicação

### 🎨 Seções Implementadas

1. **Hero/Intro** - Apresentação pessoal com avatar e tecnologias
2. **Projetos** - Grid 2x3 com projetos detalhados
3. **Contato** - Links para LinkedIn, Instagram, GitHub e E-mail

## 🛠️ Tecnologias Utilizadas

### Frontend

* **HTML5** - Estrutura semântica com data-attributes do Figma
* **CSS3** - Estilização moderna com Flexbox e design responsivo
* **JavaScript Vanilla** - Interatividade sem frameworks

### Design System

* **Cores**: Esquema de cores escuro com acentos coloridos
* **Tipografia**: Asap (títulos), Inconsolata (código), Maven Pro (texto)
* **Layout**: Sistema Flexbox para layouts responsivos

### Deploy & CI/CD

* **GitHub Pages** - Hospedagem gratuita
* **GitHub Actions** - Deploy automático via CI/CD

## 📁 Estrutura do Projeto

```
friendly-octo-sniffle/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos principais
│   ├── js/
│   │   └── main.js         # JavaScript principal
│   └── images/             # Assets de imagem
│       ├── intro-bg-new.jpg
│       ├── contact-bg.jpg
│       ├── profile-avatar-new.jpg
│       ├── project-*.jpg   # Imagens dos projetos
│       └── icon-*.svg      # Ícones das redes sociais
├── .github/
│   ├── workflows/
│   │   └── deploy.yml      # GitHub Actions para deploy
│   └── copilot-instructions.md
└── README.md
```

## 🎯 Projetos em Destaque

1. **Travelgram** - Rede social de viagens
2. **Página de Receita** - Cupcakes step-by-step
3. **Tech News** - Portal de notícias tecnológicas
4. **Refund** - Sistema de reembolsos
5. **Página de Turismo** - Guia de viagem para Busan
6. **Zingen** - Landing page para app de Karaokê

## 🚀 Deploy Automático

O projeto utiliza **GitHub Actions** para deploy automático:

* ✅ **Trigger**: Push na branch `main`
* ✅ **Deploy**: Automático para GitHub Pages
* ✅ **URL**: `https://robsonbs.github.io/friendly-octo-sniffle/`

### Configuração do Deploy

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:
```

## 💻 Desenvolvimento Local

### Pré-requisitos

* Python 3.x (para servidor local)
* Git

### Rodando Localmente

```bash
# Clone o repositório
git clone https://github.com/robsonbs/friendly-octo-sniffle.git

# Entre no diretório
cd friendly-octo-sniffle

# Inicie servidor local
python -m http.server 8000

# Acesse no navegador
http://localhost:8000
```

## 🎨 Design System

### Paleta de Cores

```css
:root {
    /* Base Colors */
    --color-gray-100: #E2E4E9;
    /* Texto principal */
    --color-gray-200: #C0C4CE;
    /* Texto secundário */
    --color-gray-300: #878EA1;
    /* Texto terciário */
    --color-gray-400: #292C34;
    /* Backgrounds */
    --color-gray-500: #16181D;
    /* Background principal */

    /* Accent Colors */
    --color-red: #E3646E;
    /* Nome/HTML */
    --color-purple: #BB72E9;
    /* PHP */
    --color-blue: #3996DB;
    /* CSS */
    --color-yellow: #EABD5F;
    /* JavaScript */
    --color-green: #82BC4F;
    /* GitHub */
}
```

### Tipografia

* **Títulos**: Asap Bold (16px, 24px, 56px)
* **Código/Tags**: Inconsolata Bold (12px, 16px, 20px)
* **Texto**: Maven Pro Regular/Medium (14px, 16px)

## 📱 Responsividade

* **Desktop**: Layout completo com 1366px max-width
* **Tablet**: Grid adaptável e espaçamentos ajustados
* **Mobile**: Layout em coluna única, cards empilhados

## 🔧 Funcionalidades JavaScript

* **Hover Effects**: Animações suaves nos cards de projetos
* **Tag Interactions**: Base para futura filtragem por tecnologia
* **Social Links**: Preparado para integração com redes reais
* **Smooth Scrolling**: Navegação fluida entre seções

## 📈 Performance & SEO

* ✅ **HTML Semântico** - Estrutura acessível
* ✅ **Meta Tags** - SEO básico configurado
* ✅ **Alt Text** - Todas as imagens têm descrições
* ✅ **Fontes Otimizadas** - Google Fonts com preload
* ✅ **Assets Locais** - Imagens hospedadas no repositório

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👩‍💻 Sobre a Desenvolvedora

**Robson Souza** - Desenvolvedora PHP

*"Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos."*

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
