const list = (state = [], action) => {
  switch (action.type) {
    case "ADD_FILM":
      return [...state, { name: action.name, id: action.id }];
    case "REMOVE_FILM":
      return (state.filter(element => element.id !== action.id))

    case "GET_SORTED":
      const list = state;
      const pick = list[Math.floor(Math.random() * list.length)];
      const newList = list.map(item => {
        var obj = {};
        obj.id = item.id;
        obj.name = item.name;
        obj.isChoice = item.id === pick.id ? true : false;
        return obj;
      });
      console.log(newList)

      return newList;
    default:
      return state;
  }
};

export default list;
