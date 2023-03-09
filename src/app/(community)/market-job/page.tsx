'use client';

import CardMarket from '@/components/market/CardMarket';
import { Grid, Pagination, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './market.module.scss';

const MarketJob = () => {
  const [page, setPage] = useState<number>(0);

  const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {

    console.log(value);
    
    setPage(value);
  };

  return (
    <div className="market__container">
      <Typography
        variant="h3"
        gutterBottom
        style={{ color: 'white', textAlign: 'center', marginTop: '2.5rem', fontWeight: '600' }}
      >
        Jobs
      </Typography>

      <div className={styles.market__side__bar_controll}>
        <div className={styles.side__bar_filter}>
          <div className={`${styles.side__bar_filter_item} ${styles.active}`}>All</div>
          <div className={styles.side__bar_filter_item}>Active</div>
          <div className={styles.side__bar_filter_item}>Not Starts</div>
          <div className={styles.side__bar_filter_item}>Expired</div>
        </div>
        <div className="side__bar_input_search">
          <TextField
            id="outlined-multiline-static"
            label="Search jobs"
            multiline
            rows={1}
            sx={{
              color: 'white',
            }}
          />
        </div>
      </div>

      <div className={styles.tournament__list}>
        <Grid
          container
          // rowSpacing={5}
          // columnSpacing={{ xs: 3, sm: 2, md: 3 }}
          sx={{ width: '100%' }}
          xs = {3}
        >
          <Grid item xs={4} sm={10}>
            {/* <CardMarket /> */}
          </Grid>
          
        </Grid>
      </div>

      <div className={styles.market__pagination}>
        <Pagination count={5} page={page} onChange={handlePagination}  />
      </div>
    </div>
  );
};

export default MarketJob;
