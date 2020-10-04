
// eslint-disable-next-line no-unused-vars
export default function specialPanel(obj) {
  const { special } = obj;
  const arr = [];
  for (const key of special) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = key;
    arr.push({
      id, name, despription: description, icon,
    });
  }
  return arr;
}
