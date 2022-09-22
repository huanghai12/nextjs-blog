import { parseISO, format } from 'date-fns';
export default function Date({dateString}){
    const date = parseISO(dateString);
    console.log(date)
    return <time dateTime={dateString}>{format(date,'LLL d,yyy')}</time>
    // return <div>1111</div>
}