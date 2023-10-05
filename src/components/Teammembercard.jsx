import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import person from '../images/accountimage.png'

const TeamMemberCard = (props) => {
  return (
    <Card variant="outlined">
      <CardContent style={{ textAlign: 'center' }}>
        <Avatar alt="nam" src={person} sx={{ width: 50, height: 50, margin: '0 auto' }} />
        <Typography variant="h6" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {props.title}
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="body2">
          {props.bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
