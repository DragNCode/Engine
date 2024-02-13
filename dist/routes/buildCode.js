"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCode = void 0;
const buildCode = (req, res) => {
    const NavbarComponents = req.body;
    const NavbarComponentsCode = buildNavbarCode(NavbarComponents);
    console.log(NavbarComponentsCode);
    res.json({
        recieved: req.body,
        code: JSON.stringify(NavbarComponentsCode)
    });
};
exports.buildCode = buildCode;
const buildNavbarCode = (json) => {
    const components = getNavbarComponents(json);
    const sortedComponents = components.sort((a, b) => a.xPosition - b.xPosition);
    const left = { start: 0, end: 240 };
    const leftCenter = { start: 241, end: 480 };
    const center = { start: 481, end: 720 };
    const rightCenter = { start: 721, end: 950 };
    const right = { start: 961, end: 1200 };
    const positionsOccupied = [0, 0, 0, 0, 0];
    const leftComponents = [];
    const leftCenterComponents = [];
    const centerComponents = [];
    const rightCenterComponents = [];
    const rightComponents = [];
    sortedComponents.map(component => {
        // Check the xPosition of the component and update the positionsOccupied array accordingly
        if (component.xPosition >= left.start && component.xPosition <= left.end) {
            positionsOccupied[0] = 1;
            leftComponents.push(component);
        }
        else if (component.xPosition >= leftCenter.start && component.xPosition <= leftCenter.end) {
            positionsOccupied[1] = 1;
            leftCenterComponents.push(component);
        }
        else if (component.xPosition >= center.start && component.xPosition <= center.end) {
            positionsOccupied[2] = 1;
            centerComponents.push(component);
        }
        else if (component.xPosition >= rightCenter.start && component.xPosition <= rightCenter.end) {
            positionsOccupied[3] = 1;
            rightCenterComponents.push(component);
        }
        else if (component.xPosition >= right.start && component.xPosition <= right.end) {
            positionsOccupied[4] = 1;
            rightComponents.push(component);
        }
    });
    const leftComponentsCode = combineCode(leftComponents.map((item) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }));
    const leftCenterComponentsCode = combineCode(leftCenterComponents.map((item) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }));
    const centerComponentsCode = combineCode(centerComponents.map((item) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }));
    const rightCenterComponentsCode = combineCode(rightCenterComponents.map((item) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }));
    const rightComponentsCode = combineCode(rightComponents.map((item) => {
        if (item.type === 'TextButton') {
            return generateTextButtonCode(item);
        }
    }));
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
};
const generateJustifyClassName = (array) => {
    const stringArray = array.toString();
    let className;
    console.log(stringArray);
    if (stringArray === [1, 1, 1, 1, 1].toString()) {
        console.log(1);
        className = 'justify-evenly';
    }
    else if (stringArray === [0, 1, 0, 1, 0].toString()) {
        console.log(2);
        className = 'justify-around';
    }
    else if ([[1, 0, 0, 1, 1].toString(), [1, 0, 0, 0, 1].toString(), [1, 0, 1, 0, 1].toString(), [1, 1, 0, 0, 1].toString()].includes(stringArray)) {
        console.log(3);
        className = 'justify-between';
    }
    else if ([[1, 1, 1, 0, 0].toString(), [1, 1, 0, 0, 0].toString(), [1, 0, 0, 0, 0].toString()].includes(stringArray)) {
        className = 'justify-start';
    }
    else if ([[0, 0, 1, 1, 1].toString(), [0, 0, 0, 1, 1].toString(), [0, 0, 0, 0, 1].toString()].includes(stringArray)) {
        className = 'justify-end';
    }
    else {
        console.log(6);
        className = 'justify-evenly';
    }
    console.log('class', className);
    return className;
};
const getNavbarComponents = (json) => {
    var _a, _b, _c, _d, _e, _f;
    const SimpleCard = (_a = json.SimpleCard) === null || _a === void 0 ? void 0 : _a.map(item => {
        return Object.assign(Object.assign({}, item), { type: 'SimpleCard' });
    });
    const ImageCard = (_b = json.ImageCard) === null || _b === void 0 ? void 0 : _b.map(item => {
        return Object.assign(Object.assign({}, item), { type: 'ImageCard' });
    });
    const SongCard = (_c = json.SongCard) === null || _c === void 0 ? void 0 : _c.map(item => {
        return Object.assign(Object.assign({}, item), { type: 'SongCard' });
    });
    const CustomButton = (_d = json.CustomButtonJson) === null || _d === void 0 ? void 0 : _d.map(item => {
        return Object.assign(Object.assign({}, item), { type: 'CustomButton' });
    });
    const OutlineButton = (_e = json.OutlineButton) === null || _e === void 0 ? void 0 : _e.map(item => {
        return Object.assign(Object.assign({}, item), { type: 'OutlineButton' });
    });
    const TextButton = (_f = json.TextButton) === null || _f === void 0 ? void 0 : _f.map(item => {
        return Object.assign(Object.assign({}, item), { type: 'TextButton' });
    });
    return [...SimpleCard, ...ImageCard, ...SongCard, ...CustomButton, ...OutlineButton, ...TextButton];
};
const generateTextButtonCode = (json) => {
    return `
        <button 
            key={'${json.index + json.label}'} 
            style={{ color: '${json.color2}' }} 
            className={'text-[${json.fontSize - 5}px] md:text-[${json.fontSize}px] ${json.color2} hover:${json.colorHovered} cursor-pointer ml-2 '}
        >
            ${json.label}
        </button>
    `;
};
const combineCode = (array) => {
    if (array.length > 1) {
        return `
            <div className="flex md:flex-row flex-col p-2 justify-evenly" >
                ${array.join("\n")}
            </div>
        `;
    }
    return `${array.join("\n")}`;
};
