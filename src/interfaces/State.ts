export type State={
    count:number,
    listNumber:number[],
    color:{
        background:string,
        color:string,
        text:string,
    },
    display:string,
    arrow:{
        display:string,
        width:string,
    },
    users:{
        id:number,
        name:string,
        status:boolean,
    }[]

}