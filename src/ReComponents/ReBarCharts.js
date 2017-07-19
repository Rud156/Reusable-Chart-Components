import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

class ReBarChart extends Component {
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
                            <BarChart
                                data={this.props.data}
                                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis dataKey="value" />
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
                                <Bar dataKey="value" fill="red" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

ReBarChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })),
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

ReBarChart.defaultProps = {
    height: 250,
    showLegend: true,
    displayTitle: false,
    showTooltip: true,
    showGrid: true
};

export default ReBarChart;