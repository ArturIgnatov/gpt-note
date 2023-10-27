import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import { observable, runInAction } from 'mobx';
const useObservableSource = (props) => {
    const [state] = useState(() => observable(props, {}, { deep: false, name: 'INNER STATE' }));
    useEffect(() => {
        runInAction(() => {
            Object.assign(state, props);
        });
    }, [props]);
    return state;
};
export function depsInjector(arg1, arg2) {
    return (Component) => {
        const InjectComponent = observer(Component);
        if (typeof arg1 === 'function' && arg1.constructor !== Object) {
            const vModel = arg1;
            const selectors = arg2;
            return (properties) => {
                const props = useObservableSource(properties);
                const model = useMemo(() => {
                    return selectors ? new vModel(props, selectors) : new vModel(props);
                }, [props]);
                return _jsx(InjectComponent, Object.assign({ model, props }, (selectors ? { selectors } : {})));
            };
        }
        const selectors = arg1;
        return (properties) => {
            const props = useObservableSource(properties);
            return _jsx(InjectComponent, { props, selectors });
        };
    };
}
