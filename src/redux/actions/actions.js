export const homePageLoading = ()=>{
    return{
        type: "homePageLoading"
    }
}

export const cursorDifferenceOver = ()=>{
    return{
        type: "cursorDifferenceOver"
    }
}

export const cursorDifferenceLeave = ()=>{
    return{
        type: "cursorDifferenceLeave"
    }
}

export const projectIsOpen = ()=>{
    return{
        type: "projectIsOpen"
    }
}

export const projectIsClose = ()=>{
    return{
        type: "projectIsClose"
    }
}

export const changeColor = payload =>{
    return{
        type: "changeColor",
        payload: payload
    }
}

export const changeTextColor = payload => {
    return{
        type:"changeTextColor",
        payload: payload
    }
}

export const updateScreenSize = payload => {
    return{
        type: "updateScreenSize", 
        payload: payload
    }
}