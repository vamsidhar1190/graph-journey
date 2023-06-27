import { NodeDimension, NodePosition } from "@swimlane/ngx-graph";

export interface JourneySchema {
    contactModel?: string;
    status?: string;
    trigger?: string;
    triggerValue?: any;
    nodes?: Node[] 
}

export interface Node {
    id: string;
    type?: string;
    subtype?: string; //{ send_email: string, send_sms: string, create_reminder: string, add_tag: string, remove_tag: string, update_field :string};
    nextTrue?: any;
    nextFalse?: any;
    action?:Action;
    conditions?:Condition[];
    duration?: number;
    delay?:{},
    date?: Date;
    position?: NodePosition;
    dimension?: NodeDimension;
    transform?: string;
    label?: string;
    color?: string;
    icon?: any;
    data?: any;
    meta?: any;
    disabledYes?:boolean;
    disabledNo?:boolean;
    disabledNode?:boolean;

}
// MergeNode is used for node alignment purpose
export interface MergedNode extends Node {
    // id?: string | undefined;
    label?: string;
    position?: { x: number; y: number };
    x?: number;
    y?: number;
    color?: string;
    icon?: any ;
    // disabledYes?: boolean;
    // disabledNo?: boolean

}

// Condition 
export interface Condition {
    type?:string;
    condition: string;
    comparator?: string;
    value?: any;
}


export interface Action {
    type?:string;
    targetType?: string;
    target?: {};
    field?: string;
    value?: any;
}