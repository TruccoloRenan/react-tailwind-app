const loginFields = [
    {
        labelText: "Endereço de Email",
        labelFor:"endereço de Email",
        id: "endereco-email",
        name: "email",
        type: "email",
        autoComplete: 'email',
        isRequired: true,
        placeholder: "Endereço de email"
    },
    {
        labelText: "Senha",
        labelFor: "Senha",
        id: "senha",
        name: "senha",
        type: "senha",
        autoComplete: "Senha Atual",
        isRequired: true,
        placeholder: "Senha"
    }
]

const signupFields =[
    {
        labelText:"Usuario",
        labelFor: "Usuario",
        id: "usuario",
        name:"usuario",
        type: "text",
        autoComplete: "Usuario",
        isRequired: true,
        placeholder: "Nome de Usuario"
    },
    {
        labelText:"Endereço de Email",
        labelFor: "endereco-email",
        id: "endereco-email",
        name:"email",
        type: "email",
        autoComplete:"email",
        isRequired: true,
        placeholder: "Endereço de Email"
    },
    {
        labelText:"Senha",
        labelFor: "Senha",
        id:"senha",
        name: "Senha",
        type: "Senha",
        autoComplete: "senha atual",
        isRequired: true,
        placeholder: "Senha"
    },
    {
        labelText: "Confirme a Senha",
        labelFor: "confirme-senha",
        id: "confirme-senha",
        name: "cofirme-senha",
        type: "senha",
        autoComplete: "confirme a senha",
        isRequired: true,
        placeholder: "confirme a senha"
    }
]

export {loginFields,signupFields}