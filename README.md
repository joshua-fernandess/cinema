# Sistema de Gerenciamento de Cinema
## Visão Geral
Este é um sistema simples desenvolvido em Node.js para gerenciar sessões de cinema. Ele permite aos usuários adicionar novas sessões, listar sessões existentes, atualizar detalhes das sessões, cancelar sessões e sair do programa.
### Requisitos
* Node.js instalado na sua máquina.
* npm (Node Package Manager) para instalar as dependências.

### Instalação 
* 1. Clone o repositório do GitHub:

~~~~
git clone https://github.com/joshua-fernandess/cinema 

 cd cinema 
~~~~~

* 2. Instale as dependências:

```bash
npm install
npm install prompt-sync
```

### Uso 
``` bash
node sessao.js
```
## Funcionalidades
#### 1. Interface de Menu:

Ao iniciar o aplicativo, um menu é exibido com as seguintes opções:
* Adicionar uma nova sessão
* Listar todas as sessões
* Atualizar uma sessão existente
* Cancelar uma sessão
* Sair

#### 2. Adicionar uma Nova Sessão:

Os usuários podem adicionar uma nova sessão de cinema informando detalhes como nome do filme, data, hora e número da sala.

#### 3. Listar Todas as Sessões:

Exibe uma lista formatada de todas as sessões de cinema existentes, mostrando nome do filme, data, hora e número da sala.

#### 4. Atualizar uma Sessão:

Permite aos usuários selecionar uma sessão pelo seu número e atualizar sua data e hora.

#### 5. Cancelar uma Sessão:

Permite aos usuários cancelar uma sessão selecionando-a na lista.

#### 6. Sair do Programa:

Permite aos usuários sair do aplicativo de forma segura.

