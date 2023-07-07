# DDD (Domain-driven Design)

Design dirigido à domínio

### Domínio

- Domain Experts
  - Conversa
  - 
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