// https://observablehq.com/@d3/zoomable-circle-packing@165
export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([
    ["sptotal.json",new URL("./files/sptotal.json",import.meta.url)],
    ["russeltotal.json",new URL("./files/russeltotal.json",import.meta.url)],
    ["arktotal.json",new URL("./files/arktotal.json",import.meta.url)],
    ["market_sp.json",new URL("./files/market_sp.json",import.meta.url)],
    ["market_russel.json",new URL("./files/market_russel.json",import.meta.url)]
]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Market Distribution
## Pick a view
- Viewing the **indices** segments at the top level by market cap.
- Viewing the **segmentation** segments at the bottom level by market cap.
- Access date was 2021-06-18

## About the indices
### Standard & Poors
Pubilishes 3 widely followed indices of US stocks.
- S&P 500 - [large cap stocks](https://en.wikipedia.org/wiki/S%26P_500) represented by [SPY](https://www.nyse.com/quote/ARCX:SPY).  Companies in this have a market cap above $5 billion.  Inclusion is seleceted by a committee and tries to cover all sectors of the US economy.
- S&P 400 - [midcap stocks](https://en.wikipedia.org/wiki/S%26P_400) represented by [MDY](https://www.nyse.com/quote/ARCX:MDY).  Companies in this have a market cap between $3.2 billion to $9.8 billion.
- S&P 600 - [small cap stocks](https://en.wikipedia.org/wiki/S%26P_600) represented by [SLY](https://www.nyse.com/quote/ARCX:SLY).  Companies in this have a market cap between $700 million - $3.2 billion.

### FTSE Russell
Publishes 2 main indexes which segment the 3000 largest companies.
- Russell 1000 - Is a large and micap index. Represented by [IWB](https://www.nyse.com/quote/ARCX:IWB)
- Russell 2000 - Is a smallcap index. Represented by [IWM](https://www.nyse.com/quote/ARCX:IWM)

### Ark funds
I am testing to visualize this because they do some investment in alternative and international stocks.  I am still working on my data for international.
`

)});

main.variable(observer("viewof file")).define("viewof file", ["d3","html"], function(d3,html)
{
  const options = [
    {name: "S & P Indices", value: "sptotal.json"},
    {name: "Russell Indices", value: "russeltotal.json"},
    {name: "ARK Funds", value: "arktotal.json"},
    {name: "S & P Market Segmentation", value: "market_sp.json", selected: true},
    {name: "Russell Market Sementation", value: "market_russel.json"},
  ];
  const form = html`<form style="display: flex; align-items: center; min-height: 33px;"><select name=i>${options.map(o => Object.assign(html`<option>`, {textContent: o.name, selected: o.selected}))}`;
  form.i.onchange = () => form.dispatchEvent(new CustomEvent("input"));
  form.oninput = () => form.value = options[form.i.selectedIndex].value;
  form.oninput();
  return form;
}
);
main.variable(observer("file")).define("file", ["Generators", "viewof file"], (G, _) => G.input(_));


  main.variable(observer("chart")).define("chart", ["pack","data","d3","width","height","color"], function(pack,data,d3,width,height,color)
{
  const root = pack(data);
  let focus = root;
  let view;

  const svg = d3.create("svg")
      .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .style("display", "block")
      .style("margin", "0 -14px")
      .style("background", color(0))
      .style("cursor", "pointer")
      .on("click", (event) => zoom(event, root));

  const node = svg.append("g")
    .selectAll("circle")
    .data(root.descendants().slice(1))
    .join("circle")
      // MPV: Picking color
      .attr("fill", d => {
      if (d.children) {
        return color(d.depth);
      } else if(d.data.holdingtype === "direct") {
        return "white";
      } else if(d.data.holdingtype === "mixed") {
        return "lightgray";
      } else {
        return "gray";
      }})
      .attr("pointer-events", d => !d.children ? "none" : null)
      .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
      .on("mouseout", function() { d3.select(this).attr("stroke", null); })
      .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));

  const label = svg.append("g")
      .style("font", "18px sans-serif")

      .style("paint-order", "stroke")
      .style("stroke", "#FFFFFFF")
      .style("stroke-width", "1px")
      .style("stroke-linecap", "butt")
      .style("stroke-linejoin", "miter")
      .style("font-weight", "800")
      .style("fill", "#000000")

      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(root.descendants())
    .join("text")
      .style("fill-opacity", d => d.parent === root ? 1 : 0)
      .style("display", d => d.parent === root ? "inline" : "none")
      .text(d => d.data.name);

  zoomTo([root.x, root.y, root.r * 2]);

  function zoomTo(v) {
    const k = width / v[2];

    view = v;

    label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("r", d => d.r * k);
  }

  function zoom(event, d) {
    const focus0 = focus;

    focus = d;

    const transition = svg.transition()
        .duration(event.altKey ? 7500 : 750)
        .tween("zoom", d => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        });

    label
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
      .transition(transition)
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  return svg.node();
}
);



  main.variable(observer("data")).define("data", ["FileAttachment", "file"], function(FileAttachment, file){return(
FileAttachment(file).json()
)});

  main.variable(observer("pack")).define("pack", ["d3","width","height"], function(d3,width,height){return(
data => d3.pack()
    .size([width, height])
    .padding(3)
  (d3.hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value))
)});
  main.variable(observer("width")).define("width", function(){return(
932
)});
  main.variable(observer("height")).define("height", ["width"], function(width){return(
width
)});
  main.variable(observer("format")).define("format", ["d3"], function(d3){return(
d3.format(",d")
)});
  main.variable(observer("color")).define("color", ["d3"], function(d3){return(
d3.scaleLinear()
    .domain([0, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl)
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  return main;
}
