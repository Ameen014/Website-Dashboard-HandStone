

export type users = {
    id : number;
    name : string;
    password : string;
};

export type exchange = {
    id : number;
    dolar : number;
};

export type categories = {
    id : number;
    name : string;
};

export type sizes = {
    id : number;
    name : string;
    unit : string;
    price : number;
};

export type products = {
    id : number;
    name : string;
    photo : string;
    categoryName : string;
    sizeName : string;
    price : number;
    isNew : boolean;
};

export type formDataLogin = {
    email : string;
    password : string;
}