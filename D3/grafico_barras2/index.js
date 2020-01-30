const svg = d3.select('svg');

const altura = +svg.attr('height');
const largura = +svg.attr('width');

const render = data => {
    const yValor = d => d.pais;
    const xValor = d => d.populacao;
    const marg = {
        cima:20,
        direita:20,
        baixo:20,
        esquerda:110
    };
    const Innerlargura = largura - marg.esquerda - marg.direita;
    const InnerAltura = altura - marg.baixo - marg.cima;

    const xEscala = d3.scaleLinear()
        .domain([0, d3.max(data, xValor)])
        .range([0, Innerlargura]);

        
    
    const yEscala = d3.scaleBand()
        .domain(data.map(yValor))
        .range([0, InnerAltura])
        .padding(0.1);
        
    const g = svg.append('g')
        .attr('transform',`translate(${marg.esquerda},${marg.cima})`);


    g.append('g').call(d3.axisLeft(yEscala)); //call funciona como %*%
    g.append('g').call(d3.axisBottom(xEscala)) //call funciona como %*%
        .attr('transform',`translate(0,${InnerAltura})`)

    g.selectAll('rect').data(data)
        .enter().append('rect')
            .attr('y', d=> yEscala(yValor(d)))
            .attr('width', d => xEscala(xValor(d)))
            .attr('height', yEscala.bandwidth());
}

d3.csv('data.csv').then(data =>{
/*    data.map(data => {
        data.populacao =  parseFloat(data.populacao) * 1000;
    })
*/
    data.forEach(element => {
        element.populacao = + element.populacao * 1000
    });
    render(data);
})


