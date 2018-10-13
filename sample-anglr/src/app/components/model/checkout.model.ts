export class CardDO{
    cvvNumber : number;
    expiryDate : String
}

export class CreditCardDO extends CardDO{
    ccANumber : number;
}

export class DebitCardDO extends CardDO {
    dcANumber : number;
}
