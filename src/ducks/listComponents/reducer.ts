import { initialStateType,ActionType } from "../../type";
import {
    GET_LIST_COMPONENTS,
    GET_LIST_COMPONENTS_SUCCEED,
    GET_LIST_COMPONENTS_FAILED,
    POST_COMPONENT,
    POST_COMPONENT_SUCCEED,
    POST_COMPONENT_FAILED,
    PATCH_COMPONENT,
    PATCH_COMPONENT_SUCCEED,
    DELETE_COMPONENT,
    DELETE_COMPONENT_SUCCEED,
    DELETE_COMPOENNT_FAILED
} from "../listComponents/actions";

export const initialListComponentState: initialStateType = {
    data: [],
    isLoading:false,
}

export const listComponentsReducer = (state = initialListComponentState, action:ActionType) => {
    switch (action.type) {
        case GET_LIST_COMPONENTS:
            return {
                ...state,
                isLoading:true,
            };
        case GET_LIST_COMPONENTS_SUCCEED:
        
            return {
                ...state,
                    data: [
                        ...action.payload,
                ],
                    isLoading:false,
            };
        case GET_LIST_COMPONENTS_FAILED:
            return {
                ...state,
                isLoading:false,
            };
        case POST_COMPONENT:
            return {
                ...state,
                isLoading:true,
            }
        case POST_COMPONENT_SUCCEED:
            return {
               ...state,
                data: [...state.data, action.payload],
                isLoading:false,
            }
        case POST_COMPONENT_FAILED:
            return {
                ...state,
                isLoading:false,
            }
        case PATCH_COMPONENT:
            return {
                ...state,
                isLoading:true,
            }
        case PATCH_COMPONENT_SUCCEED:
            return {
                ...state,
                data: state.data.map((item: { id: string }) => {
                    return item.id === action.payload.id ? action.payload : item;
                }),
                isLoading:false,
            }
        case DELETE_COMPONENT:
            return {
                ...state,
                isLoading:true,
            }
        case DELETE_COMPONENT_SUCCEED:
            
            return {
                ...state,
                data: state.data.filter((item: { id: string }): boolean => item.id !== action.payload.data.id),
                isLoading:false,
            }
        case DELETE_COMPOENNT_FAILED:
            return {
                ...state,
                isLoading:false,
            }
        default:
            return {
                ...state,
            }
    }
}
