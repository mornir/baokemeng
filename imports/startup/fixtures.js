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
                'link': 'Fomantis',
                'types': ['草'],
                'attribute': '别的'
    }, {
                'nameFR': 'Floramantis',
                'nameCN': '兰螳花',
                'nameEN': 'Lurantis',
                'link': 'Lurantis',
                'types': ['草'],
                'attribute': '别的'
    }, {
                'nameFR': 'Argouste',
                'nameCN': '猫鼬探长',
                'nameEN': 'Gumshoos',
                'link': 'Gumshoos',
                'types': ['一般'],
                'attribute': '别的'
    }, {
                'nameFR': 'Météno',
                'nameCN': '小陨星',
                'nameEN': 'Minior',
                'link': 'Minior',
                'types': ['岩石', '飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Tiboudet',
                'nameCN': '泥驴仔',
                'nameEN': 'Mudbray',
                'link': 'Mudbray',
                'types': ['地面'],
                'attribute': '别的'
    }, {
                'nameFR': 'Plumeline (Style Flamenco)',
                'nameCN': '花舞鸟 / 热辣热辣风格',
                'nameEN': 'Oricorio (Baile Style)',
                'link': 'Redbird',
                'types': ['火', '飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Plumeline (Style Pom-Pom)',
                'nameCN': '花舞鸟 / 啪滋啪滋风格',
                'nameEN': 'Pom-Pom Style Oricorio',
                'link': 'yellowbird',
                'types': ['电', '飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Plumeline (Style Hula)',
                'nameCN': '花舞鸟 / 呼拉呼拉风格',
                'nameEN': 'Pa\'u Style Oricorio',
                'link': 'pinkbird',
                'types': ['超能力', '飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Plumeline (Style Buyō)',
                'nameCN': '花舞鸟 / 轻盈轻盈风格',
                'nameEN': 'Sensu Style Oricorio',
                'link': 'purplebird',
                'types': ['幽灵', '飞行'],
                'attribute': '别的'
    }, {
                'nameFR': 'Togedemaru',
                'nameCN': '托戈德玛尔',
                'nameEN': 'Togedemaru',
                'link': 'Togedemaru',
                'types': ['电', '钢'],
                'attribute': '别的',
    }, {
                'nameFR': 'Chrysapile',
                'nameCN': '虫电宝',
                'nameEN': 'Charjabug',
                'link': 'Charjabug',
                'types': ['虫', '电'],
                'attribute': '别的',
    }, {
                'nameFR': 'Lucanon',
                'nameCN': '锹农炮虫',
                'nameEN': 'Vikavolt',
                'link': 'Vikavolt',
                'types': ['虫', '电'],
                'attribute': '别的',
    }, {
                'nameFR': 'Dodoala',
                'nameCN': '树枕尾熊',
                'nameEN': 'Charjabug',
                'link': 'Charjabug',
                'types': ['毒', '火'],
                'attribute': '别的',
    }, {
                'nameFR': 'Rocabot',
                'nameCN': '树枕尾熊',
                'nameEN': 'Komala',
                'link': 'Komala',
                'types': ['一般'],
                'attribute': '别的',
    }, {
                'nameFR': 'Croquine',
                'nameCN': '甜竹竹',
                'nameEN': 'Bounsweet',
                'link': 'Berry',
                'types': ['草'],
                'attribute': '别的',
    }, {
                'nameFR': 'Chelours',
                'nameCN': '穿着熊',
                'nameEN': 'Bewear',
                'link': 'bear',
                'types': ['一般', '格斗'],
                'attribute': '别的',
    }, {
                'nameFR': 'Brindibou',
                'nameCN': '木木枭',
                'nameEN': 'Rowlet',
                'link': 'Rowlet',
                'types': ['草', '飞行'],
                'attribute': '最初同伴的',
    }, {
                'nameFR': 'Mimiqui',
                'nameCN': '谜拟Ｑ',
                'nameEN': 'Mimikyu',
                'link': 'ghost',
                'types': ['幽灵', '妖精'],
                'attribute': '别的',
    }, {
                'nameFR': 'Sovkipou',
                'nameCN': '胆小虫',
                'nameEN': 'Wimpod',
                'link': 'bug',
                'types': ['虫', '水'],
                'attribute': '别的',
    }, {
                'nameFR': 'Guérilande',
                'nameCN': '花疗环环',
                'nameEN': 'Comfey',
                'link': 'flower',
                'types': ['妖精'],
                'attribute': '别的',
    }, {
                'nameFR': 'Bourrinos',
                'nameCN': '重泥挽马',
                'nameEN': 'Mudsdale',
                'link': 'horse',
                'types': ['地面'],
                'attribute': '别的',
    }, {
                'nameFR': 'Flamiaou',
                'nameCN': '火斑喵',
                'nameEN': 'Litten',
                'link': 'Litten',
                'types': ['火'],
                'attribute': '最初同伴的',
    }, {
                'nameFR': 'Denticrisse',
                'nameCN': '磨牙彩皮鱼',
                'nameEN': 'Bruxish',
                'link': 'Bruxish',
                'types': ['水', '超能力'],
                'attribute': '别的',
    }, {
                'nameFR': 'Bombydou',
                'nameCN': '萌虻',
                'nameEN': 'Cutiefly',
                'link': 'Cutiefly',
                'types': ['虫', '妖精'],
                'attribute': '别的',
    }, {
                'nameFR': 'Picassaut',
                'nameCN': '小笃儿',
                'nameEN': 'Pikipek',
                'link': 'Pikipek',
                'types': ['一般', '飞行'],
                'attribute': '别的',
    }, {
                'nameFR': 'Manglouton',
                'nameCN': '猫鼬少',
                'nameEN': 'Yungoos',
                'link': 'Yungoos',
                'types': ['一般'],
                'attribute': '别的',
    }, {
                'nameFR': 'Draïeul',
                'nameCN': '老翁龙',
                'nameEN': 'Drampa',
                'link': 'Drampa',
                'types': ['一般', '龙'],
                'attribute': '别的',
    }, {
                'nameFR': 'Otaquin',
                'nameCN': '球球海狮',
                'nameEN': 'Popplio',
                'link': 'Popplio',
                'types': ['水'],
                'attribute': '最初同伴的',
    }, {
                'nameFR': 'Solgaleo',
                'nameCN': '索尔迦雷欧',
                'nameEN': 'Solgaleo',
                'link': 'Solgaleo',
                'types': ['超能力', '钢'],
                'attribute': '传说的',
    }, {
                'nameFR': 'Lunala',
                'nameCN': '露奈雅拉',
                'nameEN': 'Lunala',
                'link': 'Lunala',
                'types': ['超能力', '幽灵'],
                'attribute': '传说的',
    }];

        pokemons.forEach((pokemon) => {
            Pokemons.insert(pokemon);
        });
    }
});
