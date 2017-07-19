import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

class ReLineChart extends Component {
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
                        <ResponsiveContainer width='100%' height={this.props.height}>
                            <LineChart
                                data={this.props.data}
                                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                {
                                    this.props.showGrid &&
                                    <CartesianGrid strokeDasharray="3 3" />
                                }
                                {
                                    this.props.showTooltip &&
                                    <Tooltip />
                                }
                                {
                                    this.props.showLegend &&
                                    <Legend />
                                }
                                {
                                    this.props.displayFirstLine &&
                                    <Line dataKey="key_1" type="monotone" stroke="purple" />
                                }
                                {
                                    this.props.displaySecondLine &&
                                    <Line dataKey="key_2" type="monotone" stroke="red" />
                                }
                            </LineChart>
                        </ResponsiveContainer>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

ReLineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        key_1: PropTypes.number.isRequired,
        key_2: PropTypes.number
    })),
    displayFirstLine: PropTypes.bool.isRequired,
    displaySecondLine: PropTypes.bool.isRequired,

    legend: PropTypes.string.isRequired,
    height: PropTypes.number,
    showTooltip: PropTypes.bool,
    showLegend: PropTypes.bool,
    showGrid: PropTypes.bool,

    displayTitle: PropTypes.bool,
    titleValue: PropTypes.string,
    titleSize: PropTypes.number,
    subTitleValue: PropTypes.string,
    subTitleSize: PropTypes.number,
};

ReLineChart.defaultProps = {
    height: 250,
    showLegend: true,
    displayTitle: false,
    showTooltip: true,
    showGrid: true
};

export default ReLineChart;