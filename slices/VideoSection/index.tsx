import * as React from "react"
import { SliceComponentProps } from "@prismicio/react"
import VideoSection from "@/app/components/VideoSection"
import * as prismic from "@prismicio/client"

export type VideoSectionSlice = prismic.Content.VideoSectionSlice

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
