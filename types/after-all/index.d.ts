// Type definitions for after-all 2.0
// Project: https://github.com/sorribas/after-all
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = afterAll;

declare function afterAll(
    afterAllCb: (err?: any) => any
): (cb?: ((...args: any[]) => any)) => ((err?: any, ...args: any[]) => any);
