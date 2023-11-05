class ValidationUtil{
    static validateEmail = (p: any) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(p);
    };
}

export default ValidationUtil;