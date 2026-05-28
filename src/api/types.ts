export interface productType{
  id:string,
  quantity: number,
     price: number,
     priceAfterDiscount:number
     imageCover: string,
      category:categoryType,
      brand: brandType,
      ratingsAverage:number,
       images: string[],
      ratingsQuantity:number,

      title: string,
      slug: string,
      description:string

}
export interface categoryType{
  _id:string,
  name:string,
  slug:string,

  image:string
}
 export interface brandType{
  _id:string,
  name:string,
  slug:string,

  image:string

}

export interface CartResponse{
  _id:string,
  cartOwner:string,
  products:ItemType[],
  totalCartPrice:string
}
 
export interface ItemType{
  _id:string,
  count:number,
  price:number,
  product: productType
}
export interface orderPlaceType{
shippingAddress:{
   details: string,
    phone: string,
    city:string,
    postalCode: string
}
}