// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import ReactDOM from 'react-dom';
import '@alifd/next/reset.scss';
import router from './router';
import utils from './utils/index';
import * as api from './api/index';
import model from './model/index';
import * as config from './config';
import Components from './components/index';

const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
	throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

window.utils = utils;
window.api = api;
window.model = model;
window.config = config;
window.Components = Components;

ReactDOM.render(router, ICE_CONTAINER);