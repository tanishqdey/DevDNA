import techMap from "./JSON/Technology_Display_Map.json" with {type : "json"}

export async function cleanOutput(skillSet) {
    return [...new Set([...skillSet].map(skill => techMap[skill] || skill ))]
}