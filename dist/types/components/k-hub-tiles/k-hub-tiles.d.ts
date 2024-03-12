export declare class kHubTiles {
    tilesList: {
        title: string;
        url: string;
    }[];
    tList: string;
    componentWillLoad(): Promise<void>;
    launch(url: any): void;
    render(): any[];
}
