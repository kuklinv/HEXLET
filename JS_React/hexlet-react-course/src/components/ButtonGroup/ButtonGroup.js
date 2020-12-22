import React, {Component} from 'react'
import classes from './ButtonGroup.module.css';

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }

    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-secondary left">Left</button>
                <button type="button" className="btn btn-secondary right">Right</button>
            </div>
        )
    }
}

export default ButtonGroup;
