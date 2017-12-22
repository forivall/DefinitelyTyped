// Type definitions for archiver 2.0
// Project: https://github.com/archiverjs/node-archiver
// Definitions by: Esri <https://github.com/archiverjs/node-archiver>, Dolan Miu <https://github.com/dolanmiu>, Crevil <https://github.com/crevil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as stream from 'stream';
import * as glob from 'glob';
import * as fs from 'fs';
import { ZlibOptions } from 'zlib';

declare function archiver(format: 'json', options?: archiver.CreateOptions): archiver.Archiver;
declare function archiver(format: 'tar', options?: archiver.CreateOptions & archiver.TarOptions): archiver.Archiver;
declare function archiver(format: 'zip', options?: archiver.CreateOptions & archiver.ZipOptions): archiver.Archiver<archiver.ZipEntryData>;
declare function archiver(format: string, options?: archiver. CreateOptions & {[option: string]: any}): archiver.Archiver;

declare namespace archiver {
    type CreateOptions = CoreOptions & TransformOptions;
    function create(format: 'json', options?: CreateOptions): Archiver;
    function create(format: 'tar', options?: CreateOptions & TarOptions): Archiver;
    function create(format: 'zip', options?: CreateOptions & ZipOptions): Archiver<ZipEntryData>;
    function create(format: string, options?: CreateOptions & {[option: string]: any}): Archiver;
    function registerFormat(format: string, module: Function): void;

    interface EntryData {
        name?: string;
        date?: string | Date;
        mode?: number;
        prefix?: string;
        stats?: fs.Stats;
    }

    interface ZipEntryData extends EntryData {
        store?: boolean;
    }

    interface ErrorData extends Error {
        message: string;
        code: string;
        data?: string;
    }

    interface ProgressData {
        entries: {
            total: number;
            processed: number;
        };
        fs: {
            totalBytes: number;
            processedBytes: number;
        };
    }

    /** A function that lets you either opt out of including an entry (by returning false), or modify the contents of an entry as it is added (by returning an EntryData) */
    type EntryDataFunction<E extends EntryData = EntryData> = (entry: E) => false | E;

    type EntryDataListener<E extends EntryData = EntryData> = (entry: E) => void;
    type ProgressDataListener = (entry: ProgressData) => void;
    type ErrorDataListener = (entry: ErrorData) => void;

    interface Archiver<E extends EntryData = EntryData> extends stream.Transform {
        abort(): this;
        append(source: stream.Readable | Buffer | string, name?: E): this;

        /** if false is passed for destpath, the path of a chunk of data in the archive is set to the root */
        directory(dirpath: string, destpath: false | string, data?: E | EntryDataFunction<E>): this;
        file(filename: string, data: E): this;
        glob(pattern: string, options?: glob.IOptions, data?: E): this;
        finalize(): Promise<void>;

        setFormat(format: string): this;
        setModule(module: Function): this;

        pointer(): number;
        use(plugin: Function): this;

        symlink(filepath: string, target: string): this;

        addListener(event: 'entry', listener: EntryDataListener<E>): this;
        addListener(event: 'progress', listener: ProgressDataListener): this;
        addListener(event: 'error' | 'warning', listener: ErrorDataListener): this;
        addListener(event: string, listener: (...args: any[]) => void): this;

        on(event: 'entry', listener: EntryDataListener<E>): this;
        on(event: 'progress', listener: ProgressDataListener): this;
        on(event: 'error' | 'warning', listener: ErrorDataListener): this;
        on(event: string, listener: (...args: any[]) => void): this;

        once(event: 'entry', listener: EntryDataListener<E>): this;
        once(event: 'progress', listener: ProgressDataListener): this;
        once(event: 'error' | 'warning', listener: ErrorDataListener): this;
        once(event: string, listener: (...args: any[]) => void): this;

        prependListener(event: 'entry', listener: EntryDataListener<E>): this;
        prependListener(event: 'progress', listener: ProgressDataListener): this;
        prependListener(event: 'error' | 'warning', listener: ErrorDataListener): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;

        prependOnceListener(event: 'entry', listener: EntryDataListener<E>): this;
        prependOnceListener(event: 'progress', listener: ProgressDataListener): this;
        prependOnceListener(event: 'error' | 'warning', listener: ErrorDataListener): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;

        removeListener(event: 'entry', listener: EntryDataListener<E>): this;
        removeListener(event: 'progress', listener: ProgressDataListener): this;
        removeListener(event: 'error' | 'warning', listener: ErrorDataListener): this;
        removeListener(event: string, listener: (...args: any[]) => void): this;
    }

    /** @deprecated */
    type ArchiverOptions = CoreOptions & TransformOptions & ZipOptions & TarOptions;

    interface CoreOptions {
        statConcurrency?: number;
    }

    interface TransformOptions {
        allowHalfOpen?: boolean;
        readableObjectMode?: boolean;
        writeableObjectMode?: boolean;
        decodeStrings?: boolean;
        encoding?: string;
        highWaterMark?: number;
        objectmode?: boolean;
    }

    interface ZipOptions {
        comment?: string;
        forceLocalTime?: boolean;
        forceZip64?: boolean;
        store?: boolean;
        zlib?: ZlibOptions;
    }

    interface TarOptions {
        gzip?: boolean;
        gzipOptions?: ZlibOptions;
    }
}

export = archiver;
