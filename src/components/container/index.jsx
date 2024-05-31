import React, { Fragment } from 'react'


export default function Container({
    className, children, ...props
}) {
    className = `container ${className}`
    return (
        <Fragment>
            <div className={className} {...props}>
                {children}
            </div>
        </Fragment>
    )
}
