import { ReactNode } from "react";

export default function WrapperTile(props : {children : ReactNode}) {
    const { children } = props;
    return(
                <div className="wrapper-tile border-2 border-amber-50 rounded-4xl">
                    {children}
                </div>
    )

}