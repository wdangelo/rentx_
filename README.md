# Cadastro de Carro

**RF** => Requisitos funcionais
    Deve ser possivel cadastrar um novo carro

**RNF** => Requisitos não funcionais


**RN** => Regras de negócio
    Não deve ser possivel cadastrar um carro com uma placa já existente
    O carro deve ser cadastrado, por padrão, com disponibilidade.
    O usuário responvel pelo cadastro deve ser administrador

# Listagem de carros

**RF**
    Deve ser possivel listar todos os carro diponiveis
    Deve ser possivel listar todos os carrros diposniveis, pelo nome da categoria
    Deve ser possivel listar todos os carrros diposniveis, pelo nome da marca
    Deve ser possivel listar todos os carrros diposniveis, pelo nome do carro

**RN**
    O usuário não precisa estar logado no sistema

# Cadastro de Especificação no carro

**RF**
    Deve ser possível cadastrar uma especificação para um carro


**RN**
    Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
    Não deve ser possivel cadastrar uma especifição já existente para o mesmo carro.
    O usuário responvel pelo cadastro deve ser administrador


# Cadastro de imagens do carro

**RF**
    Deve ser possivel cadastrar a imagem do carro

**RFN**
    Utilizar o multer para upload dos arquivos

**RN**

    O usuário de poder cadastrar mais de uma imagem para o mesmo carro
    O usuário responsavel pelo cadastro deve ser administrador

# Aluguel de carro

**RF**
    Deve ser possivel cadastrar um aluguel
**RFN**

**RN**
    O aluguel deve ter duração minima de 24 horas.
    Não deve ser possivel um aluguel caso ja exista um aberto para o mesmo usuário
    Não deve ser possivel um aluguel caso ja exista um aberto para o mesmo carro
    O usuário deve estar logado na aplicação


# Devolução de carrro

**RF**
Deve ser possivel realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24hrs, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel
Ao realizar a devolução, deverá calcular o total do aluguel
Caso o horário de devolução seja superior ao horaio previsto pde entrega, deverá ser obrado multa proporcional aos dias de atrazo
Caso haja multa, deverá ser somado ao total do aluguel
O usuário deve estar logado na aplicação


# Listagem de Alugueis para usuário

**RF**
Deve ser possivel realizar a busca de todos os aluguéis para o usuário

**RN**
O usuário deve estar logado na aplicação

    

# Recuperar Senha

**RF**
- Deve ser possivel o usuário recuperar a senha informando o e-mail
- O usuário deve um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**
- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas
