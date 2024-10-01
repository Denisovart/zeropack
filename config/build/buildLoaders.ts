import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders({ mode }: BuildOptions): ModuleOptions['rules'] {

    const isDev = mode === "development"

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
                namedExport: false,
                exportLocalsConvention: 'as-is',
            },
        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          cssLoaderWithModules,
          "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            { 
                loader: '@svgr/webpack', 
                options: { 
                    icon: true, // TO-DO: inline-color
                }
            }
        ],
    }

    return [
        scssLoader,
        tsLoader,
        assetLoader,
        svgrLoader
    ]
}