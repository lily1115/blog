export class Dep {
  constructor() {
    this.depends = []
  }
  add () {
    this.depends.push(Dep.target)
  }
  notify () {
    this.depends.forEach(item => {
      item.update()
    })
  }
}
Dep.target = null
export function setTarget (target) {
  Dep.target = target
}
export function cleanTarget (target) {
  Dep.target = null
}