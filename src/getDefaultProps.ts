// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): GetReturnType<T> => component.defaultProps;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];
type UserOrderState = Exclude<OrderState, "Keys">;
// Hint: type guards
export const getUserOrderStates = (
  // eslint-disable-next-line no-shadow
  orderStates: OrderState[]
): UserOrderState[] =>
  orderStates.filter(
    (state): state is UserOrderState =>
      state !== "buyingSupplies" && state !== "producing"
  );
