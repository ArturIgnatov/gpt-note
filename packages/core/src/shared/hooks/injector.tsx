/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import { observable, runInAction } from 'mobx';

export type InjectedComponent<Props, Model, Selectors> = Readonly<
  { props: Props } & (Model extends new (...args: any) => infer T
    ? Selectors extends { [K: string]: any }
      ? { model: T; selectors: Selectors }
      : { model: T }
    : { selectors: Selectors })
>;

type Lifecycle = { mount?(): void; unmount?(): void };

export interface BaseModel extends Lifecycle {}
export class BaseModel {}

const useObservableSource = <P extends { [K: string]: any }>(props: P) => {
  const [state] = useState(() => observable(props, {}, { deep: false, name: 'INNER STATE' }));

  useEffect(() => {
    runInAction(() => {
      Object.assign(state, props);
    });
  }, [props]);

  return state;
};

export function compose<I extends new (...args: any) => any>(
  model: I,
): <P extends object>(
  Component: React.JSXElementConstructor<{ props: P; model: InstanceType<I> }>,
) => (props: P) => ReactElement;
export function compose<S extends { [K: string]: any }>(
  selectors: S,
): <P extends object>(
  Component: React.JSXElementConstructor<{ props: P; selectors: S }>,
) => (props: P) => ReactElement;
export function compose<I extends new (...args: any) => any, S extends { [K: string]: any }>(
  model: I,
  selectors: S,
): <P extends object>(
  Component: React.JSXElementConstructor<{ props: P; selectors: S; model: InstanceType<I> }>,
) => (props: P) => ReactElement;
export function compose<I extends new (...args: any) => any, S extends { [K: string]: any }>(
  arg1: I | S,
  arg2?: I | S,
) {
  return <P extends object>(
    Component: React.JSXElementConstructor<{ props: P; model?: InstanceType<I>; selectors?: S }>,
  ) => {
    const InjectComponent = observer(Component);

    if (typeof arg1 === 'function' && arg1.constructor !== Object) {
      const vModel = arg1 as I;
      const selectors = arg2 as S;

      return (properties: P) => {
        const props = useObservableSource(properties);

        const model = useMemo(() => {
          return selectors ? new vModel(props, selectors) : new vModel(props);
        }, [props]);

        useEffect(() => {
          model.mount?.();
          return () => {
            model.unmount?.();
          };
        }, []);

        return <InjectComponent {...{ model, props }} {...(selectors ? { selectors } : {})} />;
      };
    }

    const selectors = arg1 as S;

    return (properties: P) => {
      const props = useObservableSource(properties);

      return <InjectComponent {...{ props, selectors }} />;
    };
  };
}
