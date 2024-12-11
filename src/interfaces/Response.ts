interface ResponseData<T> {
    data: T;
    status: number;
    message?: string;
}

export default ResponseData;