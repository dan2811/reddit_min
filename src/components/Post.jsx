import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Video } from './VideoPlayer';

export const Post = ({ title, image, url, author, body, media, numComments, videoUrl }) => {

  React.useEffect(() => {console.log(url)}, [])

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" image={url} />
          {videoUrl && <Video videoUrl={videoUrl}/>}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {body}
              {author}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Comments: {numComments}</Button>
            <a href={url}><Button size="small">Learn More</Button></a>
          </CardActions>
        </Card>
      );
}

