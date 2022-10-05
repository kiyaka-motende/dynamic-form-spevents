export declare enum EStatus {
    LOADING = 0,
    LOADED = 1,
    ERROR = 2
}
export declare const useMonaco: () => {
    monaco: typeof import("monaco-editor");
    status: EStatus;
    error: Error;
};
//# sourceMappingURL=useMonaco.d.ts.map