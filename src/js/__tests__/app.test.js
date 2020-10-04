import specialPanel from '../app';

test('specialPanel Test', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  const recived = specialPanel(character);
  const expected = [
    {
      id: 8, name: 'Двойной выстрел', despription: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
    },
    {
      id: 9, name: 'Нокаутирующий удар', despription: 'Описание недоступно', icon: 'http://...',
    },
  ];

  expect(recived).toEqual(expected);
});
