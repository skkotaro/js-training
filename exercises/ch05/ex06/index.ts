try {
    console.log('try');
    throw new Error('error');
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally');
}