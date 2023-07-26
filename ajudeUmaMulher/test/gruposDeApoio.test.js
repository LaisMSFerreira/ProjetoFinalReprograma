const gruposModel = require("../src/Models/gruposDeApoioModel")

describe("GET model teste", () => {
    const grupos = new gruposModel({
        "name": "grupos teste",
        "localization": "Um grupo criado para teste",
        "addres": "grupo",
        "phoneNumber": 456789,
        "attendence": "a qualquer hora",
        "services": "um grupo implantado para testes",
        "whatsappGroup": true
    });
    it("Deve chamar o schema e retornar o nome correto do grupo", () => {
        expect(grupos.name).toBe("grupos teste")
    });
    it("Deve chamar o schema e retornar a localização correta do grupo", () => {
        expect(grupos.localization).toBe("Um grupo criado para teste")
    });
    it("Deve chamar o schema e retornar o endereço correto do grupo", () => {
        expect(grupos.addres).toBe("grupo")
    });
    it("Deve chamar o schema e retornar o número de telefone correto do grupo", () => {
        expect(JSON.stringify(grupos.phoneNumber)).toBe("456789")
    });
    it("Deve chamar o schema e retornar o atendimento correto do grupo", () => {
        expect(grupos.attendence).toBe("a qualquer hora")
    });
    it("Deve chamar o schema e retornar os serviços corretos do grupo", () => {
        expect(grupos.services).toBe("um grupo implantado para testes")
    });
    it("Deve chamar o schema e retornar se o grupo tem grupo de whatsapp", () => {
        expect(JSON.stringify(grupos.whatsappGroup)).toBe("true")
    });
})

describe("CREATE route test", () => {
    const grupos = new gruposModel({
        "name": "grupos teste",
        "localization": "Um grupo criado para teste",
        "addres": "grupo",
        "phoneNumber": 456789,
        "attendence": "a qualquer hora",
        "services": "um grupo implantado para testes",
        "whatsappGroup": true
    })
    it("Deve salvar no banco de dados o novo grupo", () => {
        grupos.save().then((dados) => {
            expect(dados.name).toBe("grupo teste")
        })
    }) 
}) 

describe("UPDATE route test", () => {
    it("Deve editar o nome e salvar no banco de dados o novo grupo", () => {
    const grupos = new gruposModel({
        "name": "grupos teste",
        "localization": "Um grupo criado para teste",
        "addres": "grupo",
        "phoneNumber": 456789,
        "attendence": "a qualquer hora",
        "services": "um grupo implantado para testes",
        "whatsappGroup": true
    });
    grupos.name = "novo grupo teste"
    grupos.save().then((dados) => {
        expect(dados.name).toBe("novo grupo teste")
    }) 
})
})

describe("DELETE route test", () => {
    it("Deve excluir um grupo", () => {
        const grupos = new gruposModel({
        "name": "grupos teste",
        "localization": "Um grupo criado para teste",
        "addres": "grupo",
        "phoneNumber": 456789,
        "attendence": "a qualquer hora",
        "services": "um grupo implantado para testes",
        "whatsappGroup": true
    });
    grupos.save().then((dados) => {
        grupos.delete().then((novosDados) => {
            expect(dados.name).toBe(null);
        })
    })
})
})