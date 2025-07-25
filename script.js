let numeros = [];
    let historico = [];

    function sortear() {
      const min = parseInt(document.getElementById('min').value);
      const max = parseInt(document.getElementById('max').value);

      // Inicializa a lista se estiver vazia
      if (numeros.length === 0) {
        for (let i = min; i <= max; i++) {
          if (!historico.includes(i)) {
            numeros.push(i);
          }
        }
        // Embaralha
        numeros.sort(() => Math.random() - 0.5);
      }

      if (numeros.length === 0) {
        alert("Todos os números já foram sorteados!");
        return;
      }

      const sorteado = numeros.pop();
      historico.push(sorteado);

      // Atualiza a interface
      document.getElementById('resultado').textContent = sorteado;
      const li = document.createElement('li');
      li.textContent = sorteado;
      document.getElementById('historico').appendChild(li);
    }
