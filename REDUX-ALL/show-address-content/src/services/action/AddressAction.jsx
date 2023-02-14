import { DIST_NAME, PO_NAME, PS_NAME, VILL_NAME } from "../Types";

export const handleVillage=()=>{
    return {type: VILL_NAME};
}

export const handlePost=()=>{
    return {type: PO_NAME};
}

export const handlePolice=()=>{
    return {type: PS_NAME};
}

export const handleDistrict=()=>{
    return {type: DIST_NAME};
}

