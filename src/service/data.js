import { Axios } from './helper';

export const currenctConvert=(currencyData)=>{
    return Axios.get('/convert', { params: currencyData })
        .then(response => {
            return response.data.convertedAmount;
        })
        .catch(error => {
            console.error('Error converting currency:', error);
            throw error;
        });
}