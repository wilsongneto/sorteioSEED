let numerosDisponiveis = [];
    let numerosSorteados = [];

    function iniciarSorteio() {
      const min = parseInt(document.getElementById('min').value);
      const max = parseInt(document.getElementById('max').value);
      if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById('resultado').innerText = 'Intervalo inválido';
        return;
      }
      numerosDisponiveis = [];
      numerosSorteados = [];
      for (let i = min; i <= max; i++) numerosDisponiveis.push(i);
      numerosDisponiveis.sort(() => Math.random() - 0.5);
      document.getElementById('resultado').innerText = 'Pronto para sortear';
      document.getElementById('historico').innerText = '';
    }

    function sortearNumero() {
      if (numerosDisponiveis.length === 0) {
        document.getElementById('resultado').innerText = 'Fim do sorteio';
        return;
      }
      const sorteado = numerosDisponiveis.pop();
      numerosSorteados.push(sorteado);
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerText = sorteado;
      resultadoDiv.style.transform = 'scale(1.2)';
      setTimeout(() => resultadoDiv.style.transform = 'scale(1)', 200);
      document.getElementById('historico').innerText = 'Sorteados: ' + numerosSorteados.join(', ');
    }

    function baixarResultados() {
      if (numerosSorteados.length === 0) {
        alert('Nenhum número sorteado ainda.');
        return;
      }
      const blob = new Blob(["Números sorteados: " + numerosSorteados.join(', ')], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'resultado_sorteio.txt';
      link.click();
    }