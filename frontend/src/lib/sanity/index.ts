import imageUrlBuilderSanity from "@sanity/image-url";
import { sanityClient } from "sanity:client";

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilderSanity>;
type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

export const isGif = (src: string) => src?.includes("gif");

export const imageUrlFor = (source: ImageSource) =>
  imageUrlBuilderSanity(sanityClient)
    .image(source)
    .width(700)
    .format("webp")
    .url();

export const imageUrlBuilder = (src: string) =>
  imageUrlBuilderSanity(sanityClient).image(src);
