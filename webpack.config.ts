import path from 'path'

import type { Configuration } from "webpack"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

import { ProgressPlugin } from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

type Mode = "production" | "development"

interface EnvVariables {
    mode: Mode,
    port: number,
}

export default (env: EnvVariables) => {

    const isDev = env.mode === "development"
    const isProd = env.mode === "production"

    const config: Configuration = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "main.tsx"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                      // Translates CSS into CommonJS
                      "css-loader",
                      // Compiles Sass to CSS
                      "sass-loader",
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({ 
                template: path.resolve(__dirname, "public", "index.html")
            }),
            isProd && new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css"
            }),
            isDev && new ProgressPlugin(),
        ].filter(Boolean),
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true,
        } : undefined,
        devtool: isDev ? 'inline-source-map' : false
    }
    
    return config
}

