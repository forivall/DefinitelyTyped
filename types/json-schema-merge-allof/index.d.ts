// Type definitions for json-schema-merge-allof 0.6
// Project: https://github.com/mokkabonna/json-schema-merge-allof#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { JSONSchema4, JSONSchema6, JSONSchema7 } from 'json-schema';

export = merger;

type JSONSchema = JSONSchema4 | JSONSchema6 | JSONSchema7;

declare function merger(rootSchema: JSONSchema4, options?: merger.Options<JSONSchema4>): JSONSchema4;
declare function merger(rootSchema: JSONSchema6, options?: merger.Options<JSONSchema6>): JSONSchema6;
declare function merger(rootSchema: JSONSchema7, options?: merger.Options<JSONSchema7>): JSONSchema7;
declare function merger(rootSchema: JSONSchema, options?: merger.Options): JSONSchema;

declare namespace merger {
    interface Options<Schema extends JSONSchema = JSONSchema> {
        ignoreAdditionalProperties?: boolean;
        resolvers?: Partial<Resolvers<Schema>> & {
            defaultResolver?(
                values: ReadonlyArray<unknown>,
                path: string[],
                mergeSchemas: MergeSchemas,
                options: Options,
            ): any;
        };
    }
    interface MergeSchemas {
        (schemas: JSONSchema4[]): JSONSchema4;
        (schemas: JSONSchema6[]): JSONSchema6;
        (schemas: JSONSchema7[]): JSONSchema7;
        (schemas: JSONSchema[]): JSONSchema;
    }
    type BasicResolvers<Schema extends JSONSchema> = {
        [K in
            | '$id'
            | '$ref'
            | '$schema'
            | 'additionalItems'
            | 'additionalProperties'
            | 'anyOf'
            | 'contains'
            | 'default'
            | 'definitions'
            | 'dependencies'
            | 'description'
            | 'enum'
            | 'examples'
            | 'exclusiveMaximum'
            | 'exclusiveMinimum'
            | 'items'
            | 'maxItems'
            | 'maxLength'
            | 'maxProperties'
            | 'maximum'
            | 'minItems'
            | 'minLength'
            | 'minProperties'
            | 'minimum'
            | 'multipleOf'
            | 'not'
            | 'oneOf'
            | 'pattern'
            | 'properties'
            | 'propertyNames'
            | 'required'
            | 'title'
            | 'type'
            | 'uniqueItems']: (
            values: ReadonlyArray<Schema[K]>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options,
        ) => Schema[K];
    };
    interface Resolvers<Schema extends JSONSchema = JSONSchema> extends BasicResolvers<Schema> {
        (
            values: Schema[],
            path: string[],
            mergers: {
                properties(schemas: Schema[], childSchemaName: string): Schema;
                patternProperties(schemas: Schema[], childSchemaName: string): Schema;
                additionalProperties(schemas: Schema[]): Schema;
            },
            options: Options,
        ): Schema;
    }
    const options: {
        resolvers: Resolvers;
    };
}
