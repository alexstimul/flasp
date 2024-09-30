class AsyncState<T> {
    private _inProcess: boolean
    private _data?: T
    private _error?: string
    private _timerID?: number

    get inProcess() {
        return this._inProcess
    }

    get data() {
        return this._data
    }

    get error() {
        return this._error
    }

    protected constructor(inProcess: boolean, data?: T, error?: string, timerId?: number) {
        this._inProcess = inProcess
        this._error = error
        this._data = data
        this._timerID = timerId
    }

    static create<T>() {
        return new AsyncState<T>(false)
    }

    static createProcess<T>() {
        return new AsyncState<T>(true)
    }

    static createSuccess<T>(data: T) {
        return new AsyncState<T>(false, data)
    }

    static createFailed<T>(error: string) {
        return new AsyncState<T>(false, undefined, error)
    }

    toProcess<T>() {
        return AsyncState.createProcess<T>()
    }

    toSuccess(data: T) {
        if (this._timerID) {
            clearTimeout(this._timerID)
            this._timerID = undefined
        }

        return AsyncState.createSuccess(data)
    }

    toFailed<T>(error: string) {
        if (this._timerID) {
            clearTimeout(this._timerID)
            this._timerID = undefined
        }

        return AsyncState.createFailed<T>(error)
    }
}

export default AsyncState
