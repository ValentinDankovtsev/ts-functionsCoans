import React from "react";
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

export type DefaultPropsType<T> = T extends React.ComponentType<infer P>
  ? React.ComponentType<P>["defaultProps"]
  : never;

export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): DefaultPropsType<React.ComponentType<T>> => component.defaultProps;
