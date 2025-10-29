# Le Plan
- x Hack around inside this repo directly
- x .graphql to generated TypeScript files (using @graphql-codegen)
- Hack around our internal types to add generics for more type safety using those new table types
- AST crawl of resources to discover their parameters and return types that diverge or restrict default exported table REST
  - Or do I add directives for validation and return type specification? Like Nest allows.
- How do these inform our OpenAPI spec generation?
- Easy SDK generation for REST? With realtime local updates.
- Library-ify these changes (some back to core, others to a new smaller library?)
- Add plausible workflows for deploying to Fabric
