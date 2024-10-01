export interface BuildPaths {
    entry: string,
    html: string,
    output: string,
    src: string,
}

export type BundlerMode = "production" | "development"

export interface BuildOptions {
    port: number,
    paths: BuildPaths,
    mode: BundlerMode,
}