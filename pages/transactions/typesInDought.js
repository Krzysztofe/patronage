export const typesInDought = (list, type) =>{

return list.map(i => {
    switch (i.type) {
      case 1:
        return type[1];
        break;
      case 2:
        return type[2];
        break;
      case 3:
        return type[3];
        break;
      case 4:
        return type[4];
        break;
    }
  });
}
