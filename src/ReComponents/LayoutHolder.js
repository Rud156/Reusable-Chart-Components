import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

import CardWidget from './CardWidget';
import ReBarChart from './ReBarCharts';
import ReLineChart from './ReLineCharts';

class LayoutHolder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardData: {
                value: 179,
                title: 'New Sign ups',
                subTitle: 'Lorem ipsum psdea itgum rixt',
                iconName: 'fa-bomb'
            },
            barChartData: {
                data: [
                    {
                        name: 'First',
                        value: 100
                    },
                    {
                        name: 'Second',
                        value: 150
                    },
                    {
                        name: 'Third',
                        value: 75
                    }
                ],
                legend: 'Testing',
                showTooltip: true,
                showLegend: false,
                showGrid: true,

                displayTitle: true,
                titleValue: 'Some Fake Data',
                titleSize: 15,
                subTitleValue: '$ 12,000',
                subTitleSize: 30,
            },
            lineChartData: {
                data: [
                    {
                        name: 'First',
                        key_1: 100,
                        key_2: 100
                    },
                    {
                        name: 'Second',
                        key_1: 150,
                        key_2: 250
                    },
                    {
                        name: 'Third',
                        key_1: 75,
                        key_2: 120
                    }
                ],
                displayFirstLine: true,
                displaySecondLine: true,

                legend: 'Testing',
                showTooltip: true,
                showLegend: false,
                showGrid: true,

                displayTitle: true,
                titleValue: 'Some Fake Data',
                titleSize: 15,
                subTitleValue: '$ 12,000',
                subTitleSize: 30,
            }
        };

        this.setRandomBarChartData = this.setRandomBarChartData.bind(this);
    }

    setRandomBarChartData() {
        console.log("Button Clicked");
        let index = Math.floor(Math.random() * this.state.barChartData.data.length);
        let randomValue = Math.floor(Math.random() * 100);

        let barChartData = { ...this.state.barChartData };
        barChartData.data[index].value = randomValue;
        console.log("Bar Chart Data: ", barChartData.data);

        this.setState({ barChartData: barChartData });
    }

    render() {
        return (
            <div className="chart" style={{ marginTop: '20px' }}>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column mobile={16} tablet={5} largeScreen={5} widescreen={5}>
                            <div style={{ padding: '7px', textAlign: 'center' }}>
                                <ReBarChart {...this.state.barChartData} />
                                <Button onClick={this.setRandomBarChartData}>
                                    Click Me
                                </Button>
                            </div>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={5} largeScreen={5} widescreen={5}>
                            <div style={{ padding: '7px', textAlign: 'center' }}>
                                <ReLineChart {...this.state.lineChartData} />
                            </div>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={5} largeScreen={5} widescreen={5}>
                            <div style={{ padding: '7px', textAlign: 'center' }}>

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