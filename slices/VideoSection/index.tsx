import * as React from "react"
import { Content } from "@prismicio/react"
import { SliceComponentProps } from "@prismicio/react"
import VideoSection from "@/app/components/VideoSection"
import * as prismic from "@prismicio/client"

export type VideoSectionSlice = Content.VideoSectionSliceSlice

export default function VideoSectionSliceComponent({
  slice,
}: SliceComponentProps<VideoSectionSlice>) {
  const videoUrl = prismic.asLink(slice.primary.url_video) || undefined

  return (
    <VideoSection
      videoUrl={videoUrl}
      title="Video"
    />
  )
}
