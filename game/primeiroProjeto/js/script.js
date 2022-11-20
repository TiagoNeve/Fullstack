const $ = (tag) => document.querySelector(tag);

const cnv = $('canvas');
cnv.width = innerWidth; // Pega todo o tamanho da janela
cnv.height = innerHeight; // Pega todo o tamanho da janela

const ctx = cnv.getContext('2d');

const player = new Sprite(cnv.width/2, cnv.height/2, 30, 'white')

function loop() {
    requestAnimationFrame(loop, cnv); // Vai tentar executar algum animação, tentar manter uma taxa de execução de 60 fps
    update();
}

function update() {
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillRect(0,0,cnv.width,cnv.height);
    
    player.draw();
}

loop();