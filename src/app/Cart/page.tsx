import { getUserCart } from '_/api/services/route.services'
import { CartResponse } from '_/api/types';
import { Button } from '_/components/ui/button';
  import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "_/components/ui/table"
import RemoveProductButton from './RemoveProductButton';
import UpdateProductCountButton from './UpdateProductCountButton';
import Link from 'next/link';



export default async function page() {
     const UserCart=await getUserCart();
     if(!UserCart){
      return;
     }
const{products,totalCartPrice,_id}= UserCart as CartResponse

  return (
    <>
    <div className='w-3/4 mx-auto'>
    <div className='flex justify-between'>

          <div>
        <h1>  page cart</h1>
      <h3>Total Price:{totalCartPrice}</h3>
      </div>


<div >
    <Button variant='destructive'>Clear Cart</Button>
   <Link href={`/Cart/${_id}`}><Button className='ml-2'>Pay for your cart</Button></Link>     
</div>

    </div>
   




    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead >Actions</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((item) => (
          <TableRow key={item._id}>
            <TableCell className="font-medium">
                <img src={item.product.imageCover} className='w-full max-h-50' alt={item.product.title} />
            </TableCell>
            <TableCell>{item.product.title}</TableCell>
          
            <TableCell >
                 <div>
                     <div className='flex gap-2 items-center justify-center'>
                <UpdateProductCountButton id={item.product.id} newcount={item.count - 1}/>
                <span className='font-bold text-xl'>{item.count}</span>
                <UpdateProductCountButton id={item.product.id} newcount={item.count + 1 } isIncrement/>
                 </div>
                 </div>
             <RemoveProductButton id={item.product.id}/>
            </TableCell>
           
            <TableCell className="text-right">{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{totalCartPrice}LE</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
 




      
    </div>
    </>
  )
}
