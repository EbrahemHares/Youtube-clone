import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import ReactPlayer from 'react-player'
import {Videos} from './'
const VideoDetail = () => {
  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]));

    FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))  }, [id])
  if(!videoDetail?.snippet) return "loading...";
  
  const {snippet: { title, channelId, channelTitle }, statistics: {viewCount, likeCount}} = videoDetail;
  
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'90px'}}>
            <ReactPlayer  className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls />
            <Typography color="#fff" variant='h5' p={2} fontWeight='bold'>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:'#fff'}} px={2} py={1}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md:'h6'}} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px', ml:'5px', color:'gray'}} />
                </Typography>
              </Link>
              <Stack direction="row" gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity:'0.7'}}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant='body1' sx={{opacity:'0.7'}}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail