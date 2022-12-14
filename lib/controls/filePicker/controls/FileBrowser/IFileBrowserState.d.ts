import { ViewType } from "./FileBrowser.types";
import { IFile } from "../../../../services/FileBrowserService.types";
import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { IFilePickerResult } from "../../FilePicker.types";
export declare enum LoadingState {
    idle = 1,
    loading = 2,
    loadingNextPage = 3
}
export interface IFileBrowserState {
    loadingState: LoadingState;
    items: IFile[];
    nextPageQueryString: string;
    filePickerResults: IFilePickerResult[];
    columns: IColumn[];
    selectedView: ViewType;
}
//# sourceMappingURL=IFileBrowserState.d.ts.map