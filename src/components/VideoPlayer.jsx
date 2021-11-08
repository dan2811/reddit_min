
import ReactPlayer from 'react-player'


export function Video(media) {
    if(media !== null) {
        if(media.url.reddit_video) {
        console.log(media.url.reddit_video)
        }
        return <ReactPlayer url={media.url.reddit_video} />
    } else {
        return ""
    }

}