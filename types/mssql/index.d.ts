// Type definitions for mssql 4.0.5
// Project: https://www.npmjs.com/package/mssql
// Definitions by: COLSA Corporation <http://www.colsa.com/>, Ben Farr <https://github.com/jaminfarr>, Vitor Buzinaro <https://github.com/buzinas>, Matt Richardson <https://github.com/mrrichar>, Jørgen Elgaard Larsen <https://github.com/elhaard>, Peter Keuter <https://github.com/pkeuter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import events = require('events');
export interface ISqlType {
    type: ISqlTypeFactory;
}
export interface ISqlTypeWithNoParams extends ISqlType { type: ISqlTypeFactoryWithNoParams }
export interface ISqlTypeWithLength extends ISqlType { type: ISqlTypeFactoryWithLength; length: number }
export interface ISqlTypeWithScale extends ISqlType { type: ISqlTypeFactoryWithScale; scale: number }
export interface ISqlTypeWithPrecisionScale extends ISqlType { type: ISqlTypeFactoryWithPrecisionScale; precision: number, scale: number }
export interface ISqlTypeWithTvpType extends ISqlType { type: ISqlTypeFactoryWithTvpType; tvpType: any }

export interface ISqlTypeFactory {
}
export interface ISqlTypeFactoryWithNoParams extends ISqlTypeFactory { (): ISqlTypeWithNoParams; }
export interface ISqlTypeFactoryWithLength extends ISqlTypeFactory { (length?: number): ISqlTypeWithLength }
export interface ISqlTypeFactoryWithScale extends ISqlTypeFactory { (scale?: number): ISqlTypeWithScale }
export interface ISqlTypeFactoryWithPrecisionScale extends ISqlTypeFactory { (precision?: number, scale?: number): ISqlTypeWithPrecisionScale; }
export interface ISqlTypeFactoryWithTvpType extends ISqlTypeFactory { (tvpType: any): ISqlTypeWithTvpType }


export declare var VarChar: ISqlTypeFactoryWithLength;
export declare var NVarChar: ISqlTypeFactoryWithLength;
export declare var Text: ISqlTypeFactoryWithNoParams;
export declare var Int: ISqlTypeFactoryWithNoParams;
export declare var BigInt: ISqlTypeFactoryWithNoParams;
export declare var TinyInt: ISqlTypeFactoryWithNoParams;
export declare var SmallInt: ISqlTypeFactoryWithNoParams;
export declare var Bit: ISqlTypeFactoryWithNoParams;
export declare var Float: ISqlTypeFactoryWithNoParams;
export declare var Numeric: ISqlTypeFactoryWithPrecisionScale;
export declare var Decimal: ISqlTypeFactoryWithPrecisionScale;
export declare var Real: ISqlTypeFactoryWithNoParams;
export declare var Date: ISqlTypeFactoryWithNoParams;
export declare var DateTime: ISqlTypeFactoryWithNoParams;
export declare var DateTime2: ISqlTypeFactoryWithScale;
export declare var DateTimeOffset: ISqlTypeFactoryWithScale;
export declare var SmallDateTime: ISqlTypeFactoryWithNoParams;
export declare var Time: ISqlTypeFactoryWithScale;
export declare var UniqueIdentifier: ISqlTypeFactoryWithNoParams;
export declare var SmallMoney: ISqlTypeFactoryWithNoParams;
export declare var Money: ISqlTypeFactoryWithNoParams;
export declare var Binary: ISqlTypeFactoryWithNoParams;
export declare var VarBinary: ISqlTypeFactoryWithLength;
export declare var Image: ISqlTypeFactoryWithNoParams;
export declare var Xml: ISqlTypeFactoryWithNoParams;
export declare var Char: ISqlTypeFactoryWithLength;
export declare var NChar: ISqlTypeFactoryWithLength;
export declare var NText: ISqlTypeFactoryWithNoParams;
export declare var TVP: ISqlTypeFactoryWithTvpType;
export declare var UDT: ISqlTypeFactoryWithNoParams;
export declare var Geography: ISqlTypeFactoryWithNoParams;
export declare var Geometry: ISqlTypeFactoryWithNoParams;
export declare var Variant: ISqlTypeFactoryWithNoParams;

export declare var TYPES: {
    VarChar: ISqlTypeFactoryWithLength;
    NVarChar: ISqlTypeFactoryWithLength;
    Text: ISqlTypeFactoryWithNoParams;
    Int: ISqlTypeFactoryWithNoParams;
    BigInt: ISqlTypeFactoryWithNoParams;
    TinyInt: ISqlTypeFactoryWithNoParams;
    SmallInt: ISqlTypeFactoryWithNoParams;
    Bit: ISqlTypeFactoryWithNoParams;
    Float: ISqlTypeFactoryWithNoParams;
    Numeric: ISqlTypeFactoryWithPrecisionScale;
    Decimal: ISqlTypeFactoryWithPrecisionScale;
    Real: ISqlTypeFactoryWithNoParams;
    Date: ISqlTypeFactoryWithNoParams;
    DateTime: ISqlTypeFactoryWithNoParams;
    DateTime2: ISqlTypeFactoryWithScale;
    DateTimeOffset: ISqlTypeFactoryWithScale;
    SmallDateTime: ISqlTypeFactoryWithNoParams;
    Time: ISqlTypeFactoryWithScale;
    UniqueIdentifier: ISqlTypeFactoryWithNoParams;
    SmallMoney: ISqlTypeFactoryWithNoParams;
    Money: ISqlTypeFactoryWithNoParams;
    Binary: ISqlTypeFactoryWithNoParams;
    VarBinary: ISqlTypeFactoryWithLength;
    Image: ISqlTypeFactoryWithNoParams;
    Xml: ISqlTypeFactoryWithNoParams;
    Char: ISqlTypeFactoryWithLength;
    NChar: ISqlTypeFactoryWithLength;
    NText: ISqlTypeFactoryWithNoParams;
    TVP: ISqlTypeFactoryWithTvpType;
    UDT: ISqlTypeFactoryWithNoParams;
    Geography: ISqlTypeFactoryWithNoParams;
    Geometry: ISqlTypeFactoryWithNoParams;
    Variant: ISqlTypeFactoryWithNoParams;
};

export declare var MAX: number;
export declare var fix: boolean;
export declare var Promise: any;

interface IMap extends Array<{ js: any, sql: any }> {
    register(jstype: any, sql: any): void;
}

export declare var map: IMap;

export function getTypeByValue(value: any): ISqlTypeFactory

export interface ISingleColumnMetadata {
    index: number;
    name: string;
    length: number;
    type: (() => ISqlType) | ISqlType;
    udt?: any;
}
export interface IColumnMetadata {
    [name: string]: ISingleColumnMetadata
}
export interface IResult<T> {
    recordsets: IRecordSet<T>[];
    recordset: IRecordSet<T>;
    rowsAffected: number[],
    output: { [key: string]: any };
}
export interface IProcedureResult<T> extends IResult<T> {
    returnValue: any;
}
export interface IRecordSet<T> extends Array<T> {
    columns: IColumnMetadata;
    toTable(): Table;
}

type IIsolationLevel = number;

export declare var ISOLATION_LEVEL: {
    READ_UNCOMMITTED: IIsolationLevel
    READ_COMMITTED: IIsolationLevel
    REPEATABLE_READ: IIsolationLevel
    SERIALIZABLE: IIsolationLevel
    SNAPSHOT: IIsolationLevel
}

export interface IOptions {
    encrypt?: boolean;
    instanceName?: string;
    useUTC?: boolean;
    tdsVersion?: string;
    appName?: string;
    abortTransactionOnError?: boolean;
    trustedConnection?: boolean;
}

export interface IPool {
    min?: number;
    max?: number;
    idleTimeoutMillis?: number;
    maxWaitingClients?: number;
    testOnBorrow?: boolean;
    acquireTimeoutMillis?: number;
    fifo?: boolean;
    priorityRange?: number;
    autostart?: boolean;
    evictionRunIntervalMillis?: number;
    numTestsPerRun?: number;
    softIdleTimeoutMillis?: number;
    Promise?: any;
}

export declare var pool: IPool;

export interface config {
    driver?: string;
    user?: string;
    password?: string;
    server: string;
    port?: number;
    domain?: string;
    database: string;
    connectionTimeout?: number;
    requestTimeout?: number;
    stream?: boolean;
    parseJSON?: boolean;
    options?: IOptions;
    pool?: IPool;
}

export type ConnectionErrorListener = (err: ConnectionError) => void

export declare class ConnectionPool extends events.EventEmitter {
    public connected: boolean;
    public connecting: boolean;
    public driver: string;
    public constructor(config: config, callback?: (err?: any) => void);
    public constructor(connectionString: string, callback?: (err?: any) => void);
    public query(strings: TemplateStringsArray, ...interpolations: any[]): Promise<IResult<any>>;
    public connect(): Promise<this>;
    public connect(callback: (err: any) => void): this;
    public close(): Promise<this>;
    public close(callback: (err: any) => void): this;
    public request(): Request;

    addListener(event: "error", listener: ConnectionErrorListener): this;
    on(event: "error", listener: ConnectionErrorListener): this;
    once(event: "error", listener: ConnectionErrorListener): this;
    prependListener(event: "error", listener: ConnectionErrorListener): this;
    prependOnceListener(event: "error", listener: ConnectionErrorListener): this;
    listeners(event: "error"): ConnectionErrorListener[];
}

export declare class ConnectionError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}

export interface IColumnOptions {
    nullable?: boolean;
    primary?: boolean;
}

export interface IColumn extends ISqlType {
    name: string;
    nullable: boolean;
    primary: boolean;
}

declare class columns extends Array {
    public add(name: string, type: (() => ISqlType) | ISqlType, options?: IColumnOptions): number;
}

type IReturnValue = string | number | boolean | Date | Buffer | undefined
type IRow = IReturnValue[];

declare interface rows extends Array<any> {
    add(...row: IRow): number;
}

export declare class Table {
    public create: boolean;
    public columns: columns;
    public rows: rows;
    public constructor(tableName?: string);
}

interface IRequestParameters {
    [name: string]: {
        name: string;
        type: (() => ISqlType) | ISqlType;
        io: number;
        value: any;
        length: number;
        scale: number;
        precision: number;
        tvpType: any;
    }
}

export type RequestErrorListener = (err: RequestError) => void
export type ColumnMetadataListener = (columns: IColumnMetadata) => void
export interface IColumnNamesRow {
    [column: string]: IReturnValue
}
export type RowListener = (rows: IRow | IColumnNamesRow) => void
export interface DoneResult {
    rowsAffected: number[]
    output?: { [key: string]: any }
    returnValue?: any
}
export type DoneListener = (returnValue: DoneResult) => void

export declare class Request extends events.EventEmitter {
    public transaction: Transaction;
    public pstatement: PreparedStatement;
    public parameters: IRequestParameters;
    public verbose: boolean;
    public canceled: boolean;
    public multiple: boolean;
    public stream: any;
    public constructor(connection?: ConnectionPool);
    public constructor(transaction: Transaction);
    public constructor(preparedStatement: PreparedStatement);
    public execute(procedure: string): Promise<IProcedureResult<any>>;
    public execute<Entity>(procedure: string): Promise<IProcedureResult<Entity>>;
    public execute<Entity>(procedure: string, callback: (err?: any, recordsets?: IProcedureResult<Entity>, returnValue?: any) => void): void;
    public input(name: string, value: any): Request;
    public input(name: string, type: (() => ISqlType) | ISqlType, value: any): Request;
    public output(name: string, type: (() => ISqlType) | ISqlType, value?: any): Request;
    public pipe(stream: NodeJS.WritableStream): NodeJS.WritableStream;
    public query(command: string): Promise<IResult<any>>;
    public query<Entity>(command: string): Promise<IResult<Entity>>;
    public query<Entity>(command: string, callback: (err?: Error, recordset?: IResult<Entity>) => void): void;
    public batch(batch: string): Promise<IResult<any>>;
    public batch<Entity>(batch: string): Promise<IResult<Entity>>;
    public batch(batch: string, callback: (err?: Error, recordset?: IResult<any>) => void): void;
    public batch<Entity>(batch: string, callback: (err?: any, recordset?: IResult<Entity>) => void): void;
    public bulk(table: Table): Promise<number>;
    public bulk(table: Table, callback: (err: Error, rowCount: any) => void): void;
    public cancel(): void;

    addListener(event: "error", listener: RequestErrorListener): this;
    on(event: "error", listener: RequestErrorListener): this;
    once(event: "error", listener: RequestErrorListener): this;
    prependListener(event: "error", listener: RequestErrorListener): this;
    prependOnceListener(event: "error", listener: RequestErrorListener): this;
    listeners(event: "error"): RequestErrorListener[];

    addListener(event: "recordset", listener: ColumnMetadataListener): this;
    on(event: "recordset", listener: ColumnMetadataListener): this;
    once(event: "recordset", listener: ColumnMetadataListener): this;
    prependListener(event: "recordset", listener: ColumnMetadataListener): this;
    prependOnceListener(event: "recordset", listener: ColumnMetadataListener): this;
    listeners(event: "recordset"): ColumnMetadataListener[];

    addListener(event: "row", listener: RowListener): this;
    on(event: "row", listener: RowListener): this;
    once(event: "row", listener: RowListener): this;
    prependListener(event: "row", listener: RowListener): this;
    prependOnceListener(event: "row", listener: RowListener): this;
    listeners(event: "row"): RowListener[];

    addListener(event: "done", listener: DoneListener): this;
    on(event: "done", listener: DoneListener): this;
    once(event: "done", listener: DoneListener): this;
    prependListener(event: "done", listener: DoneListener): this;
    prependOnceListener(event: "done", listener: DoneListener): this;
    listeners(event: "done"): DoneListener[];
}

export declare class RequestError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}

export declare class Transaction extends events.EventEmitter {
    public isolationLevel: IIsolationLevel;
    public constructor(connection?: ConnectionPool);
    public begin(isolationLevel?: IIsolationLevel): Promise<void>;
    public begin(isolationLevel?: IIsolationLevel, callback?: (err?: any) => void): void;
    public commit(): Promise<void>;
    public commit(callback: (err?: any) => void): void;
    public rollback(): Promise<void>;
    public rollback(callback: (err?: any) => void): void;

    addListener(event: "begin" | "commit" | "rollback", listener: () => void): this;
    on(event: "begin" | "commit" | "rollback", listener: () => void): this;
    once(event: "begin" | "commit" | "rollback", listener: () => void): this;
    prependListener(event: "begin" | "commit" | "rollback", listener: () => void): this;
    prependOnceListener(event: "begin" | "commit" | "rollback", listener: () => void): this;
    listeners(event: "begin" | "commit" | "rollback"): (() => void)[];
}

export declare class TransactionError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}

export declare class PreparedStatement extends events.EventEmitter {
    public transaction: Transaction;
    public prepared: boolean;
    public statement: string;
    public parameters: IRequestParameters;
    public stream: any;
    public constructor(connection?: ConnectionPool);
    public input(name: string, type: (() => ISqlType) | ISqlType): PreparedStatement;
    public output(name: string, type: (() => ISqlType) | ISqlType): PreparedStatement;
    public prepare(statement?: string): Promise<void>;
    public prepare(statement?: string, callback?: (err?: Error) => void): PreparedStatement;
    public execute(values: Object): Promise<void>;
    public execute(values: Object, callback: (err?: Error) => void): Request;
    public unprepare(): Promise<void>;
    public unprepare(callback: (err?: Error) => void): PreparedStatement;
    public on(type: 'error')
}

export declare class PreparedStatementError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}

export declare function connect(config: config, callback: (err: any) => void): ConnectionPool;
export declare function connect(config: config): Promise<ConnectionPool>;
export declare function close(callback: (err: any) => void): ConnectionPool;
export declare function close(): Promise<ConnectionPool>;
export declare function on(event: "error", listener: ConnectionErrorListener): ConnectionPool;
export declare function on(event: string | symbol, listener: (...args: any[]) => void): ConnectionPool;
export declare function removeListener(event: string | symbol, listener: (...args: any[]) => void): ConnectionPool;
export declare function removeAllListeners(event?: string | symbol): ConnectionPool;
export declare function query(command: string): Promise<IResult<any>>;
export declare function query<Entity>(command: string): Promise<IResult<Entity>>;
export declare function query<Entity>(command: string, callback: (err?: Error, recordset?: IResult<Entity>) => void): void;
export declare function batch(batch: string): Promise<IResult<any>>;
export declare function batch<Entity>(batch: string): Promise<IResult<Entity>>;
export declare function batch(batch: string, callback: (err?: Error, recordset?: IResult<any>) => void): void;
export declare function batch<Entity>(batch: string, callback: (err?: any, recordset?: IResult<Entity>) => void): void;
