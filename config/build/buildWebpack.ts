import type { Configuration } from "webpack"

import { buildDevServer } from "./buildDevServer"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolver } from "./buildResolvers"
import { BuildOptions } from "./types/types"

export function buildWebpack(options: BuildOptions): Configuration {

    const { mode, paths } = options

    const isDev = mode === "development"

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolver(options),
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : false
    }
}