import { FrameworkConfiguration } from "aurelia-framework";
export declare function configure(config: FrameworkConfiguration): void;
declare const _default: {
    featureOne: {
        actions: {
            featureOne: {
                (payload: {
                    name: string;
                    order: number;
                }, meta?: {
                    [key: string]: any;
                }): import("typescript-fsa").Action<{
                    name: string;
                    order: number;
                }>;
                type: string;
                match: (action: import("typescript-fsa").AnyAction) => action is import("typescript-fsa").Action<{
                    name: string;
                    order: number;
                }>;
            };
        };
        path: string;
    };
};
export default _default;
