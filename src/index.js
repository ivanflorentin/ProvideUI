import {Route} from 'react-router'
import React from 'react'
import componentCreator from './components'
import routeCreator from './routes'
import menuCreator from './menu'

export {createMainContainer} from './createMainContainer'

export default function (appDef) {
  const components = {}
  const componentRoutes = []
  appDef.models.map((modelDef) =>{
    components[modelDef.modelName] = componentCreator(modelDef)
    componentRoutes.push(routeCreator(modelDef, components[modelDef.modelName]))
  })
  const menu = menuCreator(appDef)
  const MainRoute =
	<Route path={appDef.appRoute} component={menu}>
	{componentRoutes}
  </Route>

  const app = {
    appDef,
    appName: appDef.appName,
    components,
    routes: MainRoute}
  return app
}
