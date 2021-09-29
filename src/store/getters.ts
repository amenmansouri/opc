import { GetterTree } from 'vuex'
import { State, Program, ProgramDetails } from './state'
 
export type Getters = {
    getPrograms(state: State): Program[]
    getProgram(state: State): ProgramDetails |null
}
 
export const getters: GetterTree<State, State> & Getters = {
    getPrograms(state) {
    return state.programs
  },
  getProgram(state) {
    return state.programDetails
  }
}