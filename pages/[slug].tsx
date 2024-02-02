
import { singleProduct } from "@/api/function/functions";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router"
import { useQuery } from "react-query";



const slug =()=>{
    const router = useRouter()
    const {slug}=router.query
    console.log(slug);
    
    
    const { data, error, isLoading } = useQuery({
        queryKey : ["singleProducts"], 
        queryFn : () => singleProduct(Number(slug))});
      
        console.log(data)

  if (isLoading) return <div>Fetching Dtails...</div>;
  if (error) return <div>An error occurred:</div>;

    
    return(
        <Card sx={{ maxWidth: 345, margin: "80px auto"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={data?.data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {data?.data.price} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.data.description} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        )
}

export default slug;