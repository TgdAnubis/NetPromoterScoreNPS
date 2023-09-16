const isText = (input) => {
    const pattern = /^[A-Za-z\s]+$/; // Expressão regular para verificar se há apenas letras e espaços.
    return pattern.test(input);
};

const handleSubmit = (event) => {
    event.preventDefault();

    const avaliador = document.querySelector('input[name=avaliador]').value;
    const avaliacao = parseFloat(document.querySelector('input[name=avaliacao]').value); // Converter para número
    const comentarios = document.querySelector('textarea[name=comentarios]').value;

    if (!isText(avaliador)) {
        const mensagem = document.getElementById('mensagem');
        mensagem.textContent = 'O campo "Avaliador" deve conter apenas texto.';
        mensagem.style.color = 'red';
        mensagem.style.display = 'block';
    } else if (avaliacao >= 0 && avaliacao <= 10) {
        fetch('http://192.168.100.7:3000/avaliacoes', {
            method: 'post',
            headers: {
                'accept': 'application/json',
                'content-Type': 'application/json',
            },
            body: JSON.stringify({ avaliador, avaliacao, comentarios }),
        })
        .then((response) => {
            // Verifique a resposta do servidor e aja de acordo, se necessário.
            if (response.ok) {
                // A resposta foi bem-sucedida, faça o que for necessário.
                const mensagem = document.getElementById('mensagem');
                mensagem.textContent = 'Obrigado pela sua avaliação';
                mensagem.style.color = 'green';
                document.querySelector('form').reset();
                mensagem.style.display = 'block';
            } else {
                throw new Error('Erro ao enviar dados para o servidor');
            }
        })
        .catch((error) => {
            // Lide com erros aqui (por exemplo, exiba uma mensagem de erro).
            const mensagem = document.getElementById('mensagem');
            mensagem.textContent = 'Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.';
            mensagem.style.color = 'red';
            mensagem.style.display = 'block';
            console.error(error); // Registre o erro no console para fins de depuração.
        });
    } else {
        const mensagem = document.getElementById('mensagem');
        mensagem.textContent = 'Por favor, insira uma avaliação válida entre 0 e 10.';
        mensagem.style.color = 'red';
        mensagem.style.display = 'block';
    }
}

document.querySelector('form').addEventListener('submit', handleSubmit);
