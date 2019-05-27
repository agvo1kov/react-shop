import React from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { toggleGood, book } from "./store/actions";

class Header extends React.Component {
    getSelectedCount() {
        const goods = this.props.goods;
        let count = 0;
        goods.map((elt) => {
            if (elt.selected) {
                count++;
            }
            return elt;
        });
        return count;
    };

    book = () => {
        this.props.book();
    };

    render() {
        const { booked } = this.props;
        return (
            <div className={`order-box ${booked ? ' hidden' : ''}`}>
                <div className="cart">В корзине: <b>{this.getSelectedCount()}</b></div>
                <div className="book" onClick={this.book}>Заказать</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods,
        booked: state.booked
    }
};
const mapActionsToProps = (dispatch) => {
    return {
        toggleGood: bindActionCreators(toggleGood, dispatch),
        book: bindActionCreators(book, dispatch),
    }
};

export default connect(mapStateToProps, mapActionsToProps)(Header);