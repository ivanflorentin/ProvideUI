import editCreator from './edit'
import listCreator from './list'
import displayCreator from './display'

export default function (compDef) {
  const modelProperName = compDef.modelName[0].toUpperCase() +
	compDef.modelName.substring(1)
  const models = {}
  const edit = editCreator(compDef)
  const list = listCreator(compDef)
  const display = displayCreator(compDef)
  
  models[`edit${modelProperName}`] = edit
  models[`list${modelProperName}`] = list
  models[`display${modelProperName}`] = display
  
  if (!window.__provideUI){
    window.__provideUI = {}
  }
  window.__provideUI[`edit${modelProperName}`] = edit
  window.__provideUI[`list${modelProperName}`] = list
  window.__provideUI[`display${modelProperName}`] = display
  window.__provideUI = __provideUI

  return models
}
