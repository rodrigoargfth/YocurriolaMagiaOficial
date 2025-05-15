"use client";

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface PostCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;  // Agregamos className como prop opcional
  onReadMore: () => void;
}

export default function PostCard({ title, description, image, onReadMore }: PostCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        width: 400,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 3,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(220, 197, 179, 0.75)',
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: 200,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          component="div"
          color="#6E5F57"
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1.1rem',
              md: '1.25rem',
            },
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
        <Typography
          color="#6E5F57"
          sx={{
            whiteSpace: 'pre-line',
            fontSize: {
              xs: '0.85rem',
              sm: '0.9rem',
              md: '1rem',
            },
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
        <Button
          size="small"
          onClick={onReadMore}
          sx={{
            color: '#6E5F57',
            border: '1px solid #6E5F57',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            fontSize: {
              xs: '0.75rem',
              sm: '0.85rem',
              md: '0.9rem',
            },
            '&:hover': {
              backgroundColor: '#A17C6B',
              color: 'white',
            },
          }}
        >
          {isMobile ? 'INFO' : 'LEER MÁS'}
        </Button>
        <Button
          size="small"
          sx={{
            color: '#6E5F57',
            border: '1px solid #6E5F57',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 500,
            fontSize: {
              xs: '0.75rem',
              sm: '0.85rem',
              md: '0.9rem',
            },
            '&:hover': {
              backgroundColor: '#A17C6B',
              color: 'white',
            },
          }}
        >
          AGENDAR
        </Button>
      </CardActions>
    </Card>
  );
}
// "use client";

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function PostCard({ title, description, image, onReadMore }) {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Card
//       sx={{
//         width: 400,
//         height: 400,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         borderRadius: 3,
//         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//         overflow: 'hidden',
//         backdropFilter: 'blur(4px)',
//         backgroundColor: 'rgba(220, 197, 179, 0.75)',
//       }}
//     >
//       <CardMedia
//         component="div"
//         sx={{
//           height: 200,
//           backgroundImage: `url(${image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography
//           gutterBottom
//           component="div"
//           color="#6E5F57"
//           sx={{
//             fontSize: {
//               xs: '1rem',
//               sm: '1.1rem',
//               md: '1.25rem',
//             },
//             fontWeight: 'bold',
//           }}
//         >
//           {title}
//         </Typography>
//         <Typography
//           color="#6E5F57"
//           sx={{
//             whiteSpace: 'pre-line',
//             fontSize: {
//               xs: '0.85rem',
//               sm: '0.9rem',
//               md: '1rem',
//             },
//           }}
//         >
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
//         <Button
//           size="small"
//           onClick={onReadMore}
//           sx={{
//             color: '#6E5F57',
//             border: '1px solid #6E5F57',
//             borderRadius: 2,
//             textTransform: 'none',
//             fontWeight: 600,
//             fontSize: {
//               xs: '0.75rem',
//               sm: '0.85rem',
//               md: '0.9rem',
//             },
//             '&:hover': {
//               backgroundColor: '#A17C6B',
//               color: 'white',
//             },
//           }}
//         >
//           {isMobile ? 'INFO' : 'LEER MÁS'}
//         </Button>
//         <Button
//           size="small"
//           sx={{
//             color: '#6E5F57',
//             border: '1px solid #6E5F57',
//             borderRadius: 2,
//             textTransform: 'none',
//             fontWeight: 500,
//             fontSize: {
//               xs: '0.75rem',
//               sm: '0.85rem',
//               md: '0.9rem',
//             },
//             '&:hover': {
//               backgroundColor: '#A17C6B',
//               color: 'white',
//             },
//           }}
//         >
//           AGENDAR
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
