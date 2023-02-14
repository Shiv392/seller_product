const sendbtn=document.getElementById('send');
sendbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name');
    const price=document.getElementById('price');
    const priceoutput=document.getElementById('outputprice');
    // console.log(name.value);
    // console.log(price.value);
    let product={
        productname:name.value,
        productprice:price.value
    }
    console.log(product);
    axios.post('https://crudcrud.com/api/8ca790ef4ccc41d4bfc55ef5af81c905/unicorns',product)
    .then((res)=>{
        console.log(res);
   showoutput(res.data).then(res=>{
    priceoutput.innerHTML=res.data.productprice;
    deleteproduct(res.data.productprice)
   })
 

    }).catch(err=>console.log(err))
   name.value="";
   price.value="";
   
})
 
 function showoutput(result){
    document.getElementById('res').innerHTML=`
    <span id="name">${result.productname}</span> <span id="price">${result.productprice}</span> <button class="btn btn-danger" id="delete" onclick="deleteproduct(name)">delete</button>
    `
 }
function deleteproduct(name){
// axios.delete('https://crudcrud.com/api/8ca790ef4ccc41d4bfc55ef5af81c905/unicorns/${name}')
// .then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))
document.getElementById('res').style.display='none';
priceoutput-=name;
}