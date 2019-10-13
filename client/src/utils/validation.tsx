export interface IValidationRequirements {
    isRequired?: boolean;
    pattern?: any;
    maxLength?: number;
}

export interface IValidationParam {
    [field: string]: IValidationRequirements;
}

export interface IValidationValues {
    [field: string]: any;
}

export const isValid = (values: IValidationValues, requirements: any): IValidationValues => {
    const fieldRequirements = Object.keys(requirements);

    return fieldRequirements.reduce((result: IValidationValues, field: string): IValidationValues => {
        if (requirements[field].isRequired && !values[field]) {
            return { ...result, [field]: 'is requered' };
        }

        if (requirements[field].pattern && !requirements[field].pattern.test(values[field])) {
            return { ...result, [field]: 'incorrect format' };
        }

        if (requirements[field].maxLength && values[field].length > requirements[field].maxLength) {
            return { ...result, [field]: 'too long value' };
        }

        return result;
    }, {});
};
