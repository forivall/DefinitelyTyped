// Type definitions for json-schema-merge-allof 0.6
// Project: https://github.com/mokkabonna/json-schema-merge-allof#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { JSONSchema4, JSONSchema6, JSONSchema7 } from 'json-schema';

export = merger;

type JSONSchema = JSONSchema4 | JSONSchema6 | JSONSchema7;
type JSONSchema46 = JSONSchema4 | JSONSchema6;

declare function merger<T extends JSONSchema>(rootSchema: T, options: merger.Options<T> & { ignoreAdditionalProperties: true }): T;
declare function merger(rootSchema: JSONSchema4, options?: merger.Options<JSONSchema4>): JSONSchema4;
declare function merger(rootSchema: JSONSchema6, options?: merger.Options<JSONSchema6>): JSONSchema6;
declare function merger(rootSchema: JSONSchema7, options?: merger.Options<JSONSchema7>): JSONSchema7;
declare function merger(rootSchema: JSONSchema46, options?: merger.Options<JSONSchema46>): JSONSchema46;
declare function merger(rootSchema: JSONSchema, options?: merger.Options): JSONSchema;

declare namespace merger {
    interface Options<Schema extends JSONSchema = JSONSchema> {
        /**
         * **ignoreAdditionalProperties** default **false**
         *
         * Allows you to combine schema properties even though some schemas have
         * `additionalProperties: false` This is the most common issue people
         * face when trying to expand schemas using allOf and a limitation of
         * the json schema spec. Be aware though that the schema produced will
         * allow more than the original schema. But this is useful if just want
         * to combine schemas using allOf as if additionalProperties wasn't
         * false during the merge process. The resulting schema will still get
         * additionalProperties set to false.
         */
        ignoreAdditionalProperties?: boolean;
        /**
         * **resolvers** Object
         *
         * Override any default resolver like this:
         *
         * ```js
         * mergeAllOf(schema, {
         *   resolvers: {
         *     title: function(values, path, mergeSchemas, options) {
         *       // choose what title you want to be used based on the conflicting values
         *       // resolvers MUST return a value other than undefined
         *     }
         *   }
         * })
         * ```
         *
         * The function is passed:
         *
         * - **values** an array of the conflicting values that need to be
         *   resolved
         * - **path** an array of strings containing the path to the position in
         *   the schema that caused the resolver to be called (useful if you use
         *   the same resolver for multiple keywords, or want to implement
         *   specific logic for custom paths)
         * - **mergeSchemas** a function you can call that merges an array of
         *   schemas
         * - **options** the options mergeAllOf was called with
         */
        resolvers?: Partial<Resolvers<Schema>> & {
            /**
             * ### Default resolver
             * You can set a default resolver that catches any unknown keyword.
             * Let's say you want to use the same strategy as the ones for the
             * meta keywords, to use the first value found. You can accomplish
             * that like this:
             *
             * ```js
             * mergeJsonSchema({
             *   ...
             * }, {
             *   resolvers: {
             *       defaultResolver: mergeJsonSchema.options.resolvers.title
             *   }
             * })
             * ```
             */
            defaultResolver?(values: any[], path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): any;
        };
    }
    type MergeSchemas = <T extends JSONSchema>(schemas: ReadonlyArray<T>) => T;
    type MergeChildSchemas = <T extends JSONSchema>(schemas: ReadonlyArray<T>, childSchemaName: string | number) => T;

    interface Resolvers<Schema extends JSONSchema = JSONSchema> {
        $id(
            values: Array<NonNullable<Extract<Schema, { $id?: any }>['$id']>>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options<Schema>,
        ): NonNullable<Extract<Schema, { $id?: any }>['$id']>;
        $ref(values: Array<NonNullable<Schema['$ref']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['$ref']>;
        $schema(values: Array<NonNullable<Schema['$schema']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['$schema']>;
        additionalItems(values: Array<NonNullable<Schema['additionalItems']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['additionalItems']>;
        additionalProperties(values: Array<NonNullable<Schema['additionalProperties']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['additionalProperties']>;
        anyOf(values: Array<NonNullable<Schema['anyOf']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['anyOf']>;
        contains(
            values: Array<NonNullable<Extract<Schema, { contains?: any }>['contains']>>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options<Schema>,
        ): NonNullable<Extract<Schema, { contains?: any }>['contains']>;
        default(values: Array<NonNullable<Schema['default']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['default']>;
        definitions(values: Array<NonNullable<Schema['definitions']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['definitions']>;
        dependencies(values: Array<NonNullable<Schema['dependencies']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['dependencies']>;
        description(values: Array<NonNullable<Schema['description']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['description']>;
        enum(values: Array<NonNullable<Schema['enum']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['enum']>;
        examples(
            values: Array<NonNullable<Extract<Schema, { examples?: any }>['examples']>>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options<Schema>,
        ): NonNullable<Extract<Schema, { examples?: any }>['examples']>;
        exclusiveMaximum(values: Array<NonNullable<Schema['exclusiveMaximum']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['exclusiveMaximum']>;
        exclusiveMinimum(values: Array<NonNullable<Schema['exclusiveMinimum']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['exclusiveMinimum']>;
        items(values: Array<NonNullable<Schema['items']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['items']>;
        maxItems(values: Array<NonNullable<Schema['maxItems']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['maxItems']>;
        maxLength(values: Array<NonNullable<Schema['maxLength']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['maxLength']>;
        maxProperties(values: Array<NonNullable<Schema['maxProperties']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['maxProperties']>;
        maximum(values: Array<NonNullable<Schema['maximum']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['maximum']>;
        minItems(values: Array<NonNullable<Schema['minItems']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['minItems']>;
        minLength(values: Array<NonNullable<Schema['minLength']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['minLength']>;
        minProperties(values: Array<NonNullable<Schema['minProperties']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['minProperties']>;
        minimum(values: Array<NonNullable<Schema['minimum']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['minimum']>;
        multipleOf(values: Array<NonNullable<Schema['multipleOf']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['multipleOf']>;
        not(values: Array<NonNullable<Schema['not']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['not']>;
        oneOf(values: Array<NonNullable<Schema['oneOf']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['oneOf']>;
        pattern(values: Array<NonNullable<Schema['pattern']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['pattern']>;
        /**
         * ### Combined resolvers
         * No separate resolver is called for patternProperties and
         * additionalProperties, only the properties resolver is called. Same
         * for additionalItems, only items resolver is called. This is because
         * those keywords need to be resolved together as they affect each
         * other.
         *
         * Those two resolvers are expected to return an object containing the
         * resolved values of all the associated keywords. The keys must be the
         * name of the keywords. So the properties resolver need to return an
         * object like this containing the resolved values for each keyword:
         *
         * ```js
         * {
         *     properties: ...,
         *     patternProperties: ...,
         *     additionalProperties: ...,
         * }
         * ```
         *
         * Also the resolve function is not passed **mergeSchemas**, but an
         * object **mergers** that contains mergers for each of the related
         * keywords. So properties get passed an object like this:
         *
         * ```js
         * var mergers = {
         *     properties: function mergeSchemas(schemas, childSchemaName){...},
         *     patternProperties: function mergeSchemas(schemas, childSchemaName){...},
         *     additionalProperties: function mergeSchemas(schemas){...},
         * }
         * ```
         *
         * Some of the mergers requires you to supply a string of the name or
         * index of the subschema you are currently merging. This is to make
         * sure the path passed to child resolvers are correct.
         */
        properties(
            values: Schema[],
            path: string[],
            mergers: {
                properties: MergeChildSchemas;
                patternProperties: MergeChildSchemas;
                additionalProperties: MergeSchemas;
            },
            options: Options<Schema>,
        ): Pick<Schema, 'properties' | 'patternProperties' | 'additionalProperties'>;
        propertyNames(
            values: Array<NonNullable<Extract<Schema, { propertyNames?: any }>['propertyNames']>>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options<Schema>,
        ): NonNullable<Extract<Schema, { propertyNames?: any }>['propertyNames']>;
        required(
            values: Array<NonNullable<Schema['required']>>,
            path: string[],
            mergeSchemas: MergeSchemas,
            options: Options<Schema>,
        ): NonNullable<Schema['required']>;
        title(values: Array<NonNullable<Schema['title']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['title']>;
        type(values: Array<NonNullable<Schema['type']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['type']>;
        uniqueItems(values: Array<NonNullable<Schema['uniqueItems']>>, path: string[], mergeSchemas: MergeSchemas, options: Options<Schema>): NonNullable<Schema['uniqueItems']>;
    }
    const options: {
        resolvers: Resolvers;
    };
}
