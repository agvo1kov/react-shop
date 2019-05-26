import React from 'react';
import Good from './Good';

class Catalog extends React.Component {
    render() {
        const list = [
            {
                title: 'Велосипед Roadweller RWB-21, рама 17, 1 скорость, женский, белый',
                price: '5 990',
                image: 'https://p.fast.ulmart.ru/p/gen/415/41555/4155587.jpg'
            },
            {
                title: 'ноутбук Lenovo IdeaPad 330-14AST, 81D5000LRU',
                price: '17 990',
                image: 'https://p.fast.ulmart.ru/p/gen/443/44317/4431734.jpg'
            },
            {
                title: 'электробритва Braun Series 3 3040TS white',
                price: '5 990',
                image: 'https://p.fast.ulmart.ru/p/gen/434/43426/4342669.jpg'
            },
            {
                title: 'карта памяти TransFlash 64ГБ MicroSDXC class 10',
                price: '1 030',
                image: 'https://p.fast.ulmart.ru/p/gen/423/42379/4237973.jpg'
            },
            {
                title: 'эпилятор Braun SES 5/880 Silk-epil 5',
                price: '5 690',
                image: 'https://p.fast.ulmart.ru/p/gen/444/44473/4447316.jpg'
            },
        ];
        return (
            <div className="catalog">
                { list.map((item) => (
                    <Good title={item.title} price={item.price} image={item.image} />
                    )) }
            </div>
        );
    };
}

export default Catalog;