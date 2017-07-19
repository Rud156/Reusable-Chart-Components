import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class CardWidget extends React.Component {
    
    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8} verticalAlign={'middle'}>
                                <h1 style={{ fontSize: '38px' }}>{this.props.value}</h1>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <i className={'fa fa-5x ' + this.props.iconName}></i>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
                <Card.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <h3>{this.props.title}</h3>
                                <p>{this.props.subTitle}</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        );
    }
}

CardWidget.propTypes = {
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
};

export default CardWidget;