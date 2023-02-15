import axios from "axios"

export const fecthCategories = async () => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        return response.data
    } catch (error) {
       console.log(error) 
    }
}