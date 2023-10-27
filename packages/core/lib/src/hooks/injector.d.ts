import React, { ReactElement } from 'react';
export type InjectedComponent<Props, Model, Selectors> = Readonly<{
    props: Props;
} & (Model extends new (...args: any) => infer T ? Selectors extends {
    [K: string]: any;
} ? {
    model: T;
    selectors: Selectors;
} : {
    model: T;
} : {
    selectors: Selectors;
})>;
export declare function depsInjector<I extends new (...args: any) => any>(vModel: I): <P extends object>(Component: React.JSXElementConstructor<{
    props: P;
    model: InstanceType<I>;
}>) => (props: P) => ReactElement;
export declare function depsInjector<S extends {
    [K: string]: any;
}>(selectors: S): <P extends object>(Component: React.JSXElementConstructor<{
    props: P;
    selectors: S;
}>) => (props: P) => ReactElement;
export declare function depsInjector<I extends new (...args: any) => any, S extends {
    [K: string]: any;
}>(vModel: I, selectors: S): <P extends object>(Component: React.JSXElementConstructor<{
    props: P;
    selectors: S;
    model: InstanceType<I>;
}>) => (props: P) => ReactElement;
//# sourceMappingURL=injector.d.ts.map