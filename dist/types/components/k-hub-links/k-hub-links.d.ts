export declare class kHubLinks {
    linksList: {
        title: string;
        url: string;
    }[];
    lList: string;
    componentWillLoad(): Promise<void>;
    launch(url: any): void;
    render(): any[];
}
