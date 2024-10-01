import { DefinePlugin, ProgressPlugin, type Configuration } from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin" 

import { BuildOptions } from "./types/types";

export function buildPlugins({ mode, paths }: BuildOptions): Configuration['plugins'] {

    const isDev = mode === "development"
    const isProd = mode === "production"

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ 
            template: paths.html
        }),
        new DefinePlugin({
            __ISDEV: isDev,
        }),
    ]

    if (isDev) {
        plugins.push(
            new ProgressPlugin(),
            new ForkTsCheckerWebpackPlugin() // Параллельная проверка типов, обходя сборку
        )
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css"
            }),
        )
    }

    return plugins
}