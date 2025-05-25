'use client';

import { getMDXComponent } from 'next-contentlayer/hooks';
import { useMemo } from 'react';

interface Props {
    code: string;
}

const MDXContent = ({ code }: Props) => {
    const Component = useMemo(() => getMDXComponent(code), [code]);
    return (
        <div className='prose dark:prose-dark min-w-full'>
            <Component />
        </div>
    );
}

export default MDXContent