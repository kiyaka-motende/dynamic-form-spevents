import { IDimensions } from "./IOneDriveService";
export interface IFile {
    name: string;
    absoluteUrl: string;
    serverRelativeUrl: string;
    isFolder: boolean;
    modified: string;
    modifiedDate: Date;
    modifiedBy?: string;
    fileIcon: string;
    fileType: string;
    fileSize?: number;
    totalFileCount?: number;
    isShared?: boolean;
    dimensions?: IDimensions;
    thumbnail?: string;
    key?: string;
    spItemUrl: string;
    supportsThumbnail: boolean;
}
export interface IFolder extends Pick<IFile, "name" | "absoluteUrl" | "serverRelativeUrl"> {
}
export interface ILibrary {
    title: string;
    absoluteUrl: string;
    serverRelativeUrl: string;
    webRelativeUrl?: string;
    iconPath?: string;
}
export interface FilesQueryResult {
    nextHref: string;
    items: IFile[];
}
//# sourceMappingURL=FileBrowserService.types.d.ts.map