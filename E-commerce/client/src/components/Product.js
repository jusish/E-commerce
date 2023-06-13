import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
function Product(props) {
  const { product } = props;
  return (
    <Card className="product">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
        <Link to={`/product/${product.slug}`}>
          <Card.Text>
            <strong>${product.price}</strong>
          </Card.Text>
        </Link>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
