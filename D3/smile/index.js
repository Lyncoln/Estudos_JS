const svg = d3.select("svg");

const largura = parseFloat(svg.attr('width')); // extraindo a lagura do svg do html
const altura = parseFloat(svg.attr('height')); // extraindo a altura do svg do hmtl
const deslocXOlho = 100;
const deslocYOlho = 70;
const raioOlho = 30;
const larguraSob = 50;
const alturaSob = 20;
const deslocYSob = 70;



const grupo = svg.append('g')
    .attr('transform',`translate(${largura/2},${altura/2})`);   


const rosto = grupo.append('circle')
    .attr('r', altura /2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

const grupoOlhos = grupo.append('g')
    .attr('transform',`translate(0,${-deslocYOlho})` )

const olhoEsquerdo = grupoOlhos.append('circle')
    .attr('r',raioOlho)
    .attr('cx', -deslocXOlho);

const grupoSob = grupoOlhos
    .append('g')
        .attr('transform',`translate(0,${- deslocYSob})`);

grupoSob    
    .transition().duration(2000)
        .attr('transform',`translate(0,${- deslocYSob - 50})`)
    .transition().duration(2000)
        .attr('transform',`translate(0,${- deslocYSob})`)

const SobDireita = grupoSob
    .append('rect')
        .attr('x', deslocXOlho - larguraSob/2)
        .attr('width', larguraSob)
        .attr('height', alturaSob);

const SobEsquerda = grupoSob
    .append('rect')
        .attr('x', -deslocXOlho - larguraSob/2)
        .attr('width', larguraSob)
        .attr('height', alturaSob);



const olhoDireito = grupoOlhos.append('circle')
    .attr('r',raioOlho)
    .attr('cx', +deslocXOlho);

//Aqui estou criando a boca usando arco do d3.js

var boca = grupo
    .append('path')
        .attr('d', d3.arc()({
        innerRadius: 0.1,
        outerRadius: 150,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
        }));


