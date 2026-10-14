# SpineForm

O **SpineForm** é uma ficha de avaliação clínica online desenvolvida para fisioterapeutas que trabalham com coluna e desejam organizar o registro das avaliações.

O SpineForm permite preencher a avaliação diretamente pelo navegador, incluindo informações do paciente, escalas clínicas, questionários e um mapa corporal interativo para registro dos sintomas. Ao final, é possível gerar um PDF com os dados preenchidos de forma organizada.

A ficha pode ser utilizada em computador, notebook, tablet, iPad ou celular, sem necessidade de instalação.

O foco é o preenchimento digital e a organização das informações da avaliação. Após a compra, o cliente recebe um material digital em PDF com instruções e o link de acesso à aplicação web.

## Landing page comercial

Implementação estática em `index.html`, `styles.css` e `script.js`, sem build, framework, backend ou instalação de dependências. Abra `index.html` no navegador ou sirva o diretório com um servidor estático. As fontes são carregadas do Google Fonts, com alternativas locais de sistema caso a rede esteja indisponível.

### Preço e checkout

Preço e checkout estão centralizados em `config.js`: `price: "À definir"` e `checkoutUrl: ""`. Quando a oferta estiver definida, atualize essas duas propriedades no mesmo arquivo. Informe o preço completo, incluindo a moeda, na propriedade `price`; o JavaScript aplica esse texto a todos os campos com `data-price`.

Configure somente o **link público de compra** em `checkoutUrl`. Deixe vazio enquanto o checkout não estiver definido. Nesse estado, o botão de compra tem `href="#"`, a navegação é impedida pelo JavaScript e a página informa “Compra disponível em breve”, sem mensagens de erro. Com uma URL HTTPS válida, o mesmo botão passa a abrir o checkout. Os demais CTAs conduzem à seção da oferta. Sem JavaScript, os preços exibem o texto temporário “À definir” e o checkout não é ativado.

**Nunca coloque o link de acesso à aplicação nesta landing page, nos assets ou na configuração.** Arquivos estáticos são públicos. O acesso ao produto é entregue exclusivamente no PDF após a compra.

### Screenshots

A página apresenta capturas reais da interface em `assets/spineform-avaliacao.jpg` e `assets/spineform-mapa-corporal.jpg`. A tela de identificação foi capturada com os campos vazios; o mapa contém somente marcações de demonstração, explicitamente identificadas na legenda. Nenhuma captura contém dados de pacientes ou a barra de endereço do navegador.

Os containers em `index.html` mantêm `data-screenshot-slot="avaliacao"` e `data-screenshot-slot="mapa-corporal"`. Para atualizar as capturas, salve imagens sem dados identificáveis ou endereços de acesso em `assets/`, atualize o `src`, as dimensões, o texto alternativo e a legenda do respectivo `<img>`. O CSS já aceita imagens responsivas nesses containers. Não inclua o endereço da aplicação em nomes de arquivos, metadados ou links públicos.

### Conteúdo e entrega

O conteúdo desta versão se baseia nos recursos descritos pelo proprietário e nas seções visíveis da aplicação. A interface foi inspecionada e a alternância de sintomas no mapa corporal foi conferida; a geração do PDF não foi testada nesta etapa. O preço está **À definir** e o checkout ainda não foi configurado. O comprador recebe um PDF com instruções e link de acesso à ficha online; após preencher a avaliação, gera um outro PDF com os dados registrados.

### Interações

Menu responsivo com estado acessível, fechamento por Escape, por seleção de link e por clique fora do header. FAQ com `<details>` nativo. Navegação e FAQ funcionam sem JavaScript; a ativação do checkout depende dele. Não há formulário de coleta de pacientes, analytics, cookies de rastreamento ou integração com a aplicação.
