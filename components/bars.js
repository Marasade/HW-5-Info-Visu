function Bars(props) {
    const { data, xScale, yScale, height, selectedStation, setSelectedStation } = props;

    const [hoveredStation, setHoveredStation] = React.useState(null);

    const activeStation = selectedStation !== undefined ? selectedStation : hoveredStation;
    const setActiveStation = setSelectedStation !== undefined ? setSelectedStation : setHoveredStation;

    const getColor = (selected, station) => selected === station ? 'red' : 'steelblue';

    const handleMouseEnter = (d) => {
        setActiveStation(d.station);
    };

    const handleMouseOut = () => {
        setActiveStation(null);
    };

    if (data) {
        return <g>
            {data.map(d => (
                <rect
                    key={d.station}
                    x={xScale(d.station)}
                    y={yScale(d.start)}
                    width={xScale.bandwidth()}
                    height={height - yScale(d.start)}
                    fill={getColor(activeStation, d.station)}
                    onMouseEnter={() => handleMouseEnter(d)}
                    onMouseOut={handleMouseOut}
                />
            ))}
        </g>
    } else {
        return <g></g>
    }
}

export default Bars