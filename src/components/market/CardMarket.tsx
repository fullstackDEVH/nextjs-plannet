'use client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { ICard } from '@/interfaces/card';

interface Props {
  item ?: ICard;
}

export default function CardMarket({ item  } : Props )  {

  return (
    <Link href="/market-job" style={{ display: 'inline-block', marginTop: '24px' }}>
      <Card
        sx={{ maxWidth: 345 }}
        style={{ borderRadius: '12px', padding: '12px', background: '#2c2c2e', color: 'white' }}
      >
        <CardMedia
          component="img"
          alt="img card"
          image={item?.urlJob}
          style={{ borderRadius: '0.5rem', objectFit: 'cover' }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            paddingTop: '0.6rem',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              flex: '1',
              color: 'white',
              marginBottom: '0',
              fontSize: '1.2rem',
              fontWeight: '400',
            }}
            className="line_camp_2"
          >
            {item?.name + " " + item?.id}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: '#f5f5f5',
              color: '#3a3a3c',
              fontSize: '0.8rem',
              borderRadius: '1rem',
              padding: '0.2rem 0.5rem',
            }}
          >
            {item?.status ? "done" : "processing"}
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{ width: '100%', paddingTop: '0.5rem' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flexWrap: 'nowrap',
              justifyContent: 'space-between',
              paddingTop: '0.6rem',
            }}
          >
            <Typography variant="body2">Reward</Typography>
            <Typography variant="body2" style={{ display: 'flex', gap: '0.4rem' }}>
              <CardMedia
                height="18"
                component="img"
                alt="icon para"
                image="https://static.wixdomplanet.io/public/images/wxp/binance-usd-busd-logo.png"
                style={{ objectFit: 'cover' }}
              />
              BUSD
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flexWrap: 'nowrap',
              justifyContent: 'space-between',
              paddingTop: '0.6rem',
            }}
          >
            <Typography variant="body2">Participants</Typography>
            <Typography variant="body2" style={{ display: 'flex', gap: '0.4rem' }}>
              <CardMedia
                height="18"
                component="img"
                alt="icon para"
                image="	https://wixdomplanet.io/images/ic_person.svg"
                sx={{ objectFit: 'cover' }}
              />
              1k1
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flexWrap: 'nowrap',
              justifyContent: 'space-between',
              paddingTop: '0.6rem',
            }}
          >
            <Typography variant="body2">Duration</Typography>
            <Typography variant="body2" style={{ display: 'flex', gap: '0.4rem' }}>
              <CardMedia
                height="18"
                component="img"
                alt="icon para"
                image="	https://wixdomplanet.io/images/ic_time.svg
                "
                style={{ objectFit: 'cover' }}
              />
              {item?.createdAt?.substring(1, 5)}
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexWrap: 'nowrap',
            paddingTop: '0.8rem',
            gap: '0.5rem',
          }}
        >
          <Typography variant="body2" sx={{ display: 'flex', gap: '0.4rem' }}>
            <CardMedia
              height="25"
              component="img"
              alt="icon para"
              image={item?.avatar}
              sx={{ objectFit: 'cover', borderRadius : "50%" }}
            />
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: '600', fontSize: '0.95rem' }}>
            WixdomPlanet
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}
