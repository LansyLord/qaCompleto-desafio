#language: pt
Funcionalidade: Login de Usuário
    Como um usuário registrado
    Eu quero fazer login no swags labs
    Para acessar a loja (tela Products) ou não  acessar (tela de erro) dependendo das credenciais fornecidas

    Contexto: Cenários de Login
        Dado que o usuário está na página de login do swags labs

    Cenário: Login válido - Usuário Padrão
        Quando o usuário informar usuário e senha
        E clique no botão Login
        Então o usuário deve ser redirecionado para a página Products
    
    Esquema do Cenário: Login inválido com diferentes combinações de credenciais
        Quando o usuário informar <username> e <password>
        E clique no botão Login
        Então o usuário deve ver a mensagem de erro <errorMessage>

        Exemplos:
            | username          | password        | errorMessage                                      |
            | "invalid_user"    | "secret_sauce"  | "Epic sadface: Username and password do not match any user in this service" |
            | "standard_user"   | "wrong_password"| "Epic sadface: Username and password do not match any user in this service" |
            | ""                | "secret_sauce"  | "Epic sadface: Username is required"                |
            | "standard_user"   | ""              | "Epic sadface: Password is required"                |

    # Cenário: Login inválido - Usuário inválido
    #     Quando o usuário informar um usuário inválido e uma senha válida
    #     E clique no botão Login
    #     Então o usuário deve ver uma mensagem de erro indicando que o usuário não existe
    
    # Cenário: Login inválido - Senha inválida
    #     Quando o usuário informar um usuário válido e uma senha inválida
    #     E clique no botão Login
    #     Então o usuário deve ver uma mensagem de erro indicando que a senha está incorreta
    
    # Cenário: Login inválido - Username vazio
    #     Quando o usuário deixar o campo de username vazio e informar uma senha válida
    #     E clique no botão Login
    #     Então o usuário deve ver uma mensagem de erro indicando que o username é obrigatório
    
    # Cenário: Login inválido - Senha vazia
    #     Quando o usuário informar um username válido e deixar o campo de senha vazio
    #     E clique no botão Login
    #     Então o usuário deve ver uma mensagem de erro indicando que a senha é obrigatória