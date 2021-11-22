import React, { useState } from 'react'

interface IMeta {
    title: string,
    description: string,
    image: string,
    card: string,
}


export const Head = () => {
    const [metaDetails, setMetaDetails] = useState<IMeta>({
        title: "string",
        description: "string",
        image: "string",
        card: "string",
    })
    return (
        <>
            <meta name="twitter:title" content={metaDetails.title} />
            <meta name="twitter:description" content={metaDetails.description} />
            <meta name="twitter:image" content={metaDetails.image} />
            <meta name="twitter:card" content={metaDetails.card} />
        </>
    )
}
