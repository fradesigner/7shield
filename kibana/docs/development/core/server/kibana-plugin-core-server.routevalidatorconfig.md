<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [RouteValidatorConfig](./kibana-plugin-core-server.routevalidatorconfig.md)

## RouteValidatorConfig interface

The configuration object to the RouteValidator class. Set `params`<!-- -->, `query` and/or `body` to specify the validation logic to follow for that property.

<b>Signature:</b>

```typescript
export interface RouteValidatorConfig<P, Q, B> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [body?](./kibana-plugin-core-server.routevalidatorconfig.body.md) | RouteValidationSpec&lt;B&gt; | <i>(Optional)</i> Validation logic for the body payload |
|  [params?](./kibana-plugin-core-server.routevalidatorconfig.params.md) | RouteValidationSpec&lt;P&gt; | <i>(Optional)</i> Validation logic for the URL params |
|  [query?](./kibana-plugin-core-server.routevalidatorconfig.query.md) | RouteValidationSpec&lt;Q&gt; | <i>(Optional)</i> Validation logic for the Query params |
