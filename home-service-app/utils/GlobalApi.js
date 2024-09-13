import { create } from "apisauce";


const api = create({
    baseURL:'http://192.168.100.122:1337/api',
    headers: {
        "X-API-Key":"cd8824b71a78178392a6f063c900eabb150a3dd69e615ee32b3374ac9f0dbd4c793d060a0c024a08916f4c10f17a45f5079ac1849d013e3b2073189ee0b8c2409af88bc957e34115cb7132819ac66e24946525d4ad3c6197d7235d4c4dc09a0c1c56e96c85b1d1f259ba19c661c070c9e8cfa8f132238f26732e774c895df8e9"
    },
})

const getSlider=()=>api.get('/sliders?populate=*');
const getVideoCourse=()=>api.get('/video-courses?populate=*');
const getCourseList=(type)=>api.get('/course-lists?filters[type][%eq]='+type+'&populate=*');
export default{
    getSlider,
    getVideoCourse,
    getCourseList
}