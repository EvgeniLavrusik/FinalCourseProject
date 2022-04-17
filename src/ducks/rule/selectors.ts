import { RuleType, StateRuleType } from "../../type";
export const ruleSelectors = (state:StateRuleType):RuleType => state.rule.data;