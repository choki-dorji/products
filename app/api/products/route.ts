import {prisma} from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
import multer from "multer"
import path from 'path';



const storageEngine = multer.diskStorage({
    destination: "public/images",
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}--${file.originalname}`);
    },
  });

  const upload = multer({
    storage: storageEngine,
  });

export async function GET(req: NextRequest){
    const products = await prisma.product.findMany()

    let json_response = {
        status: "success",
        results: products.length,
        products

    }
    return NextResponse.json(json_response)
}

//static route will have only get and post 

export async function POST(request: Request){
  
    try{
        const json = await request.json()
        console.log(json)
        
        const products = await prisma.product.create({
            data: json,
        })
        let json_response = {
            status: "success",
            data: {
                products
            }
        
        }
        return new NextResponse(JSON.stringify(json_response), {
            status: 201,
            headers: {"Content-Type": "application/json"},

        })

    }catch(error: any){
        if(error.code ==="P2002"){
            let error_response ={
                status: "fail",
                message: "product with title alredy exist"
            }
            return new NextResponse(JSON.stringify(error_response),{
                status: 409,
                headers: {"Content-Type": "application/json"}
            })
        }
        let error_response = {
            status: "error",
            message: error.message,
        }
        console.log(error_response)
        return new NextResponse(JSON.stringify(error_response), {
            status: 500, 
            headers: {"Content-Type": "application/json"},
        })
    }
}



// const upload = multer({
//   storage: multer.diskStorage({
//     destination: './public/uploads/', // The directory to store the uploaded files
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 10);
//       cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//     },
//   }),
// });

// export async function POST(request: Request) {
//   try {
//     // Upload the image using multer middleware
//     upload.single('image')(request, null, async (err) => {
//       if (err) {
//         console.error('Error uploading image:', err);
//         return new NextResponse(JSON.stringify({ error: 'Failed to upload image' }), {
//           status: 500,
//         //   headers: { 'Content-Type': 'application/json' },
//         });
//       }

//       const json = await request.json();
//       const products = await prisma.product.create({
//         data: {
//           ...json,
//           imageUrl: `/uploads/${request.file.filename}`, // Save the file path to the imageUrl field
//         },
//       });

//       const json_response = {
//         status: 'success',
//         data: {
//           products,
//         },
//       };

//       return new NextResponse(JSON.stringify(json_response), {
//         status: 201,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     });
//   } catch (error: any) {
//     // Error handling code remains the same
//     // ...
//     console.log(error)
//   }
// }
