<script>
import audio from "./assets/audio/chamada.wav";
export default {
  data() {
    return {
      ultimaChamada: 0,
      chamada: 1001,
      audio,
    };
  },
  methods: {
    diminuirChamada() {
      this.ultimaChamada = this.chamada;
      this.chamada -= 1;
      this.audio.play();
    },
  },
};
</script>

<template>
  <div @keypress.enter="alert('a')">
    <div class="single-item logos col-12">
      <div class="logo"><img src="./imagens/foto-patrocinio.png" alt="" /></div>

      <div class="logo"><img src="./imagens/foto-patrocinio.png" alt="" /></div>

      <div class="logo"><img src="./imagens/foto-patrocinio.png" alt="" /></div>

      <div class="logo"><img src="./imagens/foto-patrocinio.png" alt="" /></div>
      <div class="logo"><img src="./imagens/foto-patrocinio.png" alt="" /></div>
      <div class="logo"><img src="./imagens/foto-patrocinio.png" alt="" /></div>
      <div class="logo"><img src="./imagens/foto-patrocinio.png" alt="" /></div>
      <div class="logo"><img src="./imagens/foto-patrocinio.png" alt="" /></div>
    </div>
    <div class="barraTop">&nbsp;</div>
    <div class="container page">
      <div class="row">
        <div class="senhaAtual">
          <div class="row">
            <div class="col-xs-5 col-xs-offset-1" style="text-align: right">
              <br /><br />
              <span class="senhaAtualTexto">SENHA &nbsp;</span>
            </div>
            <div class="col-xs-5" style="text-align: left">
              <span id="senhaAtualNumero">{{ chamada }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="outer">
        <div class="row">
          <div class="col-xs-4 col-xs-offset-4 ultimaSenha">
            <br />
            <span id="ultimaSenhaTexto">ÚLTIMA CHAMADA</span><br />
            <span>Senha </span>
            <span id="ultimaSenhaNumero">1000</span>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-xs-offset-4 ultimaSenha">
            <br />
            <span id="ultimaSenhaTexto">ÚLTIMA CHAMADA</span><br />
            <span>Senha </span>
            <span id="ultimaSenhaNumero">0999</span>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-xs-offset-4 ultimaSenha">
            <br />
            <span id="ultimaSenhaTexto">ÚLTIMA CHAMADA</span><br />
            <span>Senha </span>
            <span id="ultimaSenhaNumero">0998</span>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-xs-offset-4 ultimaSenha">
            <br />
            <span id="ultimaSenhaTexto">ÚLTIMA CHAMADA</span><br />
            <span>Senha </span>
            <span id="ultimaSenhaNumero">0997</span>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-xs-offset-4 ultimaSenha">
            <br />
            <span id="ultimaSenhaTexto">ÚLTIMA CHAMADA</span><br />
            <span>Senha </span>
            <span id="ultimaSenhaNumero">0996</span>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-xs-offset-4 ultimaSenha">
            <br />
            <span id="ultimaSenhaTexto">ÚLTIMA CHAMADA</span><br />
            <span>Senha </span>
            <span id="ultimaSenhaNumero">0995</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  width: 100%;
  height: 100vh;
  background: linear-gradient(#000000, #2a2929);
  background-repeat: no-repeat;
  margin: 0;
  overflow-x: hidden;
}

.single-item {
  margin-top: 3rem;
}

.single-item img {
  height: 200px;
}

.outer {
  display: flex;
  align-items: center;
  justify-content: right;
}

.bg {
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent
    url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
  background-repeat: repeat;
  animation: bg-animation 0.2s infinite;
  opacity: 0.9;
  visibility: visible;
}

@keyframes bg-animation {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -5%);
  }
  20% {
    transform: translate(-10%, 5%);
  }
  30% {
    transform: translate(5%, -10%);
  }
  40% {
    transform: translate(-5%, 15%);
  }
  50% {
    transform: translate(-10%, 5%);
  }
  60% {
    transform: translate(15%, 0);
  }
  70% {
    transform: translate(0, 10%);
  }
  80% {
    transform: translate(-15%, 0);
  }
  90% {
    transform: translate(10%, 5%);
  }
  100% {
    transform: translate(5%, 0);
  }
}

.barraSuperior {
  height: 200px;
  margin-top: 10px;
}

.senhaAtual {
  text-align: center;
  border-radius: 15px;
  background: #c600008c;
  box-shadow: 0 8px 32px 0 rgba(69, 53, 62, 0.37);
  backdrop-filter: blur(18.5px);
  -webkit-backdrop-filter: blur(18.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  margin-top: 0px;
}

.senhaAtualTexto {
  font-size: 65pt;
  font-weight: 400;
}

#senhaAtualNumero {
  font-size: 100pt;
  font-weight: 800;
}

.ultimaSenha {
  margin-right: 45px;
  flex-direction: column;
  font-weight: 800;
  text-align: center;
  background: rgba(35, 35, 35, 0.65);
  box-shadow: 0 8px 32px 0 rgba(102, 91, 91, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 200px;
  height: 150px;
  margin-top: 20px;
}

#ultimaSenhaTexto {
  font-size: 20px;
  color: rgb(255, 255, 255);
}

#ultimaSenhaNumero {
  font-size: 40px;
  color: #c600008c;
}

.uespiLogo {
  max-width: 100px;
}

.sisuLogo {
  max-width: 400px;
}

.uespiTexto {
  font-size: 27pt;
  font-weight: 800;
  color: #ffffff;
}

.subtitulo {
  font-size: 30px;
  font-weight: 400;
}

audio {
  display: none;
}
</style>
