// Type definitions for as-table 1.0
// Project: https://github.com/xpl/as-table
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface AsTableConfig<T = any> {
    maxTotalWidth: number;
    dash: string;
    right: boolean;
    print(value: T): string;
    title(value: string): string;
}
interface AsTableFunction<T = any> extends Readonly<AsTableConfig<T>> {
    (rows: T[][]): string;
    (objects: Array<{[column: string]: T | undefined}>): string;
    configure<T = any>(cfg: Partial<AsTableConfig<T>>): AsTableFunction<T>;
}
declare const asTable: AsTableFunction;
declare namespace asTable {
    type Config<T = any> = AsTableConfig<T>;
    type AsTable<T = any> = AsTableFunction<T>;
}
export = asTable;
