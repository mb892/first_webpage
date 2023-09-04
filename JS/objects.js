let darthVader = {
    allegience: 'Empire',
    weapon: 'lightsaber',
    sith: true
};

for (const key in darthVader) {
    console.log('key:', key, ', value:', darthVader[key])
};

console.log(darthVader.jedi);

darthVader['children'] = 2;
darthVader.childNames = ['Luke', 'Leia']

darthVader.allegience = 'The Light Side';
delete darthVader.children

for (const key in darthVader) {
    console.log('key:', key, ', value:', darthVader[key])
};

let { allegiance, weapon, sith, childNames } = darthVader;

console.log(darthVader);

console.log('weapon:', weapon);

