const svg = d3.select("svg");

const largura = parseFloat(svg.attr('width')); // extraindo a lagura do svg do html
const altura = parseFloat(svg.attr('height')); // extraindo a altura do svg do hmtl

const rosto = svg.append('circle');

rosto
    .attr('r', altura /2)
    .attr('cx', largura / 2) //Centro do svg
    .attr('cy', altura / 2) //Centro do svg
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

const olhoEsquerdo = svg.append('circle')
    .attr('r',30)
    .attr('cx', largura / 2 - 100) 
    .attr('cy', altura / 2 - 70) 

const Direito = svg.append('circle')
    .attr('r',30)
    .attr('cx', largura / 2 + 100) 
    .attr('cy', altura / 2 - 70) 

//Aqui estou criando a boca usando arco do d3.js
const grupo = svg.append('g')
    .attr('transform',`translate(${largura/2},${altura/2 + 20})`);   

var boca = grupo.append('path')
    .attr('d', d3.arc()({
    innerRadius: 170,
    outerRadius: 150,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2
}));


