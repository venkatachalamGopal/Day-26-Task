
import { useNavigate} from 'react-router-dom'
import { Man } from './man';



const data=[
{id:0,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLZoK0EBKRT5u6hFXuN_Mina12vvp0gNQ5Q&usqp=CAU",name:"Fancy product",price:"$40.00-$80.00",option:"Add to cart"},
{id:1,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNt05w_196raqRTBDlZu1PzGR1omZFCc-KEQ&usqp=CAU",name:"Special item",price:"$40.00-$80.00",option:"Add to cart"},
{id:2,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF-cwiQW_Wey_NQQ1CpD8F-9kcXhdkqBHfg&usqp=CAU",name:"Sale item",price:"$40.00-$80.00",option:"Add to cart"},
{id:3,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTYqGE4rNq4aU8SJbZeWTP0aUfdEYCn9pkQ&usqp=CAU",name:"Popular item",price:"$40.00-$80.00",option:"Add to cart"},
{id:4,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGh5aVsW3aW1c2wJMWWFqjLutICkTQZqgWcQ&usqp=CAU",name:"Fancy product",price:"$40.00-$80.00",option:"Add to cart"},
{id:5,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpanqbxERYGO_-Br6DeX6KBj1VCf6PaGeVP_EJ6ZgOFZPKwh7D7XW_BySRyGpaStuh8SM&usqp=CAU",name:"Special item",price:"$40.00-$80.00",option:"Add to cart"},
{id:6,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LgIPwB4gjYlOy5_YtiC7GSU5VJQVBgwG2w&usqp=CAU",name:"Sale item",price:"$40.00-$80.00",option:"Add to cart"},
{id:7,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQURJbRSfTj3b0YSLGbfcvAaW8MLeqxXf_g&usqp=CAU",name:"Popular item",price:"$40.00-$80.00",option:"Add to cart"}
]

export  function Home(){
  const navigate=useNavigate();
  return (
    <>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    <button onClick={()=>navigate(1)}>Go Forward</button>
    <button onClick={()=>navigate('/about')}>Push</button>
    <button onClick={()=>navigate('/about')}>Replace</button>
    <div className='container'>
    {data.map((elem)=><Man key={elem.id} elem={elem}/>)}
    </div>
    
    
    </>
  );
}