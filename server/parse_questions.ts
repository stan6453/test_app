interface q_schema {
    question:string,
    answers:string|string[],
    options:{
        A:string,
        B:string,
        C:string,
        D:string
        //...
    },
    selected:string|string[]


}

let questions:q_schema[];

