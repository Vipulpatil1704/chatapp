export const formatTime=(inputDate)=>{
    const date=new Date(inputDate);
    const hours=padZero(date.getHours());
    const minutes=padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}
//function to pad single digit number with leading zeros
function padZero(number){
    return number.toString().padStart(2,'0');
} 