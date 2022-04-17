import {RuleType,idComponentDataType,ActionGetListFuncType,PayloadGetListType} from '../../type'

export const GET_LIST_COMPONENTS_SUCCEED: string = 'GET_LIST_COMPONENTS_SUCCEED';
export const GET_LIST_COMPONENTS_FAILED: string = 'GET_LIST_COMPONENTS_FAILED';
export const GET_LIST_COMPONENTS: string = 'GET_LIST_COMPONENTS';

export const POST_COMPONENT: string = 'POST_COMPONENT';
export const POST_COMPONENT_SUCCEED: string = 'POST_COMPONENT_SUCCEED';
export const POST_COMPONENT_FAILED: string = 'POST_COMPONENT_FAILED';

export const PATCH_COMPONENT: string = 'PATCH_COMPONENT';
export const PATCH_COMPONENT_SUCCEED: string = 'PATCH_COMPONENT_SUCCEED';
export const PATCH_COMPONENT_FALIED: string = 'PATCH_COMPONENT_FALIED';

export const DELETE_COMPONENT: string = 'DELETE_COMPONENT';
export const DELETE_COMPONENT_SUCCEED: string = 'DELETE_COMPONENT_SUCCEED';
export const DELETE_COMPOENNT_FAILED: string = 'DELETE_COMPOENNT_FAILED';


export const ACTION_PATCH_COMPONENT = (component:string,data:RuleType) => ({
    type: PATCH_COMPONENT,
    component,
    data,
});
export const ACTION_PATCH_COMPONENT_SUCCEED = (payload:RuleType) => ({
    type: PATCH_COMPONENT_SUCCEED,
    payload,
});
export const ACTION_PATCH_COMPONENT_FAILED = (payload:string) => ({
    type: PATCH_COMPONENT_FALIED,
    payload,
})

export const ACTION_DELETE_COMPONENT = (component:string,idComponent:idComponentDataType) => ({
    type: DELETE_COMPONENT,
    component,
    idComponent,
});
export const ACTION_DELETE_COMPONENT_SUCCEED = (payload:RuleType) => ({
    type: DELETE_COMPONENT_SUCCEED,
    payload,
});
export const ACTION_DELETE_COMPONENT_FAILED = (message:string) => ({
    type: DELETE_COMPOENNT_FAILED,
    message,
})


export const ACTION_POST_COMPONENT = (component:string,data:RuleType) => ({
    type: POST_COMPONENT,
    component,
    data,
});
export const ACTION_POST_COMPONENT_SUCCEED = (payload:RuleType) => ({
    type: POST_COMPONENT_SUCCEED,
    payload,
});
export const ACTION_POST_COMPONENT_FAILED = (payload:RuleType) => ({
    type: POST_COMPONENT_FAILED,
    payload,
        
})
export const ACTION_GET_LIST_COMPONENTS: ActionGetListFuncType = (payload: PayloadGetListType) => ({
    type: GET_LIST_COMPONENTS,
    payload,
}); 
export const ACTION_GET_LIST_SUCCEED: ActionGetListFuncType = (payload: PayloadGetListType) => ({
    type: GET_LIST_COMPONENTS_SUCCEED,
    payload,
});
export const ACTION_GET_LIST_FAILED: ActionGetListFuncType = (payload: PayloadGetListType) => ({
    type: GET_LIST_COMPONENTS_FAILED,
    payload,
});
