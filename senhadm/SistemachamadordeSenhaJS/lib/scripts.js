function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

jQuery(document).ready(function ($) {
  $("body").on("keydown", function (e) {
    var senhaAtual = $("#senhaAtualNumero");
    var senhaNormal = $("#senhaNormal");
    var senhaPrior = $("#senhaPrioridade");
    var ultimaSenha = $("#ultimaSenhaNumero");
    var audioChamada = $("#audioChamada");

    if (e.keyCode == 39) {
      // 39 é a seta para a direita
      // 1005 é o limite, ajustar para necessidade
      if (senhaAtual.val() < 1005) {
        ultimaSenha.html(senhaAtual.html());
        senha = parseInt(senhaNormal.val()) - 1;
        senhaAtual.html(pad(senha, 4));
        senhaNormal.val(pad(senha, 4));
        audioChamada.trigger("play");
      }
    }
    if (e.keyCode == 37) {
      // 37 é a seta para a esquerda
      senha = parseInt(senhaNormal.val()) + 1;
      senhaAtual.html(pad(senha, 4));
      senhaNormal.val(pad(senha, 4));
    }
    if (e.keyCode == 38) {
      // 38 é a seta para cima
      ultimaSenha.html(senhaAtual.html());
      senha = parseInt(senhaPrior.val().replace("P", "")) + 1;
      senhaAtual.html("P" + pad(senha, 3));
      senhaPrior.val("P" + pad(senha, 3));
      audioChamada.trigger("play");
    }
    if (e.keyCode == 40) {
      // 40 é a seta para baixo
      if (parseInt(senhaPrior.val().replace("P", "")) > 1) {
        senha = parseInt(senhaPrior.val().replace("P", "")) - 1;
        senhaAtual.html("P" + pad(senha, 3));
        senhaPrior.val("P" + pad(senha, 3));
      }
    }
  });
});
