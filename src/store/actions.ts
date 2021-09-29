// /store/action.ts
import { filter, findOne } from '@/services/ProgramApi'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { Program, ProgramDetails, State } from './state'

export enum ActionTypes {
  GetProgramItems = 'GET_PROGRAM_ITEMS',
  GetProgramItem = 'GET_PROGRAM_ITEM'
}
type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
  }
  export type Actions = {
    [ActionTypes.GetProgramItems](context: ActionAugments, payload:string): void
    [ActionTypes.GetProgramItem](context: ActionAugments,payload:any): void 
  }
export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetProgramItems]({ commit }, payload:string) {
    const programs:Program[]= await filter(payload);
    commit(MutationType.GetPrograms, programs)
  },
  async [ActionTypes.GetProgramItem]({ commit }, payload) {
    const program:ProgramDetails= await findOne(payload);
    commit(MutationType.GetProgramDetails, program)
  },
}