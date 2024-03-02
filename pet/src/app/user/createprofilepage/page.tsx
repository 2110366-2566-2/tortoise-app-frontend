'use client';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Tab, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { IUserDetail } from '../../../../services/api/v1/user/type';
import { useForm } from 'react-hook-form';
import { fira_sans_600, fira_sans_800 } from '../../../../core/theme/theme';
import { ColorButton, CustomTextField } from '../../../../components/CustomInput/type';


export default function createprofilepage() {
  const form = useForm<IUserDetail>();
  const [avatarSrc, setAvatarSrc] = useState(''); // สร้าง state เพื่อเก็บค่า src ของ Avatar
  const router = useRouter()
  
  useEffect(() => {
        form.setValue('first_name', form.getValues().first_name || "");
        form.setValue('last_name', form.getValues().last_name || "");
        form.setValue('phoneNumber', form.getValues().phoneNumber || "");
        form.setValue('gender', form.getValues().gender || "");
        form.setValue('address.housenumber', form.getValues().address.housenumber || "");
        form.setValue('image', form.getValues().image || "");
        // form.setValue('first_name', form.getValues().first_name || userProfile.first_name);
    });
    
  // ฟังก์ชัน handleFileChange เมื่อมีการเลือกไฟล์ใหม่
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // ไฟล์ที่เลือก
    const reader = new FileReader();

    reader.onload = () => {
      const newSrc = reader.result; // ข้อมูลของไฟล์ที่ถูกอ่านเข้ามา
      setAvatarSrc(newSrc); // เปลี่ยนค่า src ของ Avatar
    };

    reader.readAsDataURL(file); // อ่านไฟล์ในรูปแบบ Data URL
  };

  const onSubmit = async (data: IUserDetail) => {
        console.log(data)
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} pb={3}>
        <Typography fontFamily={fira_sans_800.style.fontFamily} fontSize={30} color={'#472F05'} textAlign={'center'} mt={4}>
            Create your new Profile HERE!
        </Typography>
        <Box 
            display={'flex'} 
            flexDirection={'column'} 
            alignItems={'center'} 
            py={3}
            px={4}
            border={'3px solid #472F05'}
            boxShadow={'6px 6px #472F05'}
            borderRadius={0}
            sx={{
            backgroundColor: '#E5CB9A'
            }}
          >
          <Avatar 
            alt='Profile Picture'
            src={avatarSrc} // ใช้ค่า src ที่เก็บใน state มาเป็นค่า src ของ Avatar
            sx={{ 
              width: 180 , 
              height: 180,  
              border: '2px solid #472F05', 
              boxShadow: 10,
              fontSize: 70,
              fontFamily: fira_sans_800.style.fontFamily
            }} 
          />
          
          <Tab/>
          <input type="file" id="myFile" name="filename" onChange={handleFileChange} />
        </Box>
            
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box 
                    sx={{ 
                        m: 5, p: 5, 
                        border: '3px solid #472F05', 
                        boxShadow: '7px 7px #472F05', 
                        borderRadius: 2,
                        bgcolor: '#DDB892'
                    }}
                >
                    <Box 
                        sx={{
                            p: 3,
                            border: '2px solid #472F05',
                            borderRadius: 1,
                            boxShadow: '4px 4px #472F05',
                            bgcolor: '#FFF8E8'
                        }}
                    >
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                {...form.register('first_name')}
                                name={'first_name'}
                                label="First Name"
                                variant="outlined"
                                //defaultValue={userProfile.first_name}
                                type={'text'}
                                fullWidth
                                // disabled={}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                {...form.register('last_name')}
                                name={'last_name'}
                                label="Last Name"
                                variant="outlined"
                                //defaultValue={userProfile.last_name}
                                type={'text'}
                                fullWidth
                                // disabled={}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                {...form.register('gender')}
                                name={'gender'}
                                label="Gender"
                                variant="outlined"
                                //defaultValue={userProfile.gender}
                                type={'text'}
                                fullWidth
                                // disabled={}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                {...form.register('phoneNumber')}
                                name={'phoneNumber'}
                                label="Tel"
                                variant="outlined"
                                //defaultValue={userProfile.phoneNumber}
                                type={'text'}
                                fullWidth
                                // disabled={}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                <Box>
                    <Typography fontFamily={fira_sans_800.style.fontFamily} pt={3} fontSize={23} color={'#472F05'}>
                        Address:
                    </Typography>
                    <Box 
                        sx={{
                            p: 3,
                            border: '2px solid #472F05',
                            borderRadius: 1,
                            boxShadow: '4px 4px #472F05',
                            bgcolor: '#FFF8E8'
                        }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={2.5}>
                                <CustomTextField
                                    {...form.register('address.houseNumber')}
                                    name={'address.houseNumber'}
                                    label="House Number"
                                    variant="outlined"
                                    //defaultValue={userProfile.address.houseNumber}
                                    type={'text'}
                                    fullWidth
                                    // disabled={}
                                />
                            </Grid>
                            <Grid item xs={12} md={4.5}>
                                <CustomTextField
                                    {...form.register('address.building')}
                                    name={'address.building'}
                                    label="Building"
                                    variant="outlined"
                                    //defaultValue={userProfile.address.building}
                                    type={'text'}
                                    fullWidth
                                    // disabled={}
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <CustomTextField
                                    {...form.register('address.street')}
                                    name={'address.street'}
                                    label="Street"
                                    variant="outlined"
                                    //defaultValue={userProfile.address.street}
                                    type={'text'}
                                    fullWidth
                                    // disabled={}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    {...form.register('address.subdistrict')}
                                    name={'address.subdistrict'}
                                    label="Sub-District"
                                    variant="outlined"
                                    //defaultValue={userProfile.address.subdistrict}
                                    type={'text'}
                                    fullWidth
                                    // disabled={}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    {...form.register('address.district')}
                                    name={'address.district'}
                                    label="District"
                                    variant="outlined"
                                    //defaultValue={userProfile.address.district}
                                    type={'text'}
                                    fullWidth
                                    // disabled={}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    {...form.register('address.province')}
                                    name={'address.province'}
                                    label="Province"
                                    variant="outlined"
                                    //defaultValue={userProfile.address.province}
                                    type={'text'}
                                    fullWidth
                                    // disabled={}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    {...form.register('address.postalCode')}
                                    name={'address.postalCode'}
                                    label="Postal Code"
                                    variant="outlined"
                                    //defaultValue={userProfile.address.postalCode}
                                    type={'text'}
                                    fullWidth
                                    // disabled={}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                    <ColorButton
                        sx={{
                            mt: 3, px: 3,
                            border: '2px solid #472F05',
                            borderRadius: 0,
                            boxShadow: '3px 2px #472F05',
                            fontFamily: fira_sans_600.style.fontFamily,
                            fontSize: 18,
                            textAlign: 'center'
                        }}
                        onClick={() => {
                            form.handleSubmit(onSubmit)
                            router.push('my-shop')
                        }}
                    >
                        Create New Profile!
                    </ColorButton>
                </Box>
                
            </Box>
        </form>
        


    </Box>
  );
}

