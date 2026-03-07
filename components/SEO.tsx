import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AUTHOR_NAME } from '../constants';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = "A devoted history teacher and author whose life is guided by his passion for serving Jesus and helping others.",
    image = "/images/new.jpeg",
    url = "https://daniel-blood-author.vercel.app"
}) => {
    const fullTitle = title ? `${title} | ${AUTHOR_NAME}` : `${AUTHOR_NAME} | Author`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* OpenGraph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
