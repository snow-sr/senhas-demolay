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
    var ultimaSenha2 = $("#ultimaSenhaNumero2");
    var ultimaSenha3 = $("#ultimaSenhaNumero3");
    var ultimaSenha4 = $("#ultimaSenhaNumero4");
    var ultimaSenha5 = $("#ultimaSenhaNumero5");
    var ultimaSenha6 = $("#ultimaSenhaNumero6");

    var audioChamada = $("#audioChamada");

    if (e.keyCode == 39) {
      // 39 é a seta para a direita
      // 1005 é o limite, ajustar para necessidade
      if (senhaAtual.val() < 1005) {
        senha = parseInt(senhaNormal.val()) - 1;
        senhaAtual.html(pad(senha, 4));
        senhaNormal.val(pad(senha, 4));
        audioChamada.trigger("play");
        ultimaSenha.val(senha + 1);
        ultimaSenha.html(senha + 1);
        ultimaSenha2.html(Number(pad(ultimaSenha.val(), 4)) + 1);
        ultimaSenha2.val(Number(pad(ultimaSenha.val(), 4)) + 1);
        ultimaSenha3.html(Number(pad(ultimaSenha2.val(), 4)) + 1);
        ultimaSenha3.val(Number(pad(ultimaSenha2.val(), 4)) + 1);
        ultimaSenha4.html(Number(pad(ultimaSenha3.val(), 4)) + 1);
        ultimaSenha4.val(Number(pad(ultimaSenha3.val(), 4)) + 1);
        ultimaSenha5.html(Number(pad(ultimaSenha4.val(), 4)) + 1);
        ultimaSenha5.val(Number(pad(ultimaSenha4.val(), 4)) + 1);
        ultimaSenha6.html(Number(pad(ultimaSenha5.val(), 4)) + 1);
        ultimaSenha6.val(Number(pad(ultimaSenha5.val(), 4)) + 1);
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
