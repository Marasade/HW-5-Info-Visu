function Points(props) {
    const { data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX, setTooltipY } = props;

    const [hoveredStation, setHoveredStation] = React.useState(null);

    // Use lifted state if provided, otherwise use local state
    const activeStation = selectedStation !== undefined ? selectedStation : hoveredStation;
    const setActiveStation = setSelectedStation !== undefined ? setSelectedStation : setHoveredStation;

    const getColor = (selected, station) => selected === station ? 'red' : 'steelblue';
    const getRadius = (selected, station) => selected === station ? 10 : 5;

    const handleMouseEnter = (event, d) => {
        setActiveStation(d.station);
        if (setTooltipX) setTooltipX(event.pageX);
        if (setTooltipY) setTooltipY(event.pageY);
    };

    const handleMouseOut = () => {
        setActiveStation(null);
        if (setTooltipX) setTooltipX(null);
        if (setTooltipY) setTooltipY(null);
    };

    if (data) {
        return <g>
            {/* Yellow overlay rect when a point is selected */}
            {activeStation && (
                <rect x={0} y={0} width={width} height={height} fill="yellow" opacity={0.4} />
            )}
            {/* Draw all points */}
            {data.map(d => (
                <circle
                    key={d.station}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={getRadius(activeStation, d.station)}
                    fill={getColor(activeStation, d.station)}
                    onMouseEnter={(event) => handleMouseEnter(event, d)}
                    onMouseOut={handleMouseOut}
                />
            ))}
            {/* Draw the selected point on top */}
            {activeStation && data.filter(d => d.station === activeStation).map(d => (
                <circle
                    key={d.station + '_top'}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={10}
                    fill="red"
                    onMouseEnter={(event) => handleMouseEnter(event, d)}
                    onMouseOut={handleMouseOut}
                />
            ))}
        </g>
    } else {
        return <g></g>
    }
}

export default Points