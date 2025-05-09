function buscar() {
  const input = document.getElementById("campo-pesquisa").value.trim();

  if (input.length === 0) {
    alert("Digite um termo para pesquisar.");
    return;
  }

  const consulta = `"${input}" ~genealogia`;
  console.log("Consulta formatada:", consulta); // para testes
  // No futuro: redirecionar ou enviar isso para a API
}
