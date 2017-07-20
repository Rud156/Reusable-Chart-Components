import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class PieChart extends Component {
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
                        <Pie
                            data={{
                                labels: [this.props.label, 'Remaining'],
                                datasets: [{
                                    label: this.props.legendValue,
                                    data: [
                                        Math.round((this.props.currentValue * 100) / this.props.maxValue),
                                        Math.round((this.props.maxValue - this.props.currentValue) * 100 / this.props.maxValue)
                                    ],
                                    backgroundColor: [this.props.backgroundColor, 'grey']
                                }]
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

PieChart.propTypes = {
    currentValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,

    displayTitle: PropTypes.bool,
    titleValue: PropTypes.string,
    titleSize: PropTypes.number,
    subTitleValue: PropTypes.string,
    subTitleSize: PropTypes.number,

    displayLegend: PropTypes.bool,
    legendValue: PropTypes.string,
    legendPosition: PropTypes.string,

    displayTooltip: PropTypes.bool
};

PieChart.defaultProps = {
    displayLegend: true,
    legendPosition: 'top',
    displayTooltip: true,
};

export default PieChart;