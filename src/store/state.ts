
export type Title = {
    color?: any;
    type: string;
    value: string;
}

export type PlayInfoId = {
    hd: string;
    sd: string;
    uhd?: any;
}
export type PlayInfo = {
    tokenurl: string | null;
    url: string | null
}

export interface Description {
    type: string;
    value: string;
    color: string;
}

export interface Acontent {
    type: string;
    description: Description[];
    contents: Program[];
}

export interface ZonesInfo {
    duration: number;
    endcreditsautocompleted: boolean;
    previouslytcin?: any;
    previouslytcout?: any;
    startcreditstcin: number;
    startcreditstcout: number;
    endcreditstcin: number;
    endcreditstcout: number;
}

export interface Episode {
    parentalrating: number;
    isbookmarkable: boolean;
    isdownloadable: boolean;
    number: number;
    title: Title[];
    duration: string;
    availability: Title[];
    menutitle: Title[];
    menutitlefocus: Title[];
    summary: string;
    highlefticon: string[];
    highrighticon?: any;
    subtitle?: any;
    subtitlefocus?: any;
    pitch: string;
    bannerinfo: Title[];
    description: string[][];
    imageurl: string;
    fullscreenimageurl: string;
    linearplanning?: any;
    acontents: Acontent[];
    playinfoid: PlayInfoId;
    playinfo: PlayInfo;
    id: string;
    zonesinfo: ZonesInfo;
}

export interface Season {
    menutitle: Title[];
    subtitle: string;
    number: number;
    id: string;
    pitch: string;
    imageurl: string;
    isbookmarkable: boolean;
    episodes: Episode[];
    highlefticon: string[];
    acontents: Acontent[];
}
export interface Contents {
    title: Title[];
    id: string;
    highlightid?: any;
    selectid?: any;
    isbookmarkable: boolean;
    detaillink: string;
    seasons: Season[];
    acontents: Acontent[];
}
export type Program = {
    title: Title[];
    subtitle: string;
    subtitlefocus?: any;
    highlefticon?: any;
    highrighticon?: any;
    lowrightinfo?: any;
    imageurl: string;
    fullscreenimageurl: string;
    id: string;
    detaillink: string;
    duration: string;
    playinfoid: PlayInfoId;
}
export interface ProgramDetails {
    template: string;
    parentalrating: number;
    categoryID: number;
    contents: Contents;
}

export type State = {
    programs: Program[],
    programDetails: ProgramDetails | null
};
export const state: State = {
    programs: [
    ],
    programDetails: null
};