// Type definitions for @mechanicalhuman/bunyan-pretty 3.0
// Project: https://github.com/MechanicalHuman/dev-bunyan-pretty
// Definitions by: Emily M Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace bunyanPretty {
    interface Options {
        /**
         * Named level or bunyan/pino level value
         * @default 0
         */
        level?: string | number;
        /**
         * Only show "legal" log lines
         * @default false
         */
        strict?: boolean;

        /**
         * Force color output
         * @default false
         */
        forceColor?: boolean;
        /**
         * Trust the term colors; not the stream ones
         * @default false
         */
        termColors?: boolean;
        /** Based on your terminal (uses supports-color) */
        colorLevel?: number;

        /**
         * Passed to `util.inspect`
         * @default 4
         */
        depth?: 4;
        /**
         * Passed to `util.inspect`
         * @default 100
         */
        maxArrayLength?: 100;

        /**
         * Prepends the host to the log line
         * @default false
         */
        printHost?: boolean;
        /**
         * Print TimeStamps
         * @default true
         */
        timeStamps?: boolean;
        /**
         * TimeStamps format
         * @default 'YYYY-MM-DD-HH:mm:ss'
         */
        stampsFormat?: string;
        /** Based on your Locale */
        stampsTimeZone?: string;
    }
}

/**
 * Wraps the given stream with pretty.
 * @param stream Writable stream to wrap pretty around
 * @param opts Pretty options
 */
declare function bunyanPretty(stream: NodeJS.WritableStream, opts?: bunyanPretty.Options): NodeJS.WritableStream;
export = bunyanPretty;
