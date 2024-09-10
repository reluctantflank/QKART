import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  const {name,cost,rating,image,_id}=product;
// function pushToCart(e){
//   console.log(e.target.value)
// }


// let [cardData,setCardData] = useState(
 
// {
//   "name":"Tan Leatherette Weekender Duffle",
//   "category":"Fashion",
//   "cost":150,
//   "rating":4,
//   "image":"https://crio-directus-assets.s3.ap-south-1.amazonaws.com/ff071a1c-1099-48f9-9b03-f858ccc53832.png",
//   "_id":"PmInA797xJhMIPti"
//   }
// )








  return (
    <Card className='card' >

        <CardMedia
          component="img"
          image={product.image}
          alt="green iguana"
        />
        <CardContent >

          <Typography>{product.name}</Typography>
          <Typography fontWeight="700" >${product.cost}</Typography>
          <Typography><Rating name="read-only" value={product.rating} readOnly /></Typography> 
        
       
        </CardContent>
        <CardActions>
        <Button size="" fullWidth color="primary" variant="contained" value={_id} onClick={handleAddToCart}>
              <AddShoppingCartOutlined />  ADD TO CART
              </Button>
        </CardActions>

    </Card>
  );
};

export default ProductCard;
