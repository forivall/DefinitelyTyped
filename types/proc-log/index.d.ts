// Type definitions for proc-log 3.0
// Project: https://github.com/npm/proc-log#readme
// Definitions by: Emily M Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export type LogLevel = 'error' | 'warn' | 'notice' | 'http' | 'info' | 'verbose' | 'silly' | 'pause' | 'resume';

/** The highest log level.  For printing extremely serious errors that indicate something went wrong. */
export function error(...args: any[]): void;
/**
 * A fairly high log level.  Things that the user needs to be aware of,
 * but which won't necessarily cause improper functioning of the system.
 */
export function notice(...args: any[]): void;
/** Notices which are important, but not necessarily dangerous or a cause for excess concern. */
export function warn(...args: any[]): void;
/** Informative messages that may benefit the user, but aren't particularly important. */
export function info(...args: any[]): void;
/** Noisy output that is more detail that most users will care about. */
export function verbose(...args: any[]): void;
/** Extremely noisy excessive logging messages that are typically only useful for debugging.*/
export function silly(...args: any[]): void;

/** Information about HTTP requests made and/or completed. */
export function http(...args: any[]): void;
/** Used to tell the consumer to stop printing messages. */
export function pause(): void;
/** Used to tell the consumer that it is ok to print messages again. */
export function resume(): void;
/** an array of strings of all log method names */
export const LEVELS: readonly LogLevel[];

declare global {
    namespace NodeJS {
        interface Process {
            emit(event: 'log', logLevel: LogLevel, ...args: any[]): boolean;
            addListener(event: 'log', listener: (logLevel: LogLevel, ...args: any[]) => void): this;
            on(event: 'log', listener: (logLevel: LogLevel, ...args: any[]) => void): this;
            once(event: 'log', listener: (logLevel: LogLevel, ...args: any[]) => void): this;
            prependListener(event: 'log', listener: (logLevel: LogLevel, ...args: any[]) => void): this;
            prependOnceListener(event: 'log', listener: (logLevel: LogLevel, ...args: any[]) => void): this;
            listeners(event: 'log'): ((logLevel: LogLevel, ...args: any[]) => void)[];
        }
    }
}
