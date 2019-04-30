declare const _default: {
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
export default _default;
