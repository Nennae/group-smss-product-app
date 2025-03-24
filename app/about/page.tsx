import type { Metadata } from "next";
import Image from "next/image";
import freestocks_3Q3tsJ01nc_unsplash from "@/public/images/freestocks_3Q3tsJ01nc_unsplash.jpg"

export const metadata: Metadata = {
    title: "About SMSS",
    description: "lorem...",
};

export default function AboutPage() {
    return (
        <main
            className="
            w-[100vw] max-w-sm md:max-w-5xl mx-auto py-[4.2rem]
            grid gap-10 
            md:grid-cols-12 md:grid-rows-[auto_1fr]
            ">
            <section>
                <h2 className="text-[3.375rem] font-semibold">Our Story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, non error sapiente quasi voluptate, obcaecati omnis ab cum corporis pariatur, deleniti sed maxime amet aperiam hic? Quae porro sapiente fuga. Voluptatem aliquid dolor nulla quasi. Deserunt ducimus modi asperiores omnis culpa neque vitae. Assumenda, eaque. Ea cum sed optio tenetur neque. Laboriosam.</p>
                <p>Praesentium illum commodi debitis iusto ad repudiandae est, ex sint laboriosam veniam ea, ratione vero inventore at itaque autem tempora impedit soluta!</p>
            </section>

            <div
                className="
                w-full h-full md:max-w-lg md:justify-self-end
                md:col-[6/-1] md:row-span-full 
                ">
                <Image
                    className="
                        row-span-full col-span-full
                        object-cover aspect-square w-full h-auto"
                    src={freestocks_3Q3tsJ01nc_unsplash}
                    alt="Woman holding shopping bags"
                    placeholder="blur"
                    priority
                />
            </div>
        </main>
    )
}