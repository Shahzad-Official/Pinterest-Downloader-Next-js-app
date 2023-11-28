export interface DataModel {
    title: string
    video: string
    thumbnail: Thumbnail
  }
  
  export interface Thumbnail {
    url: string
    dominantColor: any
    height: number
    type: any
    width: number
  }
  