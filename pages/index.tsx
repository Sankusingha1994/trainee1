import Wrapper from '@/layout/wrapper/wrapper'
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Root } from 'react-dom/client';
import axiosinstance from '@/api/axiosinstance';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fetchAboutUs } from '@/api/function/functions';
import Link from 'next/link';
// import { dark } from '@mui/material/styles/createPalette';


const theme = createTheme({
  palette: {
    primary: {
      main: "#B2ABAB"
    }
  }
})

const retrievePosts = async () => {

  interface Root {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
  }

  interface Rating {
    rate: number
    count: number
  }


  const response = await axios.get("");
  return response.data;
};

const index = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["postsData"],
    queryFn: () => fetchAboutUs()
  });

  console.log(data);


  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred:</div>;


  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container>
          <Grid container spacing={3}>
            {
              data?.data?.map((item: Root) =>
                <Grid item md={item.id === 0 || item.id === 1 ? 6 : 4} sx={{ marginTop: "70px" }} key={item.id}>
                  <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>

                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link href={`/${item?.id}`} color="primary">
                        Details
                      </Link>
                    </CardActions>
                  </Card>

                </Grid>


              )
            }
          </Grid>
        </Container>
      </Wrapper>
    </ThemeProvider>
  )
}

export default index



