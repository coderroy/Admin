export class FeedBackPosts {
     FeedBackId : number;
     FeedBack : string;
     FeedBackDate : string;
     Name : string;
     EmailID : string;
     TypeOfUser : string;
}

export class Properties {
     PropertyId : number;
     Property_Name : string;
     Name : string;
     email : string;
     Location_name : string;
     City_name : string;
}

export class Users {
     UserId : number;
     email : string;
     Name : string;
     Phone_number : string;
}

export class Owners {
    UserId : number;
    email : string;
    Name : string;
    PropertyId : string;
    Property_name : string;
    Location_name : string;
    City_Name : string;
}

