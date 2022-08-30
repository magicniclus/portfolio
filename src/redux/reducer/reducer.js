const initState = {
    isLoading: true,
    cursorDifference: false,
    projectIsOpen: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "homePageLoading":
            return{
                ...state,
                isLoading: false
            }

        case "cursorDifferenceOver":
            return{
                ...state,
                cursorDifference: true
            }  

        case "cursorDifferenceLeave":
            return{
                ...state,
                cursorDifference: false
            }    
            
        case "projectIsOpen":
            return{
                ...state,
                projectIsOpen: true
            }     
            
        case "projectIsClose":
            return{
                ...state,
                projectIsOpen: false
            } 

        default: return state
    }
}

export default reducer