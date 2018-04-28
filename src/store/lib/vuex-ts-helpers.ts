import {
  ActionTree,
  Action as Act,
  GetterTree,
  Module as Mod,
  ModuleTree,
  Mutation as Mut,
  MutationTree,
  Payload,
  ActionContext
} from 'vuex'

export class VuexModule<S=ThisType<S>, R=any> implements Mod<S,R> {
  /*
   * To use with `extends Class` syntax along with decorators
   */
  static namespaced?: boolean;
  static state?: any | (() => any);
  static getters?: GetterTree<any, any>;
  static actions?: ActionTree<any, any>;
  static mutations?: MutationTree<any>;
  static modules?: ModuleTree<any>;

  /*
   * To use with new VuexModule({}) syntax
   */

  modules?: ModuleTree<any>
  namespaced?: boolean
  getters?: GetterTree<S, any>
  state?: S | (() => S)
  mutations?: MutationTree<S>
  actions?: ActionTree<S, R>

  constructor(module: Mod<S, any>) {
    this.actions = module.actions
    this.mutations = module.mutations
    this.state = module.state
    this.getters = module.getters
    this.namespaced = module.namespaced
    this.modules = module.modules
  }
}

export function Module<S> (module: Function & Mod<S,any>) {
  const state = new (module.prototype.constructor)({})
  if (!module.state) {
    module.state = <S>{}
  }
  Object.keys(state).forEach((key: string) => {
    if (state.hasOwnProperty(key) && typeof state[key] !== 'function') {
      (module.state as any)[key] = state[key]
    }
  })
}

interface ActionDecoratorParams {
  commit: string
}
export function Action<T> (params: ActionDecoratorParams) {

  return function (target: T, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) {
    const module = target.constructor as Mod<T,any>
    console.log('----------')
    console.log(module)
    if (!module.actions) {
      module.actions = {}
    }
    const actionFunction: Function = descriptor.value
    const action: Act<typeof target, any> = async function(context: ActionContext<typeof target, any>, payload: Payload) {
      const actionPayload = await actionFunction()
      if(params.commit) {
        context.commit(params.commit, actionPayload)
      }
    }
    module.actions[key] = action
  }
}

export function Mutation<T> (target: T, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) {
  const module = target.constructor as Mod<T,any>
  if (!module.mutations) {
    module.mutations = {}
  }
  const mutationFunction: Function = descriptor.value
  const mutation: Mut<typeof target> = function (state: typeof target, payload: Payload) {
    mutationFunction.apply(state, [payload])
  }
  module.mutations[key] = mutation
}
