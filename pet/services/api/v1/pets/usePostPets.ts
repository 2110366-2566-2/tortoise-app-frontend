import axios from 'axios';
import react from  "react";
import { IPetDetail } from './type';
//import { useNavigate } from "react-router-dom";

/*
export const usePostPets = async (petData: any) => {
    try {
        const response = await axios.post('http://localhost:3000/petpal/user/my-shop/add', petData);
        return response.data; // ส่งข้อมูลที่ได้จากการสร้าง pet กลับ
    } catch (error) {
        throw new Error('Failed to create pet'); // จัดการข้อผิดพลาดเมื่อมีปัญหาในการสร้าง pet
    }
};
*/


export async function addPetToSeller('65c7356900dfa761aed36125' :string, petData: IPetDetail) {
    try {
      
      //const response = await axios.post(`{{url}}/api/v1/pets/seller/65c7356900dfa761aed36120`, petData);
        const response = await axios.post(`/api/v1/pets/seller/65c7356900dfa761aed36125`, petData);
        return response.data; // หรือจะ return response ตรงๆ ขึ้นอยู่กับการจัดการข้อมูลต่อไป
    } catch (error:any) {
        throw new Error('Failed to add pet: ' + error.message);
    }
}

/*
import axios from 'axios';
import { IPetDetail } from './type';
import { useNavigate } from "react-router-dom";
const navigate= useNavigate();
const [message, setMessage]= useState('');
const res= axios.post(`/api/v1/pets/seller/${sellerId}`, data)
.then(responce=>{ setMessage(responce.data);
});

if(!message)
{
  setMessage(res.data);
  setTimeout(() => {
    navigate('http://localhost:3000/petpal/user/my-shop');
  }, 2000);
} else{
  setMessage("Some Error Occured!");
}
*/
/*
import axios from 'axios';
import { IPetDetail } from './type';
import { useNavigate } from "react-router-dom";
export const usePostPets = async (petData: any){
  const navigate= useNavigate();
const [message, setMessage]= useState('');
const res= axios.post(`/api/v1/pets/seller/${sellerId}`, petdata)
.then(responce=>{ setMessage(responce.data);
});

if(!message)
{
  setMessage(res.data);
  setTimeout(() => {
    navigate('http://localhost:3000/petpal/user/my-shop');
  }, 2000);
} else{
  setMessage("Some Error Occured!");
}

}
const express= require("express");
const sqlDbconnect= require("./dbconnect");
const Router= express.Router()
Router.post(`/api/v1/pets/seller/${sellerId}`,(req: { body: { name: any; username: any; email: any; password: any; phoneno: any; gender: any; countryid: any; stateid: any; address1: any; address2: any; accept: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; })=>{
    const name= req.body.name;
    const username= req.body.username;
    const email= req.body.email;
    const password= req.body.password;
    const phoneno= req.body.phoneno;
    const gender= req.body.gender;
    const countryid= req.body.countryid;
    const stateid= req.body.stateid;
    const address1= req.body.address1;
    const address2= req.body.address2;
    const accept= req.body.accept;
    const status= 1;  

    var sql=`INSERT INTO tbl_user_registration (name, username,email, password, phoneno, gender, countryid, stateid,address1, address2, accept, status)
    VALUES("${name}","${username}", "${email}" ,"${password}", "${phoneno}", "${gender}","${countryid}","${stateid}","${address1}","${address2}","${accept}", "${status}")`;
    
    sqlDbconnect.query(sql, (err: any, result: any)=>{
        if(!err)
        {
         res.status(200).json("User Registartion Inserted Successfully");
        } else{
            console.log(err);
        }

    });
    */
