export const isDigit = (str: string): boolean => {
    return /^\d+$/.test(str);
};

export const isEmail = (str: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
};

export const isTelephone = (str: string): boolean => {
    const phoneRegex = /^(?:\+7|7|8)[\s\-()]*\d[\s\-()]*\d{2,}[\s\-()]*\d{7,11}$/;
    const cleanedPhone = str.replace(/[\s\-()]/g, ''); 

    return cleanedPhone.length <= 18 && phoneRegex.test(str);
};