import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { toggleGood } from './store/actions';

class Good extends React.Component {

    render() {
        const { id, title, price, image, toggleGood, selected } = this.props;
        return (
            <div
                className={
                    `good${ selected ? ' selected' : '' }`
                }
                onClick={
                    () => { toggleGood(id) }
                }>
                <img src={image} alt={title}/>
                <div className="title">{title}</div>
                <div className="price">{price}₽</div>
                <div>{ selected ? 'yes' : 'no' }</div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods,
        selected: state.selected
    }
};
const mapActionsToProps = (dispatch) => {
    return {
        toggleGood: bindActionCreators(toggleGood, dispatch),
    }
};

export default connect(mapStateToProps, mapActionsToProps)(Good);