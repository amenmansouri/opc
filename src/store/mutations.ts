import { MutationTree } from 'vuex'
import { State, Program, ProgramDetails } from './state'

export enum MutationType {
    GetPrograms = 'GET_PROGRAMS',
    GetProgramDetails = 'GET_PROGRAM_DETAILS',
}
export type Mutations = {
    [MutationType.GetPrograms](state: State, programs: Program[]): void
    [MutationType.GetProgramDetails](state: State, programDetails: ProgramDetails | null): void
}
export const mutations: MutationTree<State> & Mutations = {

    [MutationType.GetPrograms](state, programs) {
        state.programs = programs;
    },
    [MutationType.GetProgramDetails](state, programDetails) {
        state.programDetails = programDetails;
    },
}