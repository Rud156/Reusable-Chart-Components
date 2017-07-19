import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import CardWidget from './CardWidget';

class LayoutHolder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            barChartData: {
                data: [52, 40, 30],
                labels: ['Hello', 'Hi', 'World'],
                backgroundColor: ['red', 'purple', 'green'],

                displayTitle: true,
                titleValue: 'Some Fake Data',
                titleSize: 15,
                subTitleValue: '$ 12,000',
                subTitleSize: 30,

                displayLegend: false,
                legendValue: 'Custom Something',
                legendPosition: 'top',

                displayTooltip: true
            },
            lineChartData: {
                labels: ['Mic', 'Testing', 'Check'],
                datasets: [
                    {
                        data: [100, 12, 50],
                        label: 'Something',

                        fill: true,
                        backgroundColor: 'rgba(153, 0, 204, 0.5)',
                        lineColor: 'purple',
                        pointColor: '#600080',
                    },
                    {
                        data: [200, 150, 70],
                        label: 'More Thing',

                        fill: true,
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        lineColor: 'red',
                        pointColor: '#800000',
                    },
                ],

                displayTitle: true,
                titleValue: 'Some Fake Data',
                titleSize: 15,
                subTitleValue: '$ 102,000',
                subTitleSize: 30,

                displayLegend: false,
                legendPosition: 'top',

                displayTooltip: true
            },
            pieChartData: {
                currentValue: 5,
                maxValue: 15,
                label: 'Hello',
                backgroundColor: 'red',

                displayTitle: true,
                titleValue: 'Some Fake Data',
                titleSize: 15,
                subTitleValue: '$ 12,000',
                subTitleSize: 30,

                displayLegend: false,
                legendValue: 'Custom Something',
                legendPosition: 'top',

                displayTooltip: true
            },
            cardData: {
                value: 179,
                title: 'New Sign ups',
                subTitle: 'Lorem ipsum psdea itgum rixt',
                iconName: 'fa-bomb'
            }
        };

        this.setRandomBarChartData = this.setRandomBarChartData.bind(this);
        this.setRandomLineChartData = this.setRandomLineChartData.bind(this);
        this.setRandomPieChartData = this.setRandomPieChartData.bind(this);
    }

    setRandomBarChartData() {
        let index = Math.floor(Math.random() * this.state.barChartData.data.length);
        let randomValue = Math.floor(Math.random() * 100);

        let array = this.state.barChartData.data.slice(0, 3);
        array[index] = randomValue;

        let barChartData = { ...this.state.barChartData };
        barChartData.data = array;

        this.setState({ barChartData: barChartData });
    }

    setRandomLineChartData() {
        let index_1 = Math.floor(Math.random() * this.state.lineChartData.datasets[0].data.length);
        let index_2 = Math.floor(Math.random() * this.state.lineChartData.datasets[1].data.length);

        let array_1 = this.state.lineChartData.datasets[0].data.slice(0, 3);
        let array_2 = this.state.lineChartData.datasets[1].data.slice(0, 3);
        array_1[index_1] = Math.floor(Math.random() * 100);
        array_2[index_2] = Math.floor(Math.random() * 100);

        let lineChartData = { ...this.state.lineChartData };
        lineChartData.datasets[0].data = array_1;
        lineChartData.datasets[1].data = array_2;

        this.setState({ lineChartData: lineChartData });
    }

    setRandomPieChartData() {
        let randomValue = Math.random() * 100;
        let randomMaxValue = Math.random() * 100 + 100;

        let pieChartData = { ...this.state.pieChartData };
        pieChartData.currentValue = randomValue;
        pieChartData.maxValue = randomMaxValue;

        this.setState({ pieChartData: pieChartData });
    }

    render() {
        return (
            <div className="chart" style={{ marginTop: '20px' }}>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column mobile={16} tablet={5} largeScreen={5} widescreen={5}>
                            <div style={{ padding: '7px', textAlign: 'center' }}>
                                <BarChart {...this.state.barChartData} />
                                <Button onClick={this.setRandomBarChartData}>
                                    Click Me
                                </Button>
                            </div>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={5} largeScreen={5} widescreen={5}>
                            <div style={{ padding: '7px', textAlign: 'center' }}>
                                <LineChart {...this.state.lineChartData} />
                                <Button onClick={this.setRandomLineChartData}>
                                    Click Me
                                </Button>
                            </div>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={5} largeScreen={5} widescreen={5}>
                            <div style={{ padding: '7px', textAlign: 'center' }}>
                                <PieChart {...this.state.pieChartData} />
                                <Button onClick={this.setRandomPieChartData}>
                                    Click Me
                                </Button>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <Grid.Column mobile={8} tablet={4} largeScreen={4} widescreen={4}>
                            <div style={{ padding: '7px', textAlign: 'center' }}>
                                <CardWidget {...this.state.cardData} />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default LayoutHolder;