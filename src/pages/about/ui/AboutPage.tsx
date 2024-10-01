const checkBool = (arg: boolean) => {
    return arg ? 1 : 0
}

export const AboutPage = () => {

    if (__ISDEV) {
        return <div>DEVMODE</div>
    }

    return ( 
        <div>
            This is AboutPage
        </div>
    );
}