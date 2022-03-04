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
    O usuário responvel pelo cadastro deve ser administrador

# Aluguel de carro

**RF**
    Deve ser possivel cadastrar um aluguel
**RFN**

**RN**
    O aluguel deve ter duração minima de 24 horas.
    Não deve ser possivel um aluguel caso ja exista um aberto para o mesmo usuário
    Não deve ser possivel um aluguel caso ja exista um aberto para o mesmo carro


    


