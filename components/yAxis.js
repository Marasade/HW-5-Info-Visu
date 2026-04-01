


function YAxis(props){
    const { yScale, height, axisLable } = props;
    if(yScale){
        {/* //the if(yScale){...} means when xScale is not null, the component will return the y-axis; otherwise, it returns <g></g>
        //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
        //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */}
        const isLinear = typeof yScale.domain()[0] === 'number';
        const ticks = isLinear ? yScale.ticks(5) : yScale.domain();
 
        return <g>
            <line x1={0} y1={0} x2={0} y2={height} stroke="black" />
            {ticks.map(tick => (
                <g key={tick} transform={`translate(0, ${yScale(tick) + (isLinear ? 0 : yScale.bandwidth() / 2)})`}>
                    <line x2={-6} stroke="black" />
                    <text style={{ textAnchor: 'end', fontSize: '10px' }} dx="-0.5em" dy="0.3em">{tick}</text>
                </g>
            ))}
            <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(20, 0)rotate(-90)`}>
                {axisLable}
            </text>
        </g>
    } else {
        return <g></g>
    }

}

export default YAxis