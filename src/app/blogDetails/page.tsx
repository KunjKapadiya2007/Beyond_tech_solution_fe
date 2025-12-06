import React from 'react';
import Blogs from '@/components/blog/Blogs'
import RelatedArticles from "@/components/blog/RelatedArticles";

function Page() {
    return (
        <div>
            <Blogs/>
            <RelatedArticles/>
        </div>
    );
}

export default Page;