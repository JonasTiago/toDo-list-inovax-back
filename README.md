
#  ToDo List

Esse projeto consiste em uma simples lista de tarefas a serem realizadas, desenvolvida com NodeJS.


## Rodando localmente

1. Clone o projeto

```bash
  git clone https://github.com/JonasTiago/toDo-list-inovax-back
```

2. Entre no diretório do projeto

```bash
  cd toDo-list-inovax-back
```

3. Instale as dependências

```bash
  npm install
```

4. Configure the `.env` file using the `.env.example` file

5. Run prisma migrate 

```bash
  npx prisma migrate dev
```

6. Run the back-end in a development environment:

```bash
  npm run dev
```


## Documentação da API

#### Retorna todos as tasks

```http
  GET /task
```

#### Cria uma tasks

```http
  POST /task
```
##### Espera:
 ```javaScript
        {
            text:"Estudar Filosofia",
        }
 ```
 #### Atualiza uma tasks

```http
  PUT /task/:id
```
##### Espera:
 ```javaScript
        {
            text:"Estudar Filosofia",
            done:true
        }
 ```
 #### Cria uma tasks

```http
  DELETE /task/:id
```




## Funcionalidades

- Lista tarefas
- Apaga tarefa
- Edita tarefa
- Conclui tarefas


## Stack utilizada

**Back-end:** Node, Express

