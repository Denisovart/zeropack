declare module "*.module.scss" {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames
}
declare module "*.svg" {
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default SVG;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"

declare const __ISDEV: boolean