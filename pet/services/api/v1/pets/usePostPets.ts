import axios from 'axios';

export const usePostPets = async (petData: any) => {
    try {
        const response = await axios.post('http://localhost:3000/petpal/user/my-shop/add', petData);
        return response.data; // ส่งข้อมูลที่ได้จากการสร้าง pet กลับ
    } catch (error) {
        throw new Error('Failed to create pet'); // จัดการข้อผิดพลาดเมื่อมีปัญหาในการสร้าง pet
    }
};
