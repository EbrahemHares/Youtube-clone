import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { ChannelCard, Videos } from "./"
import { FetchFromAPI } from "../utils/FetchFromAPI"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => { 
    FetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]) )

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items) )
  }, [id])
  console.log(channelDetail)
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(57,19,144,1) 36%, rgba(0,255,249,1) 100%)", zIndex: 10 , height:'300px' 
}}  />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: {sm: '100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail