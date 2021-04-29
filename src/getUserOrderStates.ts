// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];
type UserState = Exclude<OrderState, "buyingSupplies" | "producing">;
// eslint-disable-next-line no-shadow
export const getUserOrderStates = (orderStates: OrderState[]): UserState[] => {
  const filteredStates = [] as UserState[];
  orderStates.forEach((element) => {
    if (element !== "buyingSupplies" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
