import { STONE, MARK } from "./consts";


export class Vertex {
    stone: STONE = STONE.EMPTY;
    mark: MARK = MARK.NONE;
    label: string = "";
    style: string = "";

    constructor() {
        this.Clear();
    }

    Clear() {
        this.stone = STONE.EMPTY;
        this.mark = MARK.NONE;
        this.label = '';
    }
}
