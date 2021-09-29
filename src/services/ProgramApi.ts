import { Program } from "@/store/state"

export const filter= async (payload:string):Promise<Program[]> =>
    await fetch(`https://api.ocs.fr/apps/v2/contents?search=title=${payload}`).then(res=>(res.json())).then(data=>data.contents)

export const findOne= async (payload:any) =>
     await fetch(`https://api.ocs.fr/apps/v2/details/${payload?.category}/${payload?.id}`).then(res=>res.json()).then(data=>data.contents)
