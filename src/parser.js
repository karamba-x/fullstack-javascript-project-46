const parse = (data, ext) => {
  switch(ext) {
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Format file ${data} is not correct`);
  }
}

export default parse;