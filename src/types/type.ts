interface CreateSimpleCardProps {
    index: number;
    width: number;
    height: number;
    color: string;
    cornerRadius: number;
    headingColor: string;
    subTextColor: string;
    contentColor: string;
    buttonColor: string;
    headingFont: number;
    subTextFont: number;
    contentFont: number;
    buttonFont: number;
    headingText: string;
    subText: string;
    content: string;
    buttonText: string;
    xPosition: number;
    yPosition: number;
};

interface OutlineButtonProps {
    index: number;
    label: string;
    width: number;
    height: number;
    cornerRadius: number;
    color1: string;
    color2: string;
    colorHovered: string;
    textColor: string;
    fontSize: number;
    xPosition: number;
    yPosition: number;
}

interface CreateCustomButtonProps {
    index: number;
    label: string;
    width: number;
    height: number;
    cornerRadius: number;
    color1: string;
    color2: string;
    colorHovered: string;
    textColor: string;
    fontSize: number;
    xPosition: number;
    yPosition: number;
}

export interface CreateTextButtonProps {
    index: number,
    label: string,
    color1: string,
    color2: string,
    colorHovered: string,
    fontSize: number,
    xPosition: number,
    yPosition: number,
}

interface CreateImageCardProps {
    index: number;
    width: number;
    height: number;
    color: string;
    cornerRadius: number;
    headingColor: string;
    subTextColor: string;
    contentColor: string;
    headingFont: number;
    subTextFont: number;
    contentFont: number;
    headingText: string;
    subText: string;
    content: string;
    iconColor: string;
    xPosition: number;
    yPosition: number;
}

interface CreateSongCardProps {
    index: number;
    width: number;
    height: number;
    color: string;
    cornerRadius: number;
    headingColor: string;
    subTextColor: string;
    contentColor: string;
    headingFont: number;
    subTextFont: number;
    contentFont: number;
    headingText: string;
    subText: string;
    content: string;
    iconColor: string;
    xPosition: number;
    yPosition: number;
}

interface FormProps {
    index: number;
    width: number;
    height: number;
    backgroundColor: string;
    cornerRadius: number;
    heading: string;
    field1: string;
    field2: string;
    inputField1Radius: number;
    inputField2Radius: number;
    buttonText: string;
    buttonColor: string;
    inputField1Color: string;
    inputField2Color: string;
    xPosition: number;
    yPosition: number;
}

interface ImageProps {
    index: number,
    url: string
    width: number,
    height: number,
    xPosition: number,
    yPosition: number
}

interface SignupFormProps {
    index: number;
    width: number;
    height: number;
    backgroundColor: string;
    googleButtonColor: string;
    cornerRadius: number;
    inputEmailColor: string;
    inputEmailRadius: number;
    inputPasswordColor: string;
    inputPasswordRadius: number;
    inputUsernameColor: string;
    inputUsernameRadius: number;
    signUpButtonColor: string;
    xPosition: number;
    yPosition: number;
}

interface TextAreaProps {
    index: number,
    xPosition: number,
    yPosition: number,
    width: number,
    height: number,
    text: string,
    fontSize: number,
    fill: string,
    color: string,
    label: string,
    fontFamily: string,
}

export interface jsonType {
    SimpleCard: CreateSimpleCardProps[];
    CustomButtonJson: CreateCustomButtonProps[];
    OutlineButton: OutlineButtonProps[];
    TextButton: CreateTextButtonProps[];
    ImageCard: CreateImageCardProps[];
    SongCard: CreateSongCardProps[];
    Form: FormProps[];
    Image: ImageProps[];
    SignupForm: SignupFormProps[];
    TextArea: TextAreaProps[];
}