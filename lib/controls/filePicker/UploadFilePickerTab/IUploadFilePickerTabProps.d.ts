/// <reference types="react" />
import { IFilePickerResult, IFilePickerTab } from "../FilePicker.types";
export interface IUploadFilePickerTabProps extends IFilePickerTab {
    onChange: (value: IFilePickerResult[]) => void;
    renderCustomUploadTabContent: (filePickerResult: IFilePickerResult) => JSX.Element | null;
}
//# sourceMappingURL=IUploadFilePickerTabProps.d.ts.map