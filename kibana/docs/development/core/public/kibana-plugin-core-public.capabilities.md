<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-public](./kibana-plugin-core-public.md) &gt; [Capabilities](./kibana-plugin-core-public.capabilities.md)

## Capabilities interface

The read-only set of capabilities available for the current UI session. Capabilities are simple key-value pairs of (string, boolean), where the string denotes the capability ID, and the boolean is a flag indicating if the capability is enabled or disabled.

<b>Signature:</b>

```typescript
export interface Capabilities 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [catalogue](./kibana-plugin-core-public.capabilities.catalogue.md) | Record&lt;string, boolean&gt; | Catalogue capabilities. Catalogue entries drive the visibility of the Kibana homepage options. |
|  [management](./kibana-plugin-core-public.capabilities.management.md) | { \[sectionId: string\]: Record&lt;string, boolean&gt;; } | Management section capabilities. |
|  [navLinks](./kibana-plugin-core-public.capabilities.navlinks.md) | Record&lt;string, boolean&gt; | Navigation link capabilities. |
