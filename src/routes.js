const _apiBase = 'https://my-json-server.typicode.com/hateinternet/fakejson';

export default {
  goodsUrl: () => [_apiBase, 'funkoGoods'].join('/'),
  productUrl: (id) => [_apiBase, 'funkoGoods', id].join('/'),
};
