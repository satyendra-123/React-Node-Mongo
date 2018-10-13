export class Sweet{
    id : number;
    name : string;
    price : number;
    count : number;
    totalAmnt : number
    constructor(){    
    }
}

export class Cart{
    selectedSwts: Sweet[] = new Array();
    totalAmount : number
}

export class Address{
    id : number
    name: string;
    phoneNumber: number;
    locality: string;
    city:string;
    address: string;
    pincode: number;
    landmark : string;
    state : string
}