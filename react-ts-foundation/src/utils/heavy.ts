import _ from "lodash";

export function expensiveCalculation() {
  return _.range(0, 100000).map(n => n * 2).slice(0, 10);
}
