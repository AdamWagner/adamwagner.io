import _ from 'lodash'
import data from "../data";

export function getProject(projectName) {
  return _.find(data.projects, (p) => p.path.includes(projectName))
}

export function projectsExcept(projectName) {
  return _.reject(data.projects, (p) => p.path.includes(projectName))
}
