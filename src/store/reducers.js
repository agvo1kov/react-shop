const initialState = {
    goods: [
        {
            title: 'микроволновая печь V-HOME P70H20L-KH',
            price: '3 390',
            image: 'https://p.fast.ulmart.ru/p/gen/445/44575/4457582.jpg',
            selected: false
        },
        {
            title: 'ноутбук Lenovo IdeaPad 330-14AST, 81D5000LRU',
            price: '17 990',
            image: 'https://p.fast.ulmart.ru/p/gen/443/44317/4431734.jpg',
            selected: false
        },
        {
            title: 'ноутбук Lenovo IdeaPad 330-15IGM, 81D1009JRU\n',
            price: '17 050',
            image: 'https://p.fast.ulmart.ru/p/gen/444/44436/4443684.jpg',
            selected: false
        },
        {
            title: 'электробритва Braun Series 3 3040TS white',
            price: '5 990',
            image: 'https://p.fast.ulmart.ru/p/gen/434/43426/4342669.jpg',
            selected: false
        },
        {
            title: 'карта памяти TransFlash 64ГБ MicroSDXC class 10',
            price: '1 030',
            image: 'https://p.fast.ulmart.ru/p/gen/423/42379/4237973.jpg',
            selected: false
        },
        {
            title: 'Моторное масло FORD Formula F/Fuel Economy ',
            price: '1 990',
            image: 'https://p.fast.ulmart.ru/p/gen/60/6001/600190.jpg',
            selected: false
        },
        {
            title: 'сплит-система Whirlpool SPIW WH409LL, Inverter\n',
            price: '18 990',
            image: 'https://p.fast.ulmart.ru/p/gen/423/42344/4234430.jpg',
            selected: false
        },
        {
            title: 'Велосипет Roadweller RWB-21, рама 17, 1 ',
            price: '5 990',
            image: 'https://p.fast.ulmart.ru/p/gen/415/41555/4155587.jpg',
            selected: false
        },
        {
            title: 'Мангал кованый Пикник МК-007',
            price: '3 390',
            image: 'https://p.fast.ulmart.ru/p/gen/346/34687/3468768.jpg',
            selected: false
        }
    ],
    booked: false
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_GOOD':
            let goods = [...state.goods];
            goods[action.payload].selected = !goods[action.payload].selected;
            return {
                ...state,
                goods: goods
            };

        case 'BOOK':
            console.log('HI');
            return {
                ...state,
                booked: true
            };

        default:
            return state;
    }
};