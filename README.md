# Curso Ignite Nodejs

## Projeto 04 - DDD no Node.js

Nesse quarto módulo o foco foi desenvolver uma aplicação de fórum do zero aplicando os conceitos de Clean Architecture e DDD. Desde de o começo foi construído os casos de uso da aplicação com testes e de maneira totalmente desacoplada de ferramentas, focando apenas no domínio da aplicação. Utilizei conceitos como Value Objects, lidar com erro de forma funcional, Aggregates, Watched Lists, Subdomínios, Domain Events, etc.

# DDD (Domain-driven Design)

Design dirigido à domínio

### Domínio

- Domain Experts
  - Conversa
- Linguagem ubíqua

- Usuário
  - Cliente
  - Fornecedor
  - Atendente
  - Barman

- Agregados
- Value Objects
- Eventos de domínio
- Subdomínios (Bounded Contexts)
- Entidades
- Casos de uso

# Casos de uso e entidades

- Muita dificuldade em saber as dúvidas dos alunos
- Eu tenho que responder os alunos e eu me perco em quais dúvidas já foram respondidas


# Conceitos

- Aggregate
- WatchedList

## Exemplo - Aggregate

- Order -> OrderItem[]
- Order -> Shipping

- Questions -> Attachment ()

### Criação - simples

- Título
- Conteúdo
- Anexos (3)

### Edição - complexo

- Título - deboa
- Conteúdo - deboa
- Anexos - complexo

- Adicionar um novo anexo (create)
- Remover o segudo anexo que tinha sido criado previamente (delete)
- Editar um anexo existente (update)

# Subdomínios

- Core: O que dá dinheiro 
- Supporting: Dá suporte para o core funcionar
- Generic: Você precisa, mas não são tão importantes

- Vantagens (micro-serviços)

## exemplos

### Subdomínios Core de um E-commerce 

- Compra
- Catálogo
- Pagamento
- Entrega
- Faturamento

### Subdomínios Supporting de um E-commerce 

- Estoque

### Subdomínios Generic de um E-commerce 

- Notificação ao cliente
- Promoções
- Chat
