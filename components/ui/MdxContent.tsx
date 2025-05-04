'use client';

import { getMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';

interface Props {
    code: string;
}

const MDXContent = ({ code }: Props) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code]);
    return (
        <div className='prose dark:prose-dark min-w-full'>
            <Component />
        </div>
    );
}

export default MDXContent
