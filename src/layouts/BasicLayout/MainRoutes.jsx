import React, {
  Component,
} from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NotFound from '../../components/NotFound';
import routerConfig from './routerConfig';

export default function MainRoutes() {
  //  渲染路由组件
  function renderRouter() {
    return routerConfig.map((item, index) => {
      return item.component ?
        <Route
          key={index}
          path={item.path}
          component={item.component}
          exact={item.exact}
        /> : null;
    });
  }

  return (
    <Switch>
      {/* 渲染路由表 */}
      {renderRouter()}

      {/* 根路由默认重定向到 /tasks */}
      <Redirect from="/" to="/system/find" />

      {/* 未匹配到的路由重定向到 NotFound */}
      <Route component={NotFound} />
    </Switch>
  );
}