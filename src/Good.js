import React from 'react';

class Good extends React.Component {
    render() {
        return (
            <div className="good">
                <img src={this.props.image} alt={this.props.title}/>
                <div className="title">{this.props.title}</div>
                <div className="price">{this.props.price} ₽</div>
            </div>
        );
    };
}

export default Good;