const Modal = {
    open(){
        // Abrir Modal
        // Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        // Fechar o modal
        // Remover a class active do modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

/* 
    Acima montamos um OBJETO
    e dentro deste OBJETO possuímos duas funcionalidades/propriedades.

    Quando uma FUNÇÃO está dentro de um OBJETO, ela recebe o nome de MÉTODO.


    DOM = Document Object Model (Modelagem do HTML para o JavaScript)

    DOM é o modelo de toda a estrutura HTML passada para o JavaScript
    DOM (document) também é um OBJETO e como todo OBJETO, ele possui propriedades e funcionalidades


    o . vai encadeando uma coisa a outra, ligando os elementos.
*/

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
]

const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        // entradas - saídas
    }
}

const DOM = {
    addTransaction(transaction, index) {
        console.log(transaction)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },
    innerHTMLTransaction() {
        const html = `
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        `

        return html
    }
}

DOM.addTransaction(transactions[0])

/* Uma função para jogar fora seus elementos internos, necessita do return */