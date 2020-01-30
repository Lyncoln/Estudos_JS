const svg = d3.select('svg');

const altura = +svg.attr('height');
const largura = +svg.attr('width');

const render = data => {
    const yValor = d => d.pais;
    const xValor = d => d.populacao;
    const marg = {
        cima:50,
        direita:20,
        baixo:50,
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

    const xAxisTickFormat = numer => {
        return(d3.format(".3s")(numer)
            .replace("G","B"));
    };

    const xAxis = d3.axisBottom(xEscala)
        .tickFormat(xAxisTickFormat)
        .tickSize(-InnerAltura);

    g.append('g')
        .call(d3.axisLeft(yEscala))
        .selectAll([".domain",".tick line"])
            .remove();

    const xAxisG =
        g.append('g')
        .call(xAxis) //call funciona como %*%
        .attr('transform',`translate(0,${InnerAltura})`);

    xAxisG.select(".domain").remove();

    xAxisG.append('text')
        .attr('class','label-x')
        .attr("y", 30)
        .attr('x', Innerlargura / 2)
        .text("População")
        .attr('fill','black');

    g.selectAll('rect').data(data)
        .enter().append('rect')
            .attr('y', d=> yEscala(yValor(d)))
            .attr('width', d => xEscala(xValor(d)))
            .attr('height', yEscala.bandwidth());

    g.append('text')
        .attr("y", -10)
        .text("Paises mais populosos ")
        .attr('class',"titulo")
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


