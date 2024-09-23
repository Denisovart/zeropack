import path from 'path'
import type { Configuration } from "webpack"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import HtmlWebpackPlugin from "html-webpack-plugin"

type Mode = "production" | "development"

interface EnvVariables {
    mode: Mode,
    port: number,
}

export default (env: EnvVariables) => {

    const isDev = env.mode === "development"

    const config: Configuration = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.ts"),
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
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
        ],
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true,
        } : undefined,
        devtool: isDev ? 'inline-source-map' : false
    }
    
    return config
}

