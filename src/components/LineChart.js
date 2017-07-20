import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class LineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartOptions: {
                legend: {
                    display: this.props.displayLegend,
                    position: this.props.legendPosition
                },
                tooltips: {
                    enabled: this.props.displayTooltip
                },
                responsive: true,
                maintainAspectRatio: true
            }
        };
    }

    componentDidMount() {
        let legend = {
            display: this.props.displayLegend,
            position: this.props.legendPosition
        };

        let chartOptions = { ...this.state.chartOptions };
        chartOptions.legend = legend;

        this.setState({ chartOptions: chartOptions });
    }

    componentWillReceiveProps(nextProps) {
        let chartOptions = { ...this.state.chartOptions };
        chartOptions.tooltips = {
            enabled: nextProps.displayTooltip
        };
        chartOptions.legend = {
            display: nextProps.displayLegend,
            position: nextProps.legendPosition
        };

        this.setState({ chartOptions: chartOptions });
    }

    elementClicked(element) {
        let index = element[0]._index;
        let datasetIndex = element[0]._datasetIndex;
        let legend = element[0]._chart.config.data.datasets[datasetIndex].label;
        let data = element[0]._chart.config.data.datasets[datasetIndex].data[index];
        let label = element[0]._chart.config.data.labels[index];
        console.log('Legend: ', legend);
        console.log('Label: ', label);
        console.log('Data Value: ', data);
    }

    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        {this.props.displayTitle &&
                            <h1 style={{ fontSize: this.props.titleSize, color: 'grey', textAlign: 'left' }}>
                                {this.props.titleValue}
                            </h1>
                        }
                    </Card.Header>
                    <Card.Meta>
                        {this.props.displayTitle &&
                            <h1 style={{ fontSize: this.props.subTitleSize, color: 'grey', textAlign: 'left' }}>
                                {this.props.subTitleValue}
                            </h1>
                        }
                    </Card.Meta>
                    <Card.Description>
                        <Line
                            data={{
                                labels: this.props.labels,
                                datasets: this.props.datasets
                            }}
                            options={this.state.chartOptions}
                            getElementAtEvent={this.elementClicked}
                        />
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

LineChart.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        label: PropTypes.string.isRequired,

        fill: PropTypes.bool.isRequired,
        backgroundColor: PropTypes.string,
        lineColor: PropTypes.string,
        pointColor: PropTypes.string,

        pointRadius: PropTypes.number,
    })).isRequired,

    displayTitle: PropTypes.bool,
    titleValue: PropTypes.string,
    titleSize: PropTypes.number,
    subTitleValue: PropTypes.string,
    subTitleSize: PropTypes.number,

    displayLegend: PropTypes.bool,
    legendPosition: PropTypes.string,

    displayTooltip: PropTypes.bool
};

LineChart.defaultProps = {
    displayLegend: true,
    legendPosition: 'top',
    displayTooltip: true,
};

export default LineChart;

// datasets: [{
//     label: this.props.legendValue,
//     data: this.props.data,
//     fill: this.props.fill,
//     backgroundColor: this.props.backgroundColor,
//     borderColor: this.props.lineColor,
//     pointBackgroundColor: this.props.pointColor,
//     pointRadius: this.props.pointRadius
// }]