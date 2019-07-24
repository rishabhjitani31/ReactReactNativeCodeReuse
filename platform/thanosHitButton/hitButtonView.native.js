import React  from 'react';
import { Button } from 'react-native';

export class HitButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Button title="Wave Thor" onPress={this.props.increaseCount}></Button>
        )
    }
};