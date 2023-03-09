'use client';

import CardMarket from '@/components/market/CardMarket';
import { historiesFilter } from '@/constants/history';
import { Grid, Pagination, TextField, Typography } from '@mui/material';
import { Suspense, useState, useEffect } from 'react';
import styles from './history.module.scss';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { ICard } from '@/interfaces/card';
import { numberPerPage } from '@/constants/pagination';
import Loading from '@/components/loading/Loading';
import { useDebounce } from '@/utils/useDebounce';
import { api } from '@/constants/test';

// current page : 1
// total page : 5
// total arrs : 100
// per page : 20

const History = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSearching, setPageSearching] = useState<number>(1);

  const [filterIndex, setFilterIndex] = useState<number>(0);

  const [search, setSearch] = useState<string>('');
  const debouncedValue = useDebounce(search, 1000);

  const { data, error, isLoading } = useSWR(
    'https://63ec999932a08117239df65b.mockapi.io/api/v1/jobs',
    fetcher
  );

  const handleFilterStatus = () => {
    let arrDataF: ICard[] = [];

    if (data) {
      arrDataF = [...(data as ICard[])];
    }

    let newDataFilter: ICard[] | [] = [];

    if (filterIndex === 0) {
      newDataFilter = [...arrDataF];
    } else if (filterIndex === 1) {
      newDataFilter = arrDataF.filter((item, i) => item.status === false);
    } else if (filterIndex === 2) {
      newDataFilter = arrDataF.filter((item, i) => item.status === true);
    }

    if (debouncedValue) {
      // do something
      let arrClone = [...newDataFilter];

      arrClone = arrClone.filter((item) => {
        let name = item.name?.toLowerCase();
        return name?.includes(debouncedValue.toLowerCase());
      });

      newDataFilter = arrClone;

      console.log('newDataFilter : ', newDataFilter);
    }
    // setCurrentDataLength(newDataFilter);

    return newDataFilter;
  };

  const pagination = (arr: ICard[]) => {
    let numbPerPage = numberPerPage;
    let currentPage = debouncedValue ? pageSearching : page;

    let indexFirstCurrentPage = (currentPage - 1) * numbPerPage;
    let indexLastCurrentPage = currentPage * numbPerPage;

    // console.log("pagination : ",arr);

    let newArr = arr.slice(indexFirstCurrentPage, indexLastCurrentPage);

    return newArr;
  };

  const handleCurrentPage = (currentPage: number) => {
    if (debouncedValue) {
      setPageSearching(currentPage);

      // do sonething
    } else {
      setPage(currentPage);
    }
  };

  useEffect(() => {
    handleFilterStatus();

    if (debouncedValue) {
      setPageSearching(1);
    }
    // do something
  }, [debouncedValue]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className={styles.history}>
      <Typography
        variant="h3"
        style={{ color: 'white', textAlign: 'center', marginTop: '2.5rem', fontWeight: '600' }}
      >
        History
      </Typography>

      <div className={styles.history__side__bar_controll}>
        <div className={styles.side__bar_filter}>
          {historiesFilter.map((itemFilter, ind) => (
            <div
              className={
                filterIndex === ind
                  ? `${styles.side__bar_filter_item} ${styles.active}`
                  : `${styles.side__bar_filter_item}`
              }
              key={ind}
              onClick={() => setFilterIndex(ind)}
              data-index={ind}
            >
              {itemFilter}
            </div>
          ))}
        </div>
        <div className="side__bar_input_search">
          <TextField
            id="outlined-multiline-static"
            label="Search Jobs"
            multiline
            rows={1}
            sx={{
              color: 'white',
            }}
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.history__list}>
        <Grid
          container
          // rowSpacing={5}
          // columnSpacing={{ xs: 3, sm: 2, md: 3 }}
          sx={{ width: '100%' }}
        >
          {data instanceof Array &&
            pagination(handleFilterStatus())?.map((item: ICard, ind: number) => (
              <Grid item xs={4} sm={4} md={4} key={ind}>
                <CardMarket item={item} />
              </Grid>
            ))}
        </Grid>
      </div>

      <div className={styles.history__pagination}>
        {handleFilterStatus().length > 0 ? (
          <Pagination
            count={Math.ceil(handleFilterStatus().length / numberPerPage)}
            page={debouncedValue ? pageSearching : page}
            onChange={(e, page) => handleCurrentPage(page)}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default History;
