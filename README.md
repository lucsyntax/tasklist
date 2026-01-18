# ✅ Todo Pro

Um app de tarefas feito com **React + TypeScript + TailwindCSS**, com foco em treinar fundamentos reais de front-end: **estado**, **componentização**, **renderização de listas** e um fluxo de criação de tarefa em **2 etapas** (**título → descrição**), inspirado em apps mais “profissionais”.

---

## 🖼️ Preview

- Demo: SEU_LINK_AQUI  
- Prints: (adicione aqui depois com imagens do repositório)

> Dica: depois que você fizer deploy na Vercel, coloque o link aqui.

---

## ✨ Features

- ✅ Listagem de tarefas com layout moderno (Tailwind)
- ➕ Fluxo de criação em etapas:
  - 1) Digitar **título**
  - 2) Digitar **descrição**
  - 3) Salvar e adicionar na lista
- 🧠 Estrutura pronta para evoluir com:
  - concluir tarefa
  - remover tarefa
  - filtros (todas / pendentes / concluídas)
  - persistência com `localStorage`

---

## 🧰 Stack

- **React**
- **TypeScript**
- **TailwindCSS**
- **Vite**

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js (versão LTS recomendada)
- Git

### Passo a passo

1) Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/todo-pro.git
Entre na pasta do projeto:

cd todo-pro
Instale as dependências:

npm install
Rode o projeto:

npm run dev
Abra no navegador:

http://localhost:5173

📁 Estrutura do projeto (resumo)
src/
  components/
    AddTask/        # (ou AddTask.tsx) UI do composer / criação
    TasksList/      # lista e item de tarefa
  App.tsx
  main.tsx
A estrutura pode mudar conforme você for refatorando (isso é normal).

🧩 Como funciona o fluxo de criação (2 etapas)
O fluxo de adicionar tarefa foi construído como um mini “wizard”:

O botão + abre o modo de criação (isAdding = true)

Etapa 1 (step = 1): usuário informa o título

Etapa 2 (step = 2): usuário informa a descrição

Ao salvar, uma nova tarefa é inserida no estado e o composer é resetado

Isso ajuda a treinar:

controle de estado

validação mínima

organização do fluxo de UI

✅ Próximos passos (roadmap)
 Marcar/desmarcar tarefa como concluída

 Remover tarefa

 Filtros (All / Active / Done)

 Persistência com localStorage

 Melhorar acessibilidade (focus, teclado, aria-label)

 Deploy na Vercel

🧠 Aprendizados
Como separar responsabilidades (abrir → avançar etapa → salvar)

Como pensar em UI baseada em estado (render condicional por step)

Como deixar a interface mais “produto” com Tailwind (spacing, cards, hover)

📄 Licença
Este projeto é para estudo e evolução contínua. Sinta-se à vontade para usar como base e adaptar.
