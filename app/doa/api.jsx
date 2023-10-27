export const getList = async () => {
    const doa = await fetch('https://al-quran-8d642.firebaseio.com/data.json?print=pretty');
    return doa.json();
}