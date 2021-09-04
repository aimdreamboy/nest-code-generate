export declare enum Options {
    entity = "entity",
    tier = "tier",
    curd = "curd"
}
export declare type OptionsKey = {
    [k in Options]?: boolean;
};
export interface RowDataPacket {
    Field: string;
    Type: string;
    Collation: string | null | undefined;
    Null: 'YES' | 'NO';
    Key: string;
    Default: string | number | null;
    Extra: string;
    Privileges: string;
    Comment: string;
}
export declare enum ColumnType {
    int = "int",
    decimal = "decimal",
    date = "date",
    datetime = "datetime",
    timestamp = "timestamp",
    time = "time",
    year = "year",
    char = "char",
    varchar = "varchar",
    text = "text",
    tinytext = "tinytext",
    mediumtext = "mediumtext",
    blob = "blob",
    longtext = "longtext",
    tinyblob = "tinyblob",
    mediumblob = "mediumblob",
    longblob = "longblob",
    json = "json",
    binary = "binary",
    geometry = "geometry",
    point = "point",
    linestring = "linestring",
    polygon = "polygon",
    multipoint = "multipoint",
    multilinestring = "multilinestring",
    multipolygon = "multipolygon",
    tinyint = "tinyint",
    smallint = "smallint",
    mediumint = "mediumint",
    bigint = "bigint",
    float = "float",
    double = "double",
    enum = "enum",
    geomcollection = "geomcollection"
}
export interface Column {
    type: ColumnType;
    name: string;
    length: number;
    nullable: boolean;
    update: boolean;
    default: string | number;
    primary: boolean;
    unique: boolean;
    comment: string;
    precision: number;
    scale: number;
    charset: string;
    collation: string;
    enum: string[] | any;
}
export declare const HAS_LENGTH: string[];
export declare const HAS_PRECISION: string[];
export declare const HAS_SCALE: string[];
export declare const JSTYPEMAP: {
    [k in ColumnType]: string | any[] | Object;
};
export declare const RULES: {
    [t in ColumnType]: RegExp;
};
export declare type RowMap = {
    [k in string]: RowDataPacket[];
};
export declare type ColumnMap = {
    [k in string]: Column[];
};
export declare type MinxinProp = {
    jsType: any;
    primaryGeneratedColumn: boolean;
    isIndex: boolean;
};