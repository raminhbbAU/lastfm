import  React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const ArtistCard = (info:any,onClickListener:any) => {

    const navigate = useNavigate();

    useEffect( ()=>{
    },[])


    const loadArtistTopTrack = () => {
      navigate(`/panel/artistdetail/${info.info.name}`);
  }

    return (
      <Card sx={{ maxWidth: 345 }} onClick={() => loadArtistTopTrack()}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {info.info.name.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={info.info.name}
          subheader={info.info.listeners + " Listeners"}
        />
        <CardMedia
          component="img"
          height="194"
          src={info.info.image[1]["#text"]}
          alt={info.info.name}
        />
        <CardActions disableSpacing>
      
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
      
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
      
        </CardActions>
      
      </Card>
    );

}

export default ArtistCard;