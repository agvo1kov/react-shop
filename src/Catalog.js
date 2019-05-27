import React from 'react';
// import Good from './Good';

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { toggleGood } from "./store/actions";

class Catalog extends React.Component {
    render() {
        let { goods, toggleGood, booked } = this.props;
        console.log(goods);

        return (
            <div>
                <h3>{ booked ? 'Ваш заказ:' : 'Выберите товары:'}</h3>
                <div className={`catalog${ booked ? ' booked' : ''}`}>
                    { goods.map((item, index) => (
                            <div
                                className={ `good${ item.selected ? ' selected' : '' }` }
                                onClick={
                                    () => { if (!booked) { toggleGood(index) } }
                                }
                                key={index}>
                                <img src={item.image} alt={item.title}/>
                                <div className="title">{item.title}</div>
                                <div className="price">{item.price} ₽</div>
                            </div>
                        )
                    ) }
                </div>
            </div>
        );
    };
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
    }
};

export default connect(mapStateToProps, mapActionsToProps)(Catalog);