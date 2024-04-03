import React from 'react'
import ProductItems from './ProductItems'
import './ProductContainer.css'

let productData = [
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone SE series",
        startingPrice:"49,99",
        cuttprice:"7,999",
        descrption:"Compact iPhone model with powerful performance, ideal for users seeking smaller form factor.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-01.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone 6 series",
        startingPrice:"5,499",
        cuttprice:"8,799",
        descrption:"Sleek design, powerful performance, advanced features, and seamless user experience.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-6-1.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone 7 series",
        startingPrice:"6,949",
        cuttprice:"10,999",
        descrption:"Sleek design, advanced camera, powerful performance, iconic Apple innovation.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone 8 series",
        startingPrice:"8,499",
        cuttprice:"10,999",
        descrption:"Sleek design, powerful performance, advanced features, iconic simplicity, premium experience.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-8-new-1.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone X series",
        startingPrice:"10,000",
        cuttprice:"15,999",
        descrption:"Sleek, powerful, innovative smartphone with cutting-edge features and iconic design.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-2.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone 11",
        startingPrice:"19,499",
        cuttprice:"25,999",
        descrption:"Dual-camera system, powerful A13 Bionic chip, all-day battery life.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone 12",
        startingPrice:"25,499",
        cuttprice:"27,999",
        descrption:"High-performance smartphone with advanced features and sleek design.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-2.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone 13",
        startingPrice:"30,999",
        cuttprice:"37,499",
        descrption:"Compact, powerful Apple 13 laptop with sleek design and high performance.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone 14",
        startingPrice:"45,000",
        cuttprice:"50,999",
        descrption:"Sleek, powerful, innovative laptop with stunning display and cutting-edge features.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-2.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"iPhone 15",
        startingPrice:"45,000",
        cuttprice:"49,990",
        descrption:"Sleek design, powerful performance, innovative features, unparalleled user experience.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg"
    },
    {
        brandName:"Apple",
        brandlogo:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
        title:"Pro Series",
        startingPrice:"70k",
        cuttprice:"1Lakh",
        descrption:"Powerful, sleek, and innovative computing device for professionals.",
        thumbnail:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-1.jpg"
    }
]
function ProductContainer() {
  return (
    <div className='product-container'> 
        {
            productData.map((data)=>{
                return <ProductItems brandName={data.brandName}
                 brandlogo={data.brandlogo}
                 title ={data.title}
                 startingPrice = {data.startingPrice}
                 cuttPrice = {data.cuttprice}
                description = {data.descrption}
                thumbnail = {data.thumbnail}
                />
            })
        }
        
    </div>
  )
}

export default ProductContainer