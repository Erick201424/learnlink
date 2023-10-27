import { IsNumber, IsNotEmpty, IsString, IsEmail } from "class-validator";

export class ValidationCreateUser {

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsString()
    public lastName: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    constructor(
        name: string,
        lastName: string,
        email: string,
        password: string,
    ) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

export class ValidationUpdateUser {

    @IsNotEmpty()
    @IsNumber()
    public id: number;

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsString()
    public lastName: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    constructor(
        id: number,
        name: string,
        lastName: string,
        email: string,
        password: string,
    ) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

export class ValidateLoginUser {

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    constructor(
        email: string,
        password: string,
    ) {
        this.email = email;
        this.password = password;
    }
}