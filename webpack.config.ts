import path from 'path'

import { buildWebpack } from './config/build/buildWebpack'
import { BuildPaths, BundlerMode } from './config/build/types/types'

interface EnvVariables {
    mode: BundlerMode,
    port: number,
}

export default (env: EnvVariables) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "app", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    }

    const config = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths: paths
    })
    
    return config
}

