var ajax = require('../lib/request.js');
import {homePageApi,personalApi} from './apiConfig.js';

//获取校招动态
exports.getCampusNewsList = function(callback){
 ajax.request({
      url: homePageApi.campusNewsList,
      method: 'get',
      success: callback
  });
}