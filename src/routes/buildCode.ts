import express from 'express';
import { CreateTextButtonProps, jsonType } from '../types/type';

export const buildCode = (req: express.Request, res: express.Response) => {

    const NavbarComponents: jsonType = req.body;
    const NavbarComponentsCode = buildNavbarCode(NavbarComponents);
    console.log(NavbarComponentsCode);

    res.json({
        recieved: req.body,
        code: JSON.stringify(NavbarComponentsCode)
    })
}

const buildNavbarCode = (json: jsonType) => {
    const components = getNavbarComponents(json);
    const sortedComponents = components.sort((a, b) => a.xPosition - b.xPosition);

    const left = { start: 0, end: 240 };
    const leftCenter = { start: 241, end: 480 };
    const center = { start: 481, end: 720 };
    const rightCenter = { start: 721, end: 950 };
    const right = { start: 961, end: 1200 };

    const positionsOccupied = [0, 0, 0, 0, 0];
    const leftComponents: any = [];
    const leftCenterComponents: any = [];
    const centerComponents: any = [];
    const rightCenterComponents: any = [];
    const rightComponents: any = [];

    sortedComponents.map(component => {
        // Check the xPosition of the component and update the positionsOccupied array accordingly
        if (component.xPosition >= left.start && component.xPosition <= left.end) {
            positionsOccupied[0] = 1;
            leftComponents.push(component);
        } else if (component.xPosition >= leftCenter.start && component.xPosition <= leftCenter.end) {
            positionsOccupied[1] = 1;
            leftCenterComponents.push(component);
        } else if (component.xPosition >= center.start && component.xPosition <= center.end) {
            positionsOccupied[2] = 1;
            centerComponents.push(component);
        } else if (component.xPosition >= rightCenter.start && component.xPosition <= rightCenter.end) {
            positionsOccupied[3] = 1;
            rightCenterComponents.push(component);
        } else if (component.xPosition >= right.start && component.xPosition <= right.end) {
            positionsOccupied[4] = 1;
            rightComponents.push(component);
        }
    });

    const leftComponentsCode = combineCode(leftComponents.map((item: any) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }))
    const leftCenterComponentsCode = combineCode(leftCenterComponents.map((item: any) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }))
    const centerComponentsCode = combineCode(centerComponents.map((item: any) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }))
    const rightCenterComponentsCode = combineCode(rightCenterComponents.map((item: any) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }))
    const rightComponentsCode = combineCode(rightComponents.map((item: any) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }))

    const justify = generateJustifyClassName(positionsOccupied);

    return `
    
        <div className='${justify} flex flex-col md:flex-row p-4 '>
            ${leftComponentsCode}
            ${leftCenterComponentsCode}
            ${centerComponentsCode}
            ${rightCenterComponentsCode}
            ${rightComponentsCode}
        </div>

    `;

}

const generateJustifyClassName = (array: number[]): string => {
    const stringArray = array.toString();
    let className;
    console.log(stringArray);
    if (stringArray === [1, 1, 1, 1, 1].toString()) {
        console.log(1);
        className = 'justify-evenly';
    } else if (stringArray === [0, 1, 0, 1, 0].toString()) {
        console.log(2)
        className = 'justify-around';
    } else if ([[1, 0, 0, 1, 1].toString(), [1, 0, 0, 0, 1].toString(), [1, 0, 1, 0, 1].toString(), [1, 1, 0, 0, 1].toString()].includes(stringArray)) {
        console.log(3)
        className = 'justify-between';
    } else if ([[1, 1, 1, 0, 0].toString(), [1, 1, 0, 0, 0].toString(), [1, 0, 0, 0, 0].toString()].includes(stringArray)) {
        className = 'justify-start';
    } else if ([[0, 0, 1, 1, 1].toString(), [0, 0, 0, 1, 1].toString(), [0, 0, 0, 0, 1].toString()].includes(stringArray)) {
        className = 'justify-end';
    } else {
        console.log(6)
        className = 'justify-evenly';
    }

    console.log('class', className);
    return className;
}

const getNavbarComponents = (json: jsonType) => {

    const SimpleCard = json.SimpleCard?.map(item => {

        return { ...item, type: 'SimpleCard' };
    })
    const ImageCard = json.ImageCard?.map(item => {
        return { ...item, type: 'ImageCard' };
    })
    const SongCard = json.SongCard?.map(item => {
        return { ...item, type: 'SongCard' };
    })
    const CustomButton = json.CustomButtonJson?.map(item => {
        return { ...item, type: 'CustomButton' };
    })
    const OutlineButton = json.OutlineButton?.map(item => {
        return { ...item, type: 'OutlineButton' };
    })
    const TextButton = json.TextButton?.map(item => {
        return { ...item, type: 'TextButton' };
    })

    return [...SimpleCard, ...ImageCard, ...SongCard, ...CustomButton, ...OutlineButton, ...TextButton];

}

const generateTextButtonCode = (json: CreateTextButtonProps): string => {
    return `
        <button 
            key={'${json.index + json.label}'} 
            style={{ color: '${json.color2}' }} 
            className={'text-[${json.fontSize - 5}px] md:text-[${json.fontSize}px] ${json.color2} hover:${json.colorHovered} cursor-pointer ml-2 '}
        >
            ${json.label}
        </button>
    `
}

const combineCode = (array: any[]): string => {
    if (array.length > 1) {
        return `
            <div className="flex md:flex-row flex-col p-2 justify-evenly" >
                ${array.join("\n")}
            </div>
        `;
    }
    return `${array.join("\n")}`;
}
