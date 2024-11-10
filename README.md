# Oficina Virtual Porto

Este projeto é uma aplicação em vite-react + Typescript. A aplicação permite aos usuários realizar o Auto Diagnóstico, ver Benefícios para Segurados, solitar Guincho, localizar Mecânicos Parceiros, Consultar Peças automotivas e seus valores, tirar Dúvidas e Avaliar.

## Índice
- [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)
- [Assista ao vídeo no YouTube]()
- [Link do Vercel](https://challenge-quarta-sprint-arcl.vercel.app/)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/leticia-zg/challenge-quarta-sprint.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd challenge-quarta-sprint
   ```

3. Instale as dependências:

   ```bash
   npm i
   ```

   ```bash
   npm install react-hook-form @hookform/resolvers yup
   ```

   ```bash
   npm install --save-dev @types/google.maps
   ```

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

## Funcionalidades

### 1. **Navegação e Layout**
- **Menu**: Inclui a barra de navegação no topo da página, permitindo a navegação para diferentes seções do site.
- **Footer**: Adiciona um rodapé consistente em todas as páginas.

### 2. **Página Home**
Reune informações sobre todas as funcionalidades da nossa Oficina Virtual.
- **Botão de Ação**: Um botão "Confira" que redireciona para o Auto Diagnóstico.
- **Imagem e Texto**: Mostra uma imagem ilustrativa e uma descrição detalhada sobre a empresa e os serviços oferecidos, incluindo diagnóstico de veículos, guincho, revisão programada e mais.
- **Artigos de Benefícios**: Exibe os principais benefícios dos segurados Porto, como serviços de chaveiro, assistência a panes, descontos exclusivos e carro de reserva.
- **Links para Serviços**: Oferece links para páginas detalhadas sobre auto peças, guincho, mecânicos parceiros e auto diagnóstico.
- **Mecânicos Parceiros**: Exibe uma seção adicional com informações sobre oficinas próximas ao cep inserido, e link para a página da Porto com todas os parceiros.
- **Perguntas e Respostas**: Seção interativa com perguntas frequentes. Cada pergunta pode ser expandida para revelar a resposta correspondente.

### 3. **Página Auto Peças**

- **Guia de peças**: Fornece informações completas sobre cada peça, incluindo: descrição completa, imagens detalhes sobre compatibilidade e recomendações.


### 4. **Página Guincho**
- **Formulário de Solicitação**: Apresenta campos com preenchimento obrigatório para a solicitação do serviço.
- **Informações Importantes**: Apresenta informações necessárias e essenciais para o precedimento.

### 5. **Página Auto Diagnóstico**
A página de auto diagnóstico permite que os usuários realizem uma análise preliminar dos problemas de seus veículos fornecendo informações sobre o mesmo. O sistema também gera uma estimativa de preço para o serviço necessário com base nas informações fornecidas
- **Assistente Virtual**: O usuário insere informações sobre o que está acontecendo com o veículo.
- **Análise das Informações**: Baseado nas informações fornecidas pelo usuário, o sistema analisa os dados para identificar possíveis problemas no veículo.
- **Diagnóstico Preliminar**: Gera uma descrição do diagnóstico preliminar, destacando os problemas identificados e as possíveis causas.
-**Cálculo de Custo**: A partir do diagnóstico preliminar, o sistema fornece uma estimativa de custo para o serviço necessário.

## Como Usar
1. **Informe o problema**: Insira as informações solicitadas no formulário de diagnóstico.
2. **Envie**: Clique no botão "Enviar" para processar as informações.
3. **Devolução do diagnóstico**: Verifique o diagnóstico preliminar e a estimativa de preço fornecidos.

### 5. **Página Integrantes**

- **Nossa equipe**: Fornece informações sobre as integrantes, incluindo: nome completo, imagem, rm e redirecionamento para o LinkedIn.

### 6. **Página Dúvidas Frequentes**
A página de dúvidas frequentes ajuda os usuários a encontrar respostas para perguntas comuns sobre os serviços e benefícios disponíveis. A página também oferece uma opção para que os usuários enviem novas perguntas caso não encontrem a resposta desejada.

- **Exibição de Perguntas Frequentes**: Apresenta uma lista de perguntas frequentes com respostas, organizadas em um formato de expansão/colapso para facilitar a navegação.
- **Formulário de Envio de Dúvidas**: Permite que o usuário envie uma nova dúvida, que será analisada para inclusão futura na lista de perguntas frequentes.
- **Interatividade**: Ao clicar em uma pergunta, o usuário vê a resposta expandida. Um indicador visual, uma seta, mostra se a resposta está aberta ou fechada.
- **Feedback Visual**: As setas mudam de direção ao expandir ou colapsar a resposta para indicar o status de visualização.

## Como Usar
1. **Buscar a dúvida**: Navegue pela lista de perguntas e clique em uma delas para expandir a resposta.
2. **Envio de nova dúvida**: Se a resposta não for encontrada, escreva a dúvida no campo de texto disponível e clique no botão "Enviar".
3. **Confirmação**: O sistema exibirá uma mensagem de confirmação informando que a dúvida foi enviada.


### 7. **Seção Mecânicos Parceiros**
A página de localização de oficinas permite que os usuários encontrem centros automotivos parceiros próximos à sua localização inserindo o CEP. A página exibe um mapa interativo com marcadores para cada oficina parceira e lista alguns locais sugeridos.

- **Campo de Busca por CEP**: O usuário pode inserir o CEP e clicar no ícone de busca para localizar oficinas próximas.
- **Mapa Interativo**: Exibe as oficinas em um mapa, permitindo que o usuário visualize a localização exata e veja detalhes clicando nos marcadores.
- **Lista de Oficinas**: Exibe uma lista pré-definida de oficinas com informações de endereço e ícone de localização ao lado de cada item.
- **Botão "Ver Todos"**: Oferece um link para uma página externa com a lista completa de oficinas.

## Como Usar
1. **Digite o CEP**: Insira o CEP no campo de texto disponível.
2. **Clique no ícone de busca**: Após inserir o CEP, clique no ícone de lupa para buscar oficinas próximas.
3. **Visualize o mapa**: O mapa mostrará o marcador da oficina mais próxima com a possibilidade de ver detalhes ao clicar sobre o marcador.
4. **Consulte a lista de oficinas**: Navegue pela lista de oficinas sugeridas e clique no botão "Ver todos" para acessar a lista completa.
