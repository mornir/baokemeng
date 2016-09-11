import {
    Meteor
}
from 'meteor/meteor';
import {
    Pokemons
}
from '../api/pokemons';

Meteor.startup(() => {
    if (Pokemons.find().count() === 0) {
        const pokemons = [
            {
                'nameFR': 'Mimantis',
                'nameCN': '伪螳草',
                'nameEN': 'Fomantis',
                'types': ['草'],
                'attribute': '别的'
    }, {
                'nameFR': 'Floramantis',
                'nameCN': '兰螳花',
                'nameEN': 'Lurantis',
                'types': ['草'],
                'attribute': '别的'
    }, {
                'nameFR': 'Argouste',
                'nameCN': '猫鼬探长',
                'nameEN': 'Gumshoos',
                'types': ['一般'],
                'attribute': '别的'
    }, {
                'nameFR': 'Météno',
                'nameCN': '小陨星',
                'nameEN': 'Minior',
                'types': ['岩石,飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Tiboudet',
                'nameCN': '泥驴仔',
                'nameEN': 'Mudbray',
                'types': ['地面'],
                'attribute': '别的'
    }, {
                'nameFR': 'Plumeline (Style Flamenco)',
                'nameCN': '花舞鸟 / 热辣热辣风格',
                'nameEN': 'Baile Style Oricorio',
                'types': ['火,飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Plumeline (Style Pom-Pom)',
                'nameCN': '花舞鸟 / 啪滋啪滋风格',
                'nameEN': 'Pom-Pom Style Oricorio',
                'types': ['电,飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Plumeline (Style Hula)',
                'nameCN': '花舞鸟 / 呼拉呼拉风格',
                'nameEN': 'Pa\'u Style Oricorio',
                'types': ['超能力,飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Plumeline (Style Buyō)',
                'nameCN': '花舞鸟 / 轻盈轻盈风格',
                'nameEN': 'Sensu Style Oricorio',
                'types': ['幽灵,飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Tritox',
                'nameCN': '夜盗火蜥',
                'nameEN': 'Salandit',
                'types': ['毒', '火'],
                'attribute': '别的',
    }, {
                'nameFR': 'Chrysapile',
                'nameCN': '虫电宝',
                'nameEN': 'Charjabug',
                'types': ['虫', '电'],
                'attribute': '别的',
    }, {
                'nameFR': 'Lucanon',
                'nameCN': '锹农炮虫',
                'nameEN': 'Vikavolt',
                'types': ['虫', '电'],
                'attribute': '别的',
    }, {
                'nameFR': 'Dodoala',
                'nameCN': '树枕尾熊',
                'nameEN': 'Charjabug',
                'types': ['毒', '火'],
                'attribute': '别的',
    }, {
                'nameFR': 'Rocabot',
                'nameCN': '树枕尾熊',
                'nameEN': 'Komala',
                'types': ['一般'],
                'attribute': '别的',
    }, {
                'nameFR': 'Croquine',
                'nameCN': '甜竹竹',
                'nameEN': 'Bounsweet',
                'types': ['草'],
                'attribute': '别的',
    }, {
                'nameFR': 'Chelours',
                'nameCN': '穿着熊',
                'nameEN': 'Bewear',
                'types': ['一般', '格斗'],
                'attribute': '别的',
    }, {
                'nameFR': 'Brindibou',
                'nameCN': '木木枭',
                'nameEN': 'Rowlet',
                'types': ['草', '飞行'],
                'attribute': '最初同伴的',
    }, {
                'nameFR': 'Mimiqui',
                'nameCN': '谜拟Ｑ',
                'nameEN': 'Mimikyu',
                'types': ['幽灵', '妖精'],
                'attribute': '别的',
    }, {
                'nameFR': 'Sovkipou',
                'nameCN': '胆小虫',
                'nameEN': 'Wimpod',
                'types': ['虫,水'],
                'attribute': '别的',
    }, {
                'nameFR': 'Guérilande',
                'nameCN': '花疗环环',
                'nameEN': 'Comfey',
                'types': ['妖精'],
                'attribute': '别的',
    }, {
                'nameFR': 'Bourrinos',
                'nameCN': '重泥挽马',
                'nameEN': 'Mudsdale',
                'types': ['地面'],
                'attribute': '别的',
    }, {
                'nameFR': 'Flamiaou',
                'nameCN': '火斑喵',
                'nameEN': 'Litten',
                'types': ['火'],
                'attribute': '最初同伴的',
    }, {
                'nameFR': 'Denticrisse',
                'nameCN': '磨牙彩皮鱼',
                'nameEN': 'Bruxish',
                'types': ['水', '超能力'],
                'attribute': '别的',
    }, {
                'nameFR': 'Bombydou',
                'nameCN': '萌虻',
                'nameEN': 'Cutiefly',
                'types': ['虫', '妖精'],
                'attribute': '别的',
    }, {
                'nameFR': 'Picassaut',
                'nameCN': '小笃儿',
                'nameEN': 'Pikipek',
                'types': ['一般', '飞行'],
                'attribute': '别的',
    }, {
                'nameFR': 'Manglouton',
                'nameCN': '猫鼬少',
                'nameEN': 'Yungoos',
                'types': ['一般'],
                'attribute': '别的',
    }, {
                'nameFR': 'Draïeul',
                'nameCN': '老翁龙',
                'nameEN': 'Drampa',
                'types': ['一般', '龙'],
                'attribute': '别的',
    }, {
                'nameFR': 'Otaquin',
                'nameCN': '球球海狮',
                'nameEN': 'Popplio',
                'types': ['水'],
                'attribute': '最初同伴的',
    }, {
                'nameFR': 'Solgaleo',
                'nameCN': '索尔迦雷欧',
                'nameEN': 'Solgaleo',
                'types': ['超能力', '钢'],
                'attribute': '传说的',
    }, {
                'nameFR': 'Lunala',
                'nameCN': '露奈雅拉',
                'nameEN': 'Lunala',
                'types': ['超能力', '幽灵'],
                'attribute': '传说的',
    }];

        pokemons.forEach((pokemon) => {
            Pokemons.insert(pokemon);
        });
    }
});
