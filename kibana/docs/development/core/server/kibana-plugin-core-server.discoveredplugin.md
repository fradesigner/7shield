<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [DiscoveredPlugin](./kibana-plugin-core-server.discoveredplugin.md)

## DiscoveredPlugin interface

Small container object used to expose information about discovered plugins that may or may not have been started.

<b>Signature:</b>

```typescript
export interface DiscoveredPlugin 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [configPath](./kibana-plugin-core-server.discoveredplugin.configpath.md) | ConfigPath | Root configuration path used by the plugin, defaults to "id" in snake\_case format. |
|  [id](./kibana-plugin-core-server.discoveredplugin.id.md) | PluginName | Identifier of the plugin. |
|  [optionalPlugins](./kibana-plugin-core-server.discoveredplugin.optionalplugins.md) | readonly PluginName\[\] | An optional list of the other plugins that if installed and enabled \*\*may be\*\* leveraged by this plugin for some additional functionality but otherwise are not required for this plugin to work properly. |
|  [requiredBundles](./kibana-plugin-core-server.discoveredplugin.requiredbundles.md) | readonly PluginName\[\] | List of plugin ids that this plugin's UI code imports modules from that are not in <code>requiredPlugins</code>. |
|  [requiredPlugins](./kibana-plugin-core-server.discoveredplugin.requiredplugins.md) | readonly PluginName\[\] | An optional list of the other plugins that \*\*must be\*\* installed and enabled for this plugin to function properly. |
|  [type](./kibana-plugin-core-server.discoveredplugin.type.md) | PluginType | Type of the plugin, defaults to <code>standard</code>. |
