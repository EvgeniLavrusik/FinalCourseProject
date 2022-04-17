import { RuleType, StateListComponentType } from "../../type";
export const listComponentSelector = (state: StateListComponentType): RuleType[] => state.listComponent.data;
export const isLoadingSelector = (state: StateListComponentType) => state.listComponent.isLoading;